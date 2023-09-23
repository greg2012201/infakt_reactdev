import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

type Props = {
    children: ReactNode;
};

export const Providers = ({ children }: Props) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
