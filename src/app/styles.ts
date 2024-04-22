import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.main`
  background-color: ${({ theme }) => theme.colors.grays['c10']};
`;

export const SectionBgShare = styled.div`
  position: relative;
  background: url('/about_tech.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  width: 100%;
`;
