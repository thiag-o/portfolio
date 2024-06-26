import styled, { css } from 'styled-components';

export const Container = styled.section`
  position: relative;
  min-height: 100vh;
  ${({ theme }) => css`
    background: linear-gradient(
        ${theme.colors.backgroundTransparent},
        ${theme.colors.backgroundTransparent}
      ),
      url('/projects/bg/bg.jpg');
  `}
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 80px;
  padding-bottom: 40px;
`;
export const Content = styled.div`
  max-width: 1200px;
  padding: 0 32px;
  position: relative;
  min-height: inherit;

  color: ${({ theme }) => theme.colors.grays['c2']};

  .slick-list {
    margin: 0 -7px;
    & .slick-slide > div {
      padding: 10px;
      height: 100% !important;

      @media (max-width: 768px) {
        padding: 4px;
      }
    }
  }
  .slick-track {
    display: flex !important;
  }

  .slick-slide {
    height: inherit !important;
  }

  .slick-dots {
  }
  .slick-dots {
    bottom: -30px;
    li button {
      &::before {
        font-size: 8px;

        color: ${({ theme }) => theme.colors.primary};
      }
    }
    li button:focus:before {
      opacity: 1;
    }
  }

  @media (max-width: 576px) {
    padding: 0 10px;
  }
`;

export const ProjectList = styled.div`
  margin: 0 auto;
  max-width: fit-content;
  display: grid !important;
  gap: 12px !important;
  grid-template-columns: 1fr 1fr 1fr !important;
`;
