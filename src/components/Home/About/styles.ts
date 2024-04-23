import { Quotes } from 'phosphor-react';
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

export const QuoteSection = styled.blockquote`
  position: absolute;
  bottom: 32px;
  right: 15px;

  display: flex;
  width: fit-content;

  flex-direction: column;
  align-items: center;

  gap: 6px;

  color: ${({ theme }) => theme.colors.grays['c2']};
`;

export const QuoteIcon = styled(Quotes).attrs({
  weight: 'fill',
})`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const QuoteText = styled.div`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const QuoteAuthor = styled.div`
  font-size: 0.875rem;
`;

export const QuoteDivider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.grays['c9']};
`;
