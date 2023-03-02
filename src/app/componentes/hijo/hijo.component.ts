import { Component, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Input()
  data:string = "mensaje escrito en el componenete HIJO"

  @Output()
  eventoEnviarData = new EventEmitter<string>()

  enviarData(valor:string) {
    this.eventoEnviarData.emit(valor)
  }

}
