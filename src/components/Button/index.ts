import { styled } from 'styled-components';

export const Button = styled.button`
  padding: 7px 16px;
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.blue[50]};
  color: ${({ theme }) => theme.colors.blue[600]};
  border-radius: 8px;
  border: none;
  line-height: ${({ theme }) => theme.font.lineHeight.sm};
  font-size: ${({ theme }) => theme.font.size.sm};
  font-family: roboto, sans-serif;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
