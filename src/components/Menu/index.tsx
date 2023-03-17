import React, { ChangeEvent, useState } from "react";
import { useLocation } from "react-router-dom";
import * as S from "./styles";
import WalletBrandIcon from "/wallet-brand.png";
import SearchBar from "../SearchBar";
import { menuModules } from "./modules";
import UserProfile from "./components/UserProfile";

const Menu = () => {
  const [modules, setModules] = useState(menuModules);
  const { pathname } = useLocation();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toUpperCase();
    setModules(
      menuModules.filter((element) =>
        element.title.toUpperCase().includes(value)
      )
    );
  };

  return (
    <S.Container>
      <S.BrandContainer>
        <S.BrandLogo src={WalletBrandIcon} alt="Logomarca" />
        <S.BrandName>Financex</S.BrandName>
      </S.BrandContainer>
      <S.SearchBarContainer>
        <SearchBar placeholder="Pesquisa" onChange={handleChange} />
      </S.SearchBarContainer>
      <S.MenuModulesContainer>
        {modules.map((menuItem) => (
          <S.MenuItemContainer
            key={menuItem.id}
            isActive={menuItem.link === pathname}
          >
            <S.MenuItemIcon src={menuItem.iconPath} alt={menuItem.altImage} />
            <S.MenuItemLink to={menuItem.link}>{menuItem.title}</S.MenuItemLink>
          </S.MenuItemContainer>
        ))}
      </S.MenuModulesContainer>
      <S.UserProfileContainer>
        <UserProfile />
      </S.UserProfileContainer>
    </S.Container>
  );
};

export default Menu;
