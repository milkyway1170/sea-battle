import { Colors } from '@/constants/colors';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const Container = styled.header`
  width: 100%;
  height: 4rem;
  background: ${Colors.Denim};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled(Typography)`
  color: ${Colors.White};
`;
