import { styled } from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 24px;
  margin: 0 auto;
  max-width: 1440px;

  @media (min-width: 600px) {
    padding: 48px 84px 24px 84px;
  }
`;
