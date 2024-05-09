import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import styled from 'styled-components';

import { Button } from '../../CommonButton/styles';

export const HeaderDesktopContainer = styled.header`
  position: fixed;
  width: 100%;
  top: 15px;
  left: 50%;
  transform: translate(-50%);
  z-index: 10;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 24px 48px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.grays['c12']}80;
  backdrop-filter: blur(15px);
  color: ${({ theme }) => theme.colors.grays['c2']};
  border-radius: 400px;
`;

export const Logo = styled(Link).attrs({
  spy: true,
  offset: -30,
  smooth: true,
  activeClass: 'active',
})`
  cursor: pointer;
`;

export const Navigation = styled.nav``;

export const NavigationList = styled.ul`
  display: flex;
  gap: 32px;
  align-items: center;
  list-style: none;
`;
export const NavigationItem = styled.li``;

export const NavigationLink = styled(Link).attrs({
  spy: true,
  offset: -50,
  smooth: true,
  activeClass: 'active',
})`
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ThemeItem = styled.li``;

export const ThemeButton = styled(motion(Button))`
  background-color: transparent;
  padding: 0;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.grays['w']};
`;
