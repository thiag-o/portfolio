import styled from 'styled-components';

export const Container = styled.div`
  display: grid;

  justify-items: center;
  border-radius: 8px;
  overflow: hidden;
  max-width: fit-content;
`;

export const Header = styled.div`
  text-align: center;
  background: ${({ theme }) => theme.colors.grays['c9']};
  width: 100%;
  padding: 12px 0;
`;

export const ImageContainer = styled.div`
  display: block;

  img {
    display: block;
    max-width: 100%;
    /* width: clamp(200px, 20vw, 300px); */
    width: 100%;
    height: 100%;
    /* height: clamp(186px, 20vw, 280px); */
    object-fit: cover;
    object-position: center;
  }
`;

export const Title = styled.h4`
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;
