import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { SharedModule } from '../shared/shared.module';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { ClientePesquisarComponent } from './cliente-pesquisar/cliente-pesquisar.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteService } from './cliente.service';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';

@NgModule({
  declarations: [
    ClientesListaComponent,
    ClienteDetalheComponent,
    ClientePesquisarComponent,
  ],
  exports: [ClientesListaComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    TextMaskModule,
  ],
  providers: [ClienteService],
})
export class ClientesModule {}
