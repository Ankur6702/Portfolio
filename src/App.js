import { Route, Routes } from 'react-router-dom';
import styled from "styled-components";
import Sidebar from "./components/sidebar";
import HomePage from "./pages/homepage";
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { IconButton, Switch } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';


function App() {
  const [theme, setTheme] = useState('dark-theme');
  const [navToggle, setNavToggle] = useState(false);

  function themeToggler() {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  }

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div>
      <Sidebar navToggle={navToggle} />
      <div className="light-dark-mode">
        <div className="left-content">
          <Brightness4Icon />
        </div>
        <div className="right-content">
          <Switch
            onClick={themeToggler}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </div>
      </div>

      <div className='ham-burger-menu' onClick={() => setNavToggle(!navToggle)}>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </div>

      <MainContentStyled onClick={() => setNavToggle(false)}>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/about" element={<AboutPage />} exact />
          <Route path="/resume" element={<ResumePage />} exact />
          <Route path="/projects" element={<ProjectsPage />} exact />
          <Route path="/contact" element={<ContactPage />} exact />
        </Routes>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1200px) {
      margin-left: 0;
    }
`

export default App;
