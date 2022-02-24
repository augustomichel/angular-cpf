import { Injectable } from '@angular/core';
import { CLIENTES } from '../mock/cliente.mock';
import { Cliente } from '../model/cliente.model';

@Injectable()
export class ClienteService {
  getClientes(): Promise<Cliente[]> {
    return Promise.resolve(CLIENTES);
  }

  async getCliente(cpf: Cliente): Promise<any> {
    let clinetes = CLIENTES;
    let cliente = clinetes.filter((cliente) => cliente.cpf === cpf.cpf);

    return cliente;
  }

  async getClienteById(id: number): Promise<any> {
    let clinetes = CLIENTES;
    let cliente = clinetes.filter((cliente) => cliente.id == Number(id));

    return cliente;
  }
}
