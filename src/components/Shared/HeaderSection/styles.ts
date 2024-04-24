import styled, { css } from 'styled-components';

interface IContainerProps {
  centered?: number;
}

export const Container = styled.div<IContainerProps>`
  margin-bottom: 32px;
  ${({ centered }) =>
    centered === 1 &&
    css`
      text-align: center;
    `}
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;
export const Subtitle = styled.h5`
  margin-top: 4px;
  line-height: 1.4;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.grays['c3']};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;
