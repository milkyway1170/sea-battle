import { Colors } from '@/constants/colors';
import { styled, TextField } from '@mui/material';

export const FormTextField = styled(TextField)`
  max-width: 25rem;

  & .MuiInputBase-input {
    font-size: 1rem;
    color: inherit;
  }

  & .MuiFormLabel-root {
    background-color: ${Colors.White};
    color: ${Colors.Black};
    font-size: 1rem;
  }
  & .Mui-disabled {
    webkit-text-fill-color: ${Colors.Gray};
  }
  & .MuiFormHelperText-root {
    color: inherit;
    font-size: 0.9rem;
    margin: 0.3rem 0.5rem 0 0.5rem;
  }
`;
