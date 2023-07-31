import { useContext } from "react"
import { AuthContext } from "../providers/Authprovider"


export const useAuth = () => {
    const authContext = useContext(AuthContext)

    return authContext
}