import styled from "styled-components";

export const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #808496;
  border-radius: 4px;
  padding: 8px;
  position: relative;
`;

export const IconContainer = styled.div`
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 20px;

  &.info {
    width: 15px;
    position: absolute;
    top: 8px;
    right: 2px;
  }
`;

export const ProfileLabelsContainer = styled.div`
  margin-left: 8px;
`;

export const ProfileName = styled.p`
  color: white;
  font-size: 12px;
  font-weight: 500;
`;

export const ProfileEmail = styled.p`
  color: #808496;
  font-size: 12px;
`;
