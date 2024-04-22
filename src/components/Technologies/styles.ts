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
    line-height: 1.4;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.grays['c3']};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
`;

export const TecnologiesSection = styled.div`
  margin-top: 48px;
`;

export const SectionTitle = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 1.4rem;
  margin-bottom: 16px;
  @media (max-width: 576px) {
    text-align: center;
  }
`;
export const ListCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  @media (max-width: 576px) {
    justify-content: center;
  }
`;

export const ToolsSection = styled.div`
  margin-top: 32px;
`;
