import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  min-height: 100vh;

  padding-top: 80px;
`;
export const Content = styled.div`
  position: relative;
  min-height: inherit;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ theme }) => theme.colors.grays['c2']};
  h2 {
    font-size: 2.4rem;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    margin-bottom: 32px;
  }

  p {
    margin-bottom: 16px;

    font-size: 1rem;
    line-height: 1.5;
    font-weight: ${({ theme }) => theme.fontWeight.regular};

    @media (max-width: 567px) {
      font-size: 0.875rem;
    }
  }
`;
