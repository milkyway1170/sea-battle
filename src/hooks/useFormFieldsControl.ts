import {
  Control,
  FieldValues,
  Resolver,
  useForm,
  UseFormHandleSubmit,
  useFormState,
} from 'react-hook-form';

type IFormFieldsControlResponse<T extends FieldValues> =
  | Record<
      keyof T,
      {
        control: Control<T, unknown>;
        error: boolean;
        helperText: string;
      }
    >
  | Record<string, never>;

interface IFormControlRespose<T extends FieldValues> {
  handleSubmit: UseFormHandleSubmit<T>;
  controlFields: IFormFieldsControlResponse<T>;
}

export default function useFormFieldsControl<T extends FieldValues>(
  fields: Array<keyof T>,
  validationSchema?: { resolver: Resolver<T, unknown> },
): IFormControlRespose<T> {
  const { handleSubmit, control } = useForm<T>(validationSchema);
  const { errors } = useFormState({
    control,
  });

  const controlFields = fields.reduce((acum, current) => {
    return {
      ...acum,
      [current]: {
        control,
        error: Boolean(errors?.[current]?.message),
        helperText: errors?.[current] ? String(errors?.[current]?.message) : '',
      },
    };
  }, {});

  return { handleSubmit, controlFields };
}
