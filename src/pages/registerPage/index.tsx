
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth'; 
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterData, schema } from './validator'; 
import * as S from './style'; 

const RegisterPage = () => {
  const { register, handleSubmit } = useForm<RegisterData>({
    resolver: zodResolver(schema), 
  });
  const { signUp, } = useAuth()

  return (
    <S.Main>
      <S.Card>
        <S.Title>Cadastre-se</S.Title>
        <S.Form onSubmit={handleSubmit(signUp)}>
          <S.Label htmlFor="email">Email</S.Label>
          <S.Input type="email" id="email" {...register('email')} />
          <S.Label htmlFor="password">Password</S.Label>
          <S.Input type="password" id="password" {...register('password')} />
          <S.Label htmlFor="phone">Telefone</S.Label>
          <S.Input type="tel" id="phone" {...register('telefone')} />
          
          <S.Button type="submit">Cadastrar</S.Button>
        </S.Form>
      </S.Card>
    </S.Main>
  )
}

export default RegisterPage;
