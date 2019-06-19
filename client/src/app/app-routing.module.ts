import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosListComponent } from './components/usuarios-list/usuarios-list.component';
import { RegistroFormComponent } from './components/registro-form/registro-form.component';
import { AsistenciaComponent} from './components/asistencia/asistencia.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/registro',
    pathMatch: 'full'
  },
  {
    path: 'usuariol',
    component: UsuariosListComponent
  },
  {
    path: 'usuarios/agregar',
    component: RegistroFormComponent
  },
  {
    path: 'registro/editar/:id',
    component: RegistroFormComponent
  },
  {
    path: 'asis',
    component: AsistenciaComponent
  }
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
