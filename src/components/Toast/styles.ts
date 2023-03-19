import styled from "styled-components";

export const ToastContainer = styled.div`
  position: absolute;
  top: 5%;
  right: 24px;
  background: #ffffff;
  padding: 8px;
  border-radius: 4px;
  background: #e23f33;
  max-width: 20%;
`;

export const CloseIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const CloseIcon = styled.img`
  cursor: pointer;
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  margin-right: 16px;
`;

export const Message = styled.p`
  color: #ffffff;
  margin-left: 8px;
  font-size: 14px;
  font-weight: 500;
`;
