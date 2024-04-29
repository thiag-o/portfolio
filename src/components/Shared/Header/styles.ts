import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.grays['c12']};
  padding: 24px;
  color: ${({ theme }) => theme.colors.grays['w']};
`;

export const Logo = styled.a``;

export const Navigation = styled.nav``;

export const NavigationList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;
export const NavigationItem = styled.li``;
