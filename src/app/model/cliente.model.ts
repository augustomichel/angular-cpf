export class Cliente {
  constructor(
    public id: number,
    public cpf: string,
    public nome: string,
    public email: string,
    public telefone: string,
    public situacao: string
  ) {}
}
