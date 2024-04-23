import styled, { css } from 'styled-components';

export const Container = styled.section`
  position: relative;
  padding-top: 80px;

  ${({ theme }) => css`
    background: linear-gradient(
        ${theme.colors.grays['c10']}E3,
        ${theme.colors.grays['c10']}E3
      ),
      url('/contact.jpg');
  `}

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Content = styled.div`
  position: relative;
  min-height: 100vh;
  z-index: 1;

  color: ${({ theme }) => theme.colors.grays['c2']};
`;

export const ImgBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  height: 100%;
  width: 100vw;

  background: url('/contact.jpg');
  background-size: cover;
`;
