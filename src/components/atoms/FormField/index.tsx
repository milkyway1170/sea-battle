import React, { ReactElement } from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import { Controller, FieldValues } from 'react-hook-form';
import { FormTextField } from './styles';
import { IFormFieldProps } from './types';

export default function FormField<T extends FieldValues>({
  name,
  error,
  helperText,
  label,
  placeholder,
  control,
  onIconClick,
  icon,
  type = 'text',
  defaultValue,
  required = true,
  multiline = false,
  maxRows,
  minRows,
  rows,
  step,
  sx,
}: IFormFieldProps<T>): ReactElement {
  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field }) => (
        <FormTextField
          error={error}
          helperText={helperText}
          id={name}
          InputProps={{
            endAdornment: icon ? (
              <InputAdornment position="end">
                <IconButton onClick={onIconClick}>{icon}</IconButton>
              </InputAdornment>
            ) : null,
            inputProps: { step },
          }}
          label={label}
          maxRows={maxRows}
          minRows={minRows}
          multiline={multiline}
          placeholder={placeholder}
          required={required}
          rows={rows}
          sx={sx}
          type={type}
          value={String(field.value || '')}
          fullWidth
          onChange={(e) => field.onChange(e)}
        />
      )}
    />
  );
}
