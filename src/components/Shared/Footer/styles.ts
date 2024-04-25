import styled from 'styled-components';

export const Container = styled.footer`
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
  padding: 40px 0;
  background-color: ${({ theme }) => theme.colors.grays['c10']};
  color: ${({ theme }) => theme.colors.grays['c2']};

  @media (max-width: 576px) {
    padding: 32px 0;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-size: 1rem;
  line-height: 1.4;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  transition: 0.2s ease-in-out;

  &:hover {
    filter: brightness(1.4);
  }
`;
