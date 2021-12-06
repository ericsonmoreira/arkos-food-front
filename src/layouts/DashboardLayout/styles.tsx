import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`;

export const Logo = styled.img`
  height: 3rem;
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`;
