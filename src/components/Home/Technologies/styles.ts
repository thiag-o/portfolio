import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  min-height: 100vh;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.backgroundTransparent};
  padding-top: 80px;
  padding-bottom: 40px;
`;

export const Content = styled.div`
  position: relative;
  min-height: inherit;
  color: ${({ theme }) => theme.colors.grays['c2']};
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
