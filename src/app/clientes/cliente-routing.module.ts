import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';

const clienteRoutes: Routes = [
  {
    path: 'cliente',
    component: ClientesListaComponent,
  },
  {
    path: 'cliente/detalhe',
    component: ClienteDetalheComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(clienteRoutes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
