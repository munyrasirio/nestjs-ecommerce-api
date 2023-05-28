import { ValidationType } from './enum';

export const validationMessage = (type, field, number = 0) => {
  const types = {
    [ValidationType.NOT_EMPTY]: `O campo ${field} não pode ser vazio.`,
    [ValidationType.MAX_LENGTH]: `O campo ${field} não pode ser maior que ${number} caracteres.'`,
    [ValidationType.INVALID]: `${field} não é um dado válido.`,
    [ValidationType.IS_NUMBER]: `${field} precisa ser um número.`,
    [ValidationType.IS_ARRAY]: `É preciso informar uma lista de ${field}.`,
    [ValidationType.ARRAY_LENGTH]: `É preciso fornecer ao menos ${number} ${field}.`,
    [ValidationType.IS_POSITIVE]: `O campo ${field} precisa ser um número positivo.`,
    [ValidationType.CURRENCY]: `O campo ${field} precisa respeitar o padrão de moeda.`,
  };

  return types[type];
};
