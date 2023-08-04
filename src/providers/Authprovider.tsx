import { ReactNode, createContext, useEffect, useState,  } from "react";
import api from "../service/api";
import { useNavigate } from "react-router-dom";
import { TContato, TContatoResponse } from "../shemas/contatoSchema";
import { TLoginData, TUserData, TUserResponseData } from "../shemas/userSchema";
import { parseCookies } from "nookies";


interface AuthProviderProps {
    children: ReactNode
}
interface AuthContextValues {
    signIn: (loginData: TLoginData) => Promise<void>,
    signUp: (userData: TUserData) => Promise<void>
    user:  () => Promise<TUserResponseData>,
    createContato: (contatoData: TContato) => Promise<void>,
    contatos: TContatoResponse[] | null,
    setContatos: (contatoData: TContatoResponse[]) => void
    deleteContato: (contatoId: Number) => Promise<void>
}
interface LoginResponse {
    token: string
}

  
interface RegisterResponse {
    token: string;
   
  }

export const AuthContext = createContext({} as AuthContextValues)

export const AuthProvider = ({ children }: AuthProviderProps) => {
    //const router = useRouter()
    const navigate = useNavigate()

    const [contatos, setContatos] = useState<TContatoResponse[]>([]);
    
    useEffect(() => {
        const token = localStorage.getItem("your-user:token")
        if (!token) {
            
            return
        }
        api.defaults.headers.common.Authorization = `Bearer ${token}`

    },[])

    const signIn = async (loginData: TLoginData) => {
        try {
            const response = await api.post<LoginResponse>("/login", loginData)
            const { token } = response.data
            api.defaults.headers.common.Authorization = `Bearer ${token}`
            localStorage.setItem("your-user:token", token)
            navigate("users")
        }
        catch (error) {
            console.log(error)
        }
    }

    const signUp = async (userData: TUserData) => {
        try {
          const response = await api.post<RegisterResponse>("/users",userData)
          const { token } = response.data;
          api.defaults.headers.common.Authorization = `Bearer ${token}`
          localStorage.setItem("your-user:token", token);
          navigate("users");
        } catch (error) {
          console.log(error)
        }
      }


      const user = async () => {
        try {
            const { "your-user:token": token } = parseCookies();
            const response = await api.get("/users", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
    
            if (response.status === 200) {
                console.log(response.data);
                setContatos(response.data.contacts);
                return response.data;
            } else {
                return null;
            }
        } catch (err) {
            console.error(err);
            return null;
        }
    };



    const createContato = async (contatoData: TContato) => {
        try {
          const token = localStorage.getItem("your-user:token");
          if (!token) {
            throw new Error("No token found");
          }
    
          const response = await api.post("/contacts", contatoData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
    
          if (response.status === 201) {
            return response.data;
          } else {
            throw new Error("Failed to create contact");
          }
        } catch (error) {
          console.error(error);
          return null;
        }
      };


    const deleteContato = async (contatoId: Number) => {
        try {
          const token = localStorage.getItem("your-user:token");
          if (!token) {
            throw new Error("No token found");
          }
    
          const response = await api.delete(`/contacts/${contatoId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
    
          if (response.status === 204) {
            return response.data;
          } else {
            throw new Error("Failed to delete contact");
          }
        } catch (error) {
          console.error(error);
          return null;
        }
      };
    

    return (
        <AuthContext.Provider value={{ signIn,signUp,user,createContato,contatos,setContatos,deleteContato}}>
            {children}
        </AuthContext.Provider>
    )
}