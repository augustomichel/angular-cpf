import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-pesquisar',
  templateUrl: './cliente-pesquisar.component.html',
  styleUrls: ['./cliente-pesquisar.component.css'],
})
export class ClientePesquisarComponent implements OnInit {
  formulario: FormGroup;
  cpfnaoencontrado: boolean;
  cliente: Cliente;
  disable: boolean = false;

  public mask = [
    /\d/,
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
  ];

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      cpf: [null, [Validators.required]],
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url == '/cliente') {
          this.disable = false;
          this.formulario.controls['cpf'].enable();
        }
      }
    });
  }

  onSubmit() {
    let valueSubmit = Object.assign({}, this.formulario.value);
    this.validarCPF(valueSubmit);
  }

  validarCPF(cpf: Cliente) {
    this.clienteService.getCliente(cpf).then((cliente: [any]) => {
      if (cliente.length < 1) {
        this.cpfnaoencontrado = true;
      } else {
        this.cpfnaoencontrado = false;
        this.router.navigate(['/cliente/detalhe', cliente[0].id]);
        this.formulario.controls['cpf'].disable();
        this.disable = true;
      }
    });
  }
}
