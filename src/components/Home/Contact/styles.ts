import styled, { css } from 'styled-components';

import CommonButton from '@/components/Shared/CommonButton';

export const Container = styled.section`
  position: relative;
  padding-top: 80px;
  padding-bottom: 40px;

  ${({ theme }) => css`
    background: linear-gradient(
        ${theme.colors.grays['c10']}E3,
        ${theme.colors.grays['c10']}E3
      ),
      url('/contact.jpg');
  `}

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Content = styled.div`
  position: relative;
  min-height: 100vh;
  z-index: 1;

  color: ${({ theme }) => theme.colors.grays['c2']};
`;

export const ImgBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  height: 100%;
  width: 100vw;

  background: url('/contact.jpg');
  background-size: cover;
`;

export const ContactContainer = styled.div`
  display: block;
  max-width: 800px;
  margin-bottom: 20px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 16px;
`;

export const SendButton = styled(CommonButton)`
  padding: 16px;
  transition: all 0.2s ease-in-out;
  font-size: 1.1rem;

  &:hover,
  &:focus-visible {
    box-shadow: 0px 0px 8px 4px ${({ theme }) => theme.colors.primary}80;
  }
`;

export const ContactCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
  margin-top: 24px;
  @media (max-width: 576px) {
    gap: 8px;
  }
`;
