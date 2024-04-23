import styled, { css } from 'styled-components';

export const Container = styled.section`
  position: relative;
  min-height: 100vh;
  z-index: 1;

  ${({ theme }) => css`
    background: linear-gradient(
      180deg,
      ${theme.colors.grays['c10']} 71%,
      ${theme.colors.grays['c10']}F2 100%
    );
  `}

  padding-top: 80px;
`;

export const Content = styled.div`
  position: relative;
  min-height: inherit;
  color: ${({ theme }) => theme.colors.grays['c2']};
`;
