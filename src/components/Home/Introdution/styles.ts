import { motion } from 'framer-motion';
import Image from 'next/image';
import { CaretDoubleDown } from 'phosphor-react';
import styled, { css } from 'styled-components';

export const Container = styled.section`
  position: relative;
  min-height: 100vh;
`;

export const ImgBackground = styled(motion.div)`
  position: absolute;

  offset: 0;

  height: 100vh;
  width: 100%;

  background: url('/introdution.jpg');
  opacity: 0.3;
  background-size: cover;
  background-position: center;
`;

export const Content = styled.div`
  padding: 15px;
  display: grid;
  position: relative;

  align-items: center;

  position: relative;
  z-index: 1;

  height: 100vh;
`;

export const Person = styled.div`
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ImagePerson = styled(Image)`
  display: block;

  max-width: 100%;
  height: auto;

  border-radius: 160px;

  border: 2px solid ${({ theme }) => theme.colors.primary};

  ${({ theme }) => css`
    filter: drop-shadow(0 0 8px ${theme.colors.primary}80);
  `}

  @media (max-width: 576px) {
    width: 200px;
  }
`;
export const TitlePerson = styled.h1`
  margin-top: 24px;

  color: ${({ theme }) => theme.colors.grays['c2']};
  font-size: clamp(2.5rem, 4vw, 3rem);
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  text-align: center;
  line-height: 1;

  strong {
    color: ${({ theme }) => theme.colors.grays['w']};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  @media (max-width: 576px) {
    margin-top: 20px;

    font-size: 1.5rem;
  }
`;
export const DescriptionPerson = styled.h2`
  margin-top: 14px;

  color: ${({ theme }) => theme.colors.grays['c2']};
  font-size: clamp(1.5rem, 2vw, 2rem);
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 1;

  @media (max-width: 576px) {
    margin-top: 10px;
    font-size: 1.2rem;
  }
`;
export const AdditionalInfo = styled.div`
  align-self: end;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  @media (max-width: 576px) {
    margin-bottom: 60px;
  }
`;

export const AddicionalTitle = styled.h3`
  color: ${({ theme }) => theme.colors.grays['c2']};

  font-size: clamp(1.5rem, 2vw, 2rem);
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  text-align: center;
  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;
export const AdditionalSubtitle = styled.h4`
  margin-top: 5px;

  color: ${({ theme }) => theme.colors.grays['c2']};

  font-size: clamp(0.875rem, 1vw, 1rem);
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 1.2rem;
  text-align: center;
  @media (max-width: 576px) {
    margin-top: 12px;
    font-size: 0.875rem;
  }
`;

export const Icon = styled(CaretDoubleDown)`
  font-size: 24px;
  position: absolute;
  color: ${({ theme }) => theme.colors.primary};
  bottom: 24px;
`;
