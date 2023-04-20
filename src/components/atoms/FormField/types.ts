import { SxProps } from '@mui/material';
import { Control, FieldValues, Path, PathValue } from 'react-hook-form';

export interface IFormFieldProps<T extends FieldValues> {
  name: Path<T>;
  error: boolean;
  helperText: string;
  label: string;
  placeholder?: string;
  control: Control<T, unknown>;
  onIconClick?: () => void;
  icon?: JSX.Element;
  type?: string;
  defaultValue?: PathValue<T, Path<T>>;
  required?: boolean;
  multiline?: boolean;
  maxRows?: number;
  minRows?: number;
  rows?: number;
  sx?: SxProps;
  step?: number;
}
