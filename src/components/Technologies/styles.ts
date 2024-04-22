import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  min-height: 100vh;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.grays['c10']}F2;
  padding-top: 80px;
`;

export const Content = styled.div`
  position: relative;
  min-height: inherit;
  color: ${({ theme }) => theme.colors.grays['c2']};
  h2 {
    font-size: 2.4rem;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  }

  h5 {
    margin-top: 4px;

    font-size: 0.875rem;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
`;
