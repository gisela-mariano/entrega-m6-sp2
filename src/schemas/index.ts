import * as yup from 'yup';

export const schemaForm = yup.object().shape({
  amount: yup
    .number()
    .min(1000, 'O valor deve ser no mínimo 1000')
    .typeError('Você deve preencher esse campo com um número')
    .required('Você deve preencher esse campo.'),
  installments: yup
    .number()
    .typeError('Você deve preencher esse campo com um número')
    .positive('O valor das parcelas deve ser maior que 0')
    .required('Você deve preencher esse campo.')
    .max(12, 'O número máximo de parcelas são 12.'),
  mdr: yup
    .number()
    .max(100, 'A porcentagem máxima deve ser 100')
    .positive('A porcentagem deve ser maior ou igual a 0')
    .typeError('Você deve preencher esse campo com um número')
    .required('Você deve preencher esse campo.'),
  days: yup
    .string()
    .matches(/^$|(?:0*[1-9]\d*(?:,|$))+$/, "Deve conter apenas números separados por vírgulas. Ex: 10,20")
});
