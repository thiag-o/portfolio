import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled(Link).attrs({
  target: '_blank',
})`
  width: 100%;
  padding: 12px;
  border: 2px solid transparent;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  color: ${({ theme }) => theme.colors.grays['w']};
  text-decoration: none;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.backgroundCard};

  cursor: pointer;

  transition: 0.2s ease-in;

  &:hover {
    border-color: ${({ theme }) => theme.colors.grays['c7']};
  }

  img {
    filter: brightness(${({ theme }) => theme.imgBrightness});
  }

  @media (max-width: 768px) {
    padding: 12px;

    flex-direction: column;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Text = styled.span`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1;
`;
