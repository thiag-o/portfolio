import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  display: grid;
  height: 120px;
  width: 120px;

  user-select: none;
  cursor: pointer;

  padding: 5px;
  border-style: solid;
  border-color: transparent;
  border-width: 2px;

  /* transition-duration: 1ms; */

  gap: 8px;
  align-items: center;
  justify-content: center;

  border-radius: 8px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  background-color: ${({ theme }) => theme.colors.grays['c9']};

  @media (min-width: 1566px) {
    width: 140px;
    height: 140px;
  }
  @media (max-width: 576px) {
    height: 100px;
    width: 100px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-self: end;
  img {
    display: block;
    max-width: 100%;
    width: auto;
    @media (min-width: 1566px) {
      height: 64px;
    }
  }
`;

export const Description = styled.p`
  font-size: 16px;
  align-self: start;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  text-align: center;

  @media (min-width: 1566px) {
    font-size: 18px;
  }
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;
