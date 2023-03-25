import styled from "styled-components";
import { MENU_WIDTH } from "../../styles/Global";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 0.6px solid #ebeef5;
  position: fixed;
  width: 100%;
  height: 50px;
  left: ${MENU_WIDTH};
  background: #ffffff;
  padding: 0px 24px;
  box-shadow: 0px 2px 7px 0px rgba(235, 238, 245, 0.5);
  z-index: 1;
`;

export const WelcomeTitle = styled.p`
  font-weight: 600;
`;
