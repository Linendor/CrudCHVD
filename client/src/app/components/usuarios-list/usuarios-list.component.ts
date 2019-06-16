import { Component, OnInit, HostBinding } from '@angular/core';

import { RegistroService } from '../../services/registro.service';
import { Usuario } from 'src/app/models/Usuario';
import {Asistencia} from 'src/app/models/Asistencia';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css'],
})
export class UsuariosListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  usu: any = [];
  
  constructor(private registroService: RegistroService) { }


  ngOnInit() {
    this.getUsuarios();
    
  }

  getUsuarios() {
    this.registroService.getUsuarios()
      .subscribe(
        res => {
          this.usu = res;
        },
        err => console.error(err)
      );
  }

  

  deleteUsuario(id: string) {
    this.registroService.delete(id)
      .subscribe(
        res => {
          console.log(res);
          this.getUsuarios();
        },
        err => console.error(err)
      )
  }

}
