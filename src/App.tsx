import { AuthProvider } from "./providers/Authprovider"
import Router from "./routes"
import GlobalStyle from "./styles/GlobalStyle"


export const App = ()=> {
  

  return (
  <>
    <GlobalStyle/> 
    <AuthProvider>
    <Router />
    </AuthProvider>
  </>
  )
}

export default App
