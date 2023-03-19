import styled from "styled-components";

export const SignInContainer = styled.div`
  border: 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  max-width: 500px;
  padding: 32px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.06);
`;

export const Title = styled.h2`
  font-weight: 600;
`;

export const Paragraph = styled.p`
  margin-top: 12px;
`;

export const InputContainer = styled.div`
  position: relative;
  margin-top: 32px;
  width: 90%;

  & + & {
    margin-top: 16px;
  }
`;

export const Icon = styled.img`
  position: absolute;
  top: 12.5px;
  left: 8px;
`;

export const Input = styled.input`
  height: 40px;
  width: 100%;
  border: 1px solid #f5f5f5;
`;

export const Login = styled.button`
  width: 90%;
  background: #267cf8;
  border-color: #267cf8;
  color: #ffffff;
  margin-top: 32px;
`;
