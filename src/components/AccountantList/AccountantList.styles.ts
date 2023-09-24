import { styled } from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  gap: 24px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  margin: 0 auto;
  max-width: 1440px;
  gap: 24px;
`;
