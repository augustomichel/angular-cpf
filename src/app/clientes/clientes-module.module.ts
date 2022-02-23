import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';

@NgModule({
  declarations: [ClientesListaComponent, ClienteDetalheComponent],
  exports: [ClientesListaComponent],
  imports: [CommonModule, ClienteRoutingModule],
})
export class ClientesModule {}
