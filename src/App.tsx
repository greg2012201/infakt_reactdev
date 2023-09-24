import { AccountantsPage } from "./pages/AccountantsPage";
import { Providers } from "./providers";
import GlobalStyle from "./styles/global";

export const App = () => (
    <Providers>
        <GlobalStyle />
        <AccountantsPage />
    </Providers>
);
