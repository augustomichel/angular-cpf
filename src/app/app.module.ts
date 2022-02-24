import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesModule } from './clientes/clientes.module';
import { SharedModule } from './shared/shared.module';
import { SideBarComponent } from './shared/side-bar/side-bar.component';

@NgModule({
  declarations: [AppComponent, SideBarComponent],
  imports: [BrowserModule, AppRoutingModule, ClientesModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
