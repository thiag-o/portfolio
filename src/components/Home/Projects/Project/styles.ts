import styled, { css } from 'styled-components';

import CommonButton from '@/components/Shared/CommonButton';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

export const Header = styled.div`
  padding: 20px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  border-bottom: solid 2px ${({ theme }) => theme.colors.primary};

  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.25);
`;
export const Title = styled.h4`
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex: 1;

  ${({ theme }) => css`
    background: linear-gradient(
        ${theme.colors.background}99,
        ${theme.colors.background}99
      ),
      url('/projects/bg/bg-card.jpg');
  `}
  background-size: cover;
  background-attachment: fixed;

  @media (max-width: 768px) {
    /* display: grid;
    grid-template-columns: 1fr auto;
    gap: 8px; */
  }
`;
export const ImageContainer = styled.div`
  margin-bottom: 20px;
  img {
    display: block;
    max-width: 100%;
    width: 100%;
    object-fit: cover;

    border-radius: 8px;
  }
  @media (max-width: 768px) {
    /* margin-bottom: 0; */
    /* grid-area: 1/2; */
  }
`;

export const DescriptionGroup = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const DescriptionProject = styled.p`
  flex: 1;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 12px;
`;

export const ButtonGroup = styled.div`
  display: flex;

  gap: 12px;
`;
export const ButtonPrimary = styled(CommonButton)`
  width: 100%;
  padding: 12px;

  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: 1;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;
export const ButtonSecundary = styled(CommonButton)`
  flex: 1;
  width: auto;
  min-width: 100px;
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.backgroundCard};

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundCardHover};
  }
  img {
    filter: brightness(${({ theme }) => theme.imgBrightness});
  }
`;
