import styled from "styled-components";
import { Link } from "react-router-dom";
import { MENU_WIDTH } from "../../styles/Global";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  background: #ffffff;
  padding: 12px 0px;
  border-right: 0.6px solid #ebeef5;

  @media (min-width: 992px) {
    width: ${MENU_WIDTH};
  }
`;

export const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BrandName = styled.h2`
  font-weight: 600;
  color: #3b3a3f;
`;

export const Divider = styled.div`
  border-bottom: 0.6px solid #ebeef5;
  margin-top: 12px;
  width: 100%;
`;

export const MenuModulesContainer = styled.div`
  margin-top: 36px;
`;

export const MenuItemContainer = styled.div<{ activeItem: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  height: 40px;

  & + & {
    margin-top: 12px;
  }

  ${({ activeItem }) =>
    activeItem &&
    `
    img {
      filter: brightness(0) sepia(1) hue-rotate(-70deg) saturate(5);
    }

    a {
      color: #000000;
      font-weight: 700;
    }
  `}
`;

export const MenuItemIcon = styled.img`
  width: 25px;
`;

export const MenuItemLink = styled(Link)`
  color: #808496;
  font-weight: 600;
  text-decoration: none;
  margin-left: 4px;
`;
