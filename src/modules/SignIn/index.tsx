import React, { ChangeEvent, useState } from "react";
import * as S from "./styles";
import { fields } from "./modules";
import useAuth from "../../hooks/useAuth";
import { emailValidation } from "../../utils/emailRegExp";
import useError from "../../hooks/useError";
import { IStatusCode } from "../../contexts/interfaces";

interface IFormProps {
  email: string;
  password: string;
}

const SignIn = () => {
  const { signIn } = useAuth();
  const { setStatusCode } = useError();
  const [form, setForm] = useState<IFormProps>({
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setForm({ ...form, [event.target.name]: value });
  };

  const handleLogin = async () => {
    if (!emailValidation(form.email) || !form.password) {
      return setStatusCode(IStatusCode.BadRequest);
    }

    await signIn(form.email, form.password);
  };

  return (
    <S.SignInContainer>
      <S.CardContainer>
        <S.Title>Bem vindo de volta!</S.Title>
        <S.Paragraph>
          Entre com suas credenciais para acessar sua conta.
        </S.Paragraph>
        {fields.map((field) => (
          <S.InputContainer key={field.id}>
            <S.Icon src={field.iconPath} alt={field.altImage} />
            <S.Input
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              onChange={handleChange}
            />
          </S.InputContainer>
        ))}
        <S.Login onClick={handleLogin}>Entrar</S.Login>
      </S.CardContainer>
    </S.SignInContainer>
  );
};

export default SignIn;
