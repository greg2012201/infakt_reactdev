import { styled } from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  align-self: center;
  gap: 24px;
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error.base};
`;
