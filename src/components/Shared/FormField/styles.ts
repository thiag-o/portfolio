import styled from 'styled-components';

export const Container = styled.div``;

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;

  border: none;
  border-radius: 4px;

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 1rem;
  line-height: 1.5;
  padding: 12px;

  background-color: ${({ theme }) => theme.colors.grays['c9']};
  color: ${({ theme }) => theme.colors.grays['c2']};

  transition: all 0.2s ease-in-out;

  &:focus {
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.colors.primary}80;
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

  font-family: var(--font-default);
  font-size: 1rem;
  line-height: 1.5;
  padding: 12px;

  background-color: ${({ theme }) => theme.colors.grays['c9']};
  color: ${({ theme }) => theme.colors.grays['c2']};

  transition: all 0.2s ease-in-out;

  &:focus {
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.colors.primary}80;
  }
`;
