import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;

  border: none;
  border-radius: 4px;

  outline: none;
  background-color: ${({ theme }) => theme.colors.primary};

  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1;
  letter-spacing: 0.02rem;

  cursor: pointer;
`;
