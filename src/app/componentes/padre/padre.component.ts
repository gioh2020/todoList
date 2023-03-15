import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  dataPadre= "mensaje escrito en el componenete Padre"


  arregloTareas: string[] = [];

  agregarAlarregloTareas(valor:string) {
    this.arregloTareas.push(valor)
  }

  eliminarTarea(tarea:string) {
    this.arregloTareas = this.arregloTareas?.filter(elementos => elementos !== tarea)
  }




}
