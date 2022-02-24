import { FormControl } from '@angular/forms';

export class FormValidations {
  static cpfValidator(control: FormControl) {
    const cpf = control.value;
    if (cpf && cpf !== '') {
      const validacpf = /^[0-9]{8}$/;
      return validacpf.test(cpf) ? null : { cpfInvalido: true };
    }
    return null;
  }

  static getErrorMsg(
    fieldName: string,
    validatorName: string,
    validatorValue?: any
  ) {
    const config = {
      required: `${fieldName} é obrigatório.`,
      minlength: `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
      maxlength: `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
      cpfInvalido: 'CPF inválido.',
      cpfnaoencontrado: 'CPF não cadastrado',
    };

    return (config as any)[validatorName];
  }
}
