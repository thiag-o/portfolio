import { Moon, Sun } from 'phosphor-react';
import React, { useEffect } from 'react';
import { Events, Link } from 'react-scroll';

import { useChangeTheme } from '@/hooks/useChangeTheme';
import useWindowSize from '@/hooks/useWindowSize';

import HeaderMobile from '../HeaderMobile';
import {
  HeaderDesktopContainer,
  Logo,
  Navigation,
  NavigationItem,
  NavigationLink,
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
              <NavigationLink to="about">Sobre</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink to="">Tecnologias</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink to="">Projetos</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink to="">Contato</NavigationLink>
            </NavigationItem>
            {/* <ThemeItem>
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
            </ThemeItem> */}
          </NavigationList>
        </Navigation>
      </Wrapper>
    </HeaderDesktopContainer>
  );
}
