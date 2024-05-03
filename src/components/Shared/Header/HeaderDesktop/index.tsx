import { Moon, Sun } from 'phosphor-react';
import React from 'react';
import { Link } from 'react-scroll';

import { useChangeTheme } from '@/hooks/useChangeTheme';
import useWindowSize from '@/hooks/useWindowSize';

import HeaderMobile from '../HeaderMobile';
import {
  HeaderDesktopContainer,
  Logo,
  Navigation,
  NavigationItem,
  NavigationList,
  ThemeButton,
  ThemeItem,
  Wrapper,
} from './styles';

export default function HeaderDesktop() {
  const { themeProvider, setThemeProvider } = useChangeTheme();

  function handleChangeThemeProvider(theme: 'light' | 'dark') {
    setThemeProvider(theme);
  }

  return (
    <HeaderDesktopContainer className="container">
      <Wrapper>
        <Logo>Logo</Logo>
        <Navigation>
          <NavigationList>
            <NavigationItem>
              <Link to="">Sobre</Link>
            </NavigationItem>
            <NavigationItem>
              <Link to="">Tecnologias</Link>
            </NavigationItem>
            <NavigationItem>
              <Link to="">Projetos</Link>
            </NavigationItem>
            <NavigationItem>
              <Link to="">Contato</Link>
            </NavigationItem>
            <ThemeItem>
              {themeProvider === 'dark' ? (
                <ThemeButton
                  onClick={() => handleChangeThemeProvider('light')}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Sun weight="bold" />
                </ThemeButton>
              ) : (
                <ThemeButton
                  onClick={() => handleChangeThemeProvider('dark')}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Moon weight="bold" />
                </ThemeButton>
              )}
            </ThemeItem>
          </NavigationList>
        </Navigation>
      </Wrapper>
    </HeaderDesktopContainer>
  );
}
