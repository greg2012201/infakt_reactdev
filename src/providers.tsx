import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { BrowserRouter } from 'react-router-dom';

type Props = {
  children: ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </BrowserRouter>
  );
};
