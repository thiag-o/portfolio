import {
  AnimatePresence,
  AnimationControls,
  TargetAndTransition,
  Transition,
} from 'framer-motion';
import {
  Atom,
  ChatTeardropDots,
  House,
  Monitor,
  Moon,
  Person,
  Sun,
} from 'phosphor-react';
import React, { useState } from 'react';
import { Link } from 'react-scroll';

import { useChangeTheme } from '@/hooks/useChangeTheme';

import { NavigationLink } from '../HeaderDesktop/styles';
import {
  Content,
  Hamburger,
  HeaderMobileButton,
  HeaderMobileContainer,
  Icon,
  Navigation,
  NavigationItem,
  NavigationList,
  ThemeButton,
  ThemeItem,
  Wrapper,
} from './styles';

export default function HeaderMobile() {
  const { themeProvider, setThemeProvider } = useChangeTheme();
  const [isOpen, setOpen] = useState(false);
  function handleChangeThemeProvider(theme: 'light' | 'dark') {
    setThemeProvider(theme);
  }

  const sidebar = {
    open: {
      height: '100%',
      transition: {
        duration: 0.2,
        type: 'tween',
      },
    } as TargetAndTransition,
    closed: {
      height: '72px',
      transition: {
        type: 'spring',
        stiffness: 50,
      },
    } as TargetAndTransition,
  };

  return (
    <HeaderMobileContainer className="container">
      <AnimatePresence>
        <Wrapper
          initial={{ height: '72px' }}
          animate={isOpen ? 'open' : 'closed'}
          variants={sidebar}
        >
          <HeaderMobileButton>
            <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
          </HeaderMobileButton>

          <Content>
            <NavigationLink to="about">
              <Icon>
                <House size={28} />
              </Icon>
            </NavigationLink>

            <Navigation>
              <NavigationList>
                <NavigationItem>
                  <NavigationLink to="about">
                    <Icon>
                      <Person size={28} />
                    </Icon>
                  </NavigationLink>
                </NavigationItem>
                <NavigationItem>
                  <NavigationLink to="">
                    <Icon>
                      <Atom size={28} />
                    </Icon>
                  </NavigationLink>
                </NavigationItem>
                <NavigationItem>
                  <NavigationLink to="">
                    <Icon>
                      <Monitor size={28} />
                    </Icon>
                  </NavigationLink>
                </NavigationItem>
                <NavigationItem>
                  <NavigationLink to="">
                    <Icon>
                      <ChatTeardropDots size={32} />
                    </Icon>
                  </NavigationLink>
                </NavigationItem>
                {/* <ThemeItem>
                  {themeProvider === 'dark' ? (
                    <ThemeButton
                      onClick={() => handleChangeThemeProvider('light')}
                    >
                      <Sun weight="bold" />
                    </ThemeButton>
                  ) : (
                    <ThemeButton
                      onClick={() => handleChangeThemeProvider('dark')}
                    >
                      <Moon weight="bold" />
                    </ThemeButton>
                  )}
                </ThemeItem> */}
              </NavigationList>
            </Navigation>
          </Content>
        </Wrapper>
      </AnimatePresence>
    </HeaderMobileContainer>
  );
}
