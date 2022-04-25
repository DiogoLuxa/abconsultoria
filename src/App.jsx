import { Outlet } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';
import AppStyled from './styles/App.styled';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <AppStyled>
      <GlobalStyle />
      <Header />
      <Outlet />
      <Footer />
    </AppStyled>
  );
}

export default App;
