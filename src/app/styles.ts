import styled from 'styled-components';

export const Container = styled.main`
  background-color: ${({ theme }) => theme.colors.grays['c10']};
`;

export const SectionBgShare = styled.div`
  position: relative;
`;

export const Background = styled.div`
  position: absolute;
  background: url('/about_tech.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
`;
