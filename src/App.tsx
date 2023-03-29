import { FC, ReactElement, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Home } from './Pages/home/Home';

const App: FC = (): ReactElement => {
  const [navVisible, showNavbar] = useState(false);

  return (
    <BrowserRouter>
      <Header visible={navVisible} show={showNavbar} navVisible={navVisible} />
      <Sidebar visible={navVisible} show={showNavbar} navVisible={navVisible} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
