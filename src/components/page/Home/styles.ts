// import { Colors } from '@/constants/colors';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-direction: column;
  position: relative;
  z-index: 1;
  overflow: hidden;
  height: 100vh;
  :before {
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
    content: url('/images/shot1.jpg');
    opacity: 0.4;
  }
`;
