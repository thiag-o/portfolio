import styled, { css } from 'styled-components';

export const Container = styled.section`
  position: relative;
  margin-top: 80px;
`;

export const BgContent = styled.div`
  position: relative;
  min-height: 100vh;
  z-index: 1;

  background-color: ${({ theme }) => theme.colors.grays['c10']}E3;
`;

export const ImgBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  height: 100%;
  width: 40vw;

  background: url('/contact.jpg');
  background-size: cover;
`;

export const Content = styled.div`
  position: relative;
  /* z-index: 1; */
  min-height: inherit;
  color: ${({ theme }) => theme.colors.grays['c2']};
`;
