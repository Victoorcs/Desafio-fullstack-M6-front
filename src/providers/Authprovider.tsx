import { ReactNode, createContext, useEffect,  } from "react";
import { LoginData } from "../pages/loginPage/validator";
import api from "../service/api";
import { useNavigate } from "react-router-dom";
import { RegisterData } from "../pages/registerPage/validator";


interface AuthProviderProps {
    children: ReactNode
}
interface AuthContextValues {
    signIn: (data: LoginData) => Promise<void>,
    signUp: (data: RegisterData) => Promise<void>
}
interface LoginResponse {
    token: string
}

  
interface RegisterResponse {
    token: string;
   
  }

export const AuthContext = createContext({} as AuthContextValues)

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const navigate = useNavigate()
    
    useEffect(() => {
        const token = localStorage.getItem("your-user:token")
        if (!token) {
            
            return
        }
        api.defaults.headers.common.Authorization = `Bearer ${token}`

    },[])

    const signIn = async (data: LoginData) => {
        try {
            const response = await api.post<LoginResponse>("/login", data)
            const { token } = response.data
            api.defaults.headers.common.Authorization = `Bearer ${token}`
            localStorage.setItem("your-user:token", token)
            navigate("dashboard")
        }
        catch (error) {
            console.log(error)
        }
    }

    const signUp = async (data: RegisterData) => {
        try {
          const response = await api.post<RegisterResponse>("/register", data)
          const { token } = response.data;
          api.defaults.headers.common.Authorization = `Bearer ${token}`
          localStorage.setItem("your-user:token", token);
          navigate("dashboard");
        } catch (error) {
          console.log(error)
        }
      };

    return (
        <AuthContext.Provider value={{ signIn,signUp }}>
            {children}
        </AuthContext.Provider>
    )
}