import React, { ReactNode } from 'react';
import { Main } from './MainLayout.styles';

type Props = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <Main>
      <img alt="inFakt logo" width="146px" height="38px" src="./images/logo-infakt.svg" />
      {children}
    </Main>
  );
};
