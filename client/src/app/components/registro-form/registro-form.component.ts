import { Component, OnInit, HostBinding } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import {Asistencia} from 'src/app/models/Asistencia';

import { RegistroService } from 'src/app/services/registro.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro-form',
  templateUrl: './registro-form.component.html',
  styleUrls: ['./registro-form.component.css']
})
export class RegistroFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  usuario: Usuario = {
    id: 0,
    nombre: '',
    apellidoP: '',
    apellidoM: '',
    direccion: '',
    telefono: '',
    correo: '',
    plantel: '',
    perfil: ''
  };

 
  edit: boolean = false;

  constructor(private registroService: RegistroService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.registroService.getUsuario(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.usuario = res;
            this.edit = true;
          },  
          err => console.log(err)
        )
    }
  }


  save() {
    
    delete this.usuario.id;
    this.registroService.save(this.usuario)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/usuarios']);
        },
        err => console.error(err)
      )
  }

  update() {
   
    this.registroService.update(this.usuario.id, this.usuario)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/usuarios']);
        },
        err => console.error(err)
      )
  }

}
