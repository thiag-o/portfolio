import styled, { css } from 'styled-components';

export const Arrow = styled.div`
  display: block;
  width: fit-content;
  height: fit-content;
  color: ${({ theme }) => theme.colors.primary};
  z-index: 2;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    filter: brightness(1.2);
  }

  &.slick-next {
    right: -15px;
  }
  &.slick-prev {
    left: -15px;
  }

  &::before {
    display: none;
  }
`;
