import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.component.html',
  styleUrls: ['./cliente-detalhe.component.css'],
})
export class ClienteDetalheComponent implements OnInit {
  formulario: FormGroup;
  clienteId: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [{ value: null, disabled: true }],
      situacao: [{ value: null, disabled: true }],
    });

    this.route.params.subscribe((params: any) => {
      let id = params['id'];
      this.getCliente(id);
    });
  }

  getCliente(id: number) {
    this.clienteService.getClienteById(id).then((cliente: any) => {
      this.populaDadosForm(cliente[0]);
    });
  }

  populaDadosForm(cliente: Cliente) {
    this.formulario.patchValue({
      nome: cliente.nome,
      situacao: cliente.situacao,
    });
  }
}
