import styled, { css } from 'styled-components';

export const Arrow = styled.div`
  display: block;
  width: fit-content;
  height: fit-content;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    filter: brightness(1.2);
  }

  &.slick-next {
    right: -30px;
  }
  &.slick-prev {
    left: -30px;
  }

  &::before {
    display: none;
  }
`;
