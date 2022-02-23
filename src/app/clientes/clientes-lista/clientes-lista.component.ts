import { Component, OnInit } from '@angular/core';
import { CLIENTES } from '../cliente.mock';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css'],
})
export class ClientesListaComponent implements OnInit {
  constructor() {}
  clientes: Cliente[] = CLIENTES;
  ngOnInit(): void {}
}
