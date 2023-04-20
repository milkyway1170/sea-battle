import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
  firstPlayer: Yup.string().required('Имя обязательно'),
  secondPlayer: Yup.string()
    .required('Имя обязательно')
    .notOneOf([Yup.ref('firstPlayer')], 'Имена должны быть разными'),
});
export const formOptions = { resolver: yupResolver(formSchema) };
