import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Button } from '../CommonButton/styles';

export const Container = styled.header`
  position: fixed;
  width: 100%;
  top: 15px;
  left: 50%;
  transform: translate(-50%);
  z-index: 10;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 24px 48px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.grays['c12']}80;
  backdrop-filter: blur(15px);
  color: ${({ theme }) => theme.colors.grays['w']};
  border-radius: 400px;
`;

export const Logo = styled.a``;

export const Navigation = styled.nav``;

export const NavigationList = styled.ul`
  display: flex;
  gap: 32px;
  align-items: center;
  list-style: none;
`;
export const NavigationItem = styled.li`
  a {
    font-size: 1rem;
    cursor: pointer;
  }
`;

export const ThemeItem = styled.li``;

export const ThemeButton = styled(motion(Button))`
  background-color: transparent;
  padding: 0;
  font-size: 20px;
`;
