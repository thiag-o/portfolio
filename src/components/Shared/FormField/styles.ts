import styled from 'styled-components';

export const Container = styled.div``;

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;

  border: none;
  border-radius: 4px;
  border: 2px solid transparent;

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 1rem;
  line-height: 1.5;
  padding: 12px;

  background-color: ${({ theme }) => theme.colors.grays['w']}17;
  backdrop-filter: blur(8px);

  color: ${({ theme }) => theme.colors.grays['c2']};

  transition: all 0.2s ease-in-out;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const TextArea = styled.textarea`
  height: 300px;
  width: 100%;

  outline: none;

  resize: none;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.1);
  }
  &::-webkit-scrollbar-thumb {
    cursor: auto;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.primary}80;
  }

  border: none;
  border-radius: 4px;
  border: 2px solid transparent;

  font-family: var(--font-default);
  font-size: 1rem;
  line-height: 1.5;
  padding: 12px;

  background-color: ${({ theme }) => theme.colors.grays['w']}17;
  backdrop-filter: blur(8px);
  color: ${({ theme }) => theme.colors.grays['c2']};

  transition: all 0.2s ease-in-out;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
