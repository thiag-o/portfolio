import { motion } from 'framer-motion';
import { Squash } from 'hamburger-react';
import styled from 'styled-components';

import CommonButton from '../../CommonButton';

export const HeaderMobileContainer = styled.header`
  position: fixed;
  width: 100%;
  top: 15px;
  left: 50%;
  transform: translate(-50%);
  z-index: 10;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const HeaderMobileButton = styled(CommonButton)`
  display: block;
  padding: 0;
  height: 48px;
  width: 48px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.grays['w']};
  border-radius: 24px;

  * {
    transition: all 400ms ease, color 0ms ease !important;
  }
`;

export const Hamburger = styled(Squash)`
  display: block;
`;

export const Content = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-direction: column;
  margin-top: 32px;
`;

export const Wrapper = styled(motion.div)`
  min-height: 72px;
  width: fit-content;
  padding: 12px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.grays['c12']}80;
  backdrop-filter: blur(15px);
  color: ${({ theme }) => theme.colors.grays['w']};
  border-radius: 400px;
  align-items: center;
  flex-direction: column;
`;

export const Logo = styled.a``;

export const Navigation = styled.nav`
  @media (max-width: 768px) {
    margin-top: 24px;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  gap: 32px;
  align-items: center;
  list-style: none;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`;
export const NavigationItem = styled.li`
  a {
    font-size: 1rem;
    cursor: pointer;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  color: ${({ theme }) => theme.colors.grays['w']};
`;

export const ThemeItem = styled.li``;

export const ThemeButton = styled(motion(CommonButton))`
  background-color: transparent;
  padding: 0;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.grays['w']};

  height: 48px;
  width: 48px;
`;
