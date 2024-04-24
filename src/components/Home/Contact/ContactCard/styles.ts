import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled(Link).attrs({
  target: '_blank',
})`
  width: 100%;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  color: ${({ theme }) => theme.colors.grays['w']};
  text-decoration: none;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.grays['c9']};

  cursor: pointer;
`;

export const Text = styled.span`
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1;
`;
