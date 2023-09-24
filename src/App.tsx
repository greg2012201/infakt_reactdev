import { Route, Routes, Navigate } from 'react-router-dom';
import { AccountantsPage } from './pages/AccountantsPage';
import { Providers } from './providers';
import GlobalStyle from './styles/global';

export const App = () => (
  <Providers>
    <GlobalStyle />
    <Navigate to="/księgowi" />
    <Routes>
      <Route path="księgowi" element={<AccountantsPage />} />
    </Routes>
  </Providers>
);
