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
`;

export const WelcomeTitle = styled.p`
  font-weight: 600;
`;
