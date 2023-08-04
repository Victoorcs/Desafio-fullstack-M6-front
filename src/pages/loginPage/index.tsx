import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuth } from "../../hooks/useAuth"
import * as S from './style'
import { TLoginData, loginSchema } from "../../shemas/userSchema"



const LoginPage = () => {

    const { register, handleSubmit } = useForm<TLoginData>({
        resolver: zodResolver(loginSchema)
    })
    const { signIn, } = useAuth()

    return (
        <S.Main>
          <S.Card>
            <S.Title>Login</S.Title>
            <S.Form onSubmit={handleSubmit(signIn)}>
              <S.Label htmlFor="email">Email</S.Label>
              <S.Input type="email" id="email" {...register('email')} />
              <S.Label htmlFor="password">Senha</S.Label>
              <S.Input type="password" id="password" {...register('password')} />
              <S.Button type="submit">Entrar</S.Button>
            </S.Form>
          </S.Card>
        </S.Main>
      );
    };
    
    export default LoginPage;

