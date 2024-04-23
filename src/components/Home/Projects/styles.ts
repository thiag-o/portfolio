import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  min-height: 100vh;

  padding-top: 80px;
`;
export const Content = styled.div`
  max-width: 1200px;
  padding: 0 32px;
  position: relative;
  min-height: inherit;

  color: ${({ theme }) => theme.colors.grays['c2']};
  h2 {
    text-align: center;
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
  .slick-list {
    margin: 0 -7px;
    & .slick-slide > div {
      padding: 10px;
    }
  }
`;

export const ProjectList = styled.div`
  margin: 0 auto;
  max-width: fit-content;
  display: grid !important;
  gap: 12px !important;
  grid-template-columns: 1fr 1fr 1fr !important;
`;
