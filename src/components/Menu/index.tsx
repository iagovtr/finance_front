import React, { ChangeEvent, useState } from "react";
import { useLocation } from "react-router-dom";
import * as S from "./styles";
import { menuModules } from "./modules";

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
        <S.BrandName>Financex</S.BrandName>
      </S.BrandContainer>
      <S.Divider />
      <S.MenuModulesContainer>
        {modules.map((menuItem) => (
          <S.MenuItemContainer
            key={menuItem.id}
            activeItem={menuItem.link === pathname}
          >
            <S.MenuItemIcon src={menuItem.iconPath} alt={menuItem.altImage} />
            <S.MenuItemLink to={menuItem.link}>{menuItem.title}</S.MenuItemLink>
          </S.MenuItemContainer>
        ))}
      </S.MenuModulesContainer>
    </S.Container>
  );
};

export default Menu;
