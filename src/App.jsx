import { Outlet } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';
import AppStyled from './styles/App.styled';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';

function App() {
  return (
    <AppStyled>
      <GlobalStyle />
      <Button />
      <Header />
      <Outlet />
      <Footer />
    </AppStyled>
  );
}

export default App;
