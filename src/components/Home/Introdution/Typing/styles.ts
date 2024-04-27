import styled from 'styled-components';

export const DescriptionPerson = styled.h2`
  margin-top: 14px;
  min-height: clamp(1.5rem, 2vw, 2rem);

  color: ${({ theme }) => theme.colors.grays['c2']};
  font-size: clamp(1.5rem, 2vw, 2rem);
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: clamp(1.5rem, 2vw, 2rem);

  @media (max-width: 576px) {
    margin-top: 10px;
    font-size: 1.2rem;
  }

  .texting::after {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
