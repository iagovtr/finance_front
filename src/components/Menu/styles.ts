import styled from "styled-components";
import { Link } from "react-router-dom";
import { MENU_WIDTH } from "../../styles/Global";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  height: 100%;
  background: #131729;
  padding: 24px 8px;

  @media (min-width: 992px) {
    width: ${MENU_WIDTH};
  }
`;

export const BrandContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BrandLogo = styled.img`
  width: 40px;
`;

export const BrandName = styled.h2`
  font-weight: 500;
  color: #ffffff;
  margin-left: 12px;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuModulesContainer = styled.div`
  min-height: 75%;
`;

export const MenuItemContainer = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  background: ${({ isActive }) => (isActive ? "#242839" : "")};
  border-radius: 4px;
  height: 40px;

  a {
    font-weight: ${({ isActive }) => (isActive ? "500" : "400")};
    color: ${({ isActive }) => (isActive ? "#ffffff" : "")};
  }

  & + & {
    margin-top: 12px;
  }
`;

export const MenuItemIcon = styled.img`
  width: 25px;
`;

export const MenuItemLink = styled(Link)`
  color: #808496;
  text-decoration: none;
  margin-left: 8px;
`;
