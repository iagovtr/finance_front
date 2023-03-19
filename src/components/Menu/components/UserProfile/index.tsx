import React from "react";
import * as S from "./styles";
import UserProfileIcon from "/profile.png";
import MoreIcon from "/more.png";

const UserProfile = () => {
  return (
    <S.UserProfileContainer>
      <S.IconContainer>
        <S.Icon src={UserProfileIcon} alt="Foto de perfil" />
      </S.IconContainer>
      <S.ProfileLabelsContainer>
        <S.ProfileName>Nome do usuário</S.ProfileName>
        <S.ProfileEmail>E-mail do usuário</S.ProfileEmail>
      </S.ProfileLabelsContainer>
      <S.IconContainer>
        <S.Icon src={MoreIcon} alt="Mais detalhes" className="info" />
      </S.IconContainer>
    </S.UserProfileContainer>
  );
};

export default UserProfile;
