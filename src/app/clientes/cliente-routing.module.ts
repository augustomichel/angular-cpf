import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { ClientePesquisarComponent } from './cliente-pesquisar/cliente-pesquisar.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';

const clienteRoutes: Routes = [
  {
    path: 'cliente',
    component: ClientePesquisarComponent,
    children: [
      {
        path: 'detalhe/:id',
        component: ClienteDetalheComponent,
      },
    ],
  },
  {
    path: 'cliente/listar',
    component: ClientesListaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(clienteRoutes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
