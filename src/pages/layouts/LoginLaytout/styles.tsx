import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 80px;
  align-items: center;
  justify-content: center;
  background-color: #e0e5f2;
  position: relative;
`;

export const ImgCover = styled.img`
  object-fit: fill;
`;

export const Logo = styled.img`
  max-width: 6rem;
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
