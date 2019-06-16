import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosListComponent } from './components/usuarios-list/usuarios-list.component';
import { RegistroFormComponent } from './components/registro-form/registro-form.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/registro',
    pathMatch: 'full'
  },
  {
    path: 'usuarios',
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
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
