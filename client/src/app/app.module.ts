import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UsuariosListComponent } from './components/usuarios-list/usuarios-list.component';

// Services
import { RegistroService } from './services/registro.service';
import { RegistroFormComponent } from './components/registro-form/registro-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UsuariosListComponent,
    RegistroFormComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RegistroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
