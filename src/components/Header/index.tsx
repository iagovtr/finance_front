import React from "react";
import useAuth from "../../hooks/useAuth";
import * as S from "./styles";

const Header = () => {
  const { user } = useAuth();
  return (
    <S.HeaderContainer>
      <div>
        <S.WelcomeTitle>Bem vindo, {user?.firstName}!</S.WelcomeTitle>
      </div>
    </S.HeaderContainer>
  );
};

export default Header;
