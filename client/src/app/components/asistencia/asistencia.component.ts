import { Component, OnInit,HostBinding} from '@angular/core';
import { RegistroService } from 'src/app/services/registro.service';
import {Asistencia} from 'src/app/models/Asistencia';
@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  constructor(private registroService: RegistroService) { }

 asis: any = [];


  ngOnInit() {
    this.getAs();
  }
  getAs() {
    this.registroService.getAsis().subscribe(
        res =>{ this.asis = res;},
        
        err => console.error(err)
      );
  }
}
