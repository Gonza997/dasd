import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  horarionor: String= "de 9 a 13:30hs y de 18 a 21:30hs";
  horariofind: String= " de 10 a 12:30hs";
  diaSemana: Array<any> = [
    {dia:"Lunes", horario: this.horarionor},
    {dia:"Martes", horario: this.horarionor},
    {dia:"Miercoles",horario: this.horarionor},
    {dia:"Jueves",horario: this.horarionor},
    {dia:"Viernes",horario: this.horarionor},
    {dia:"Sabado",horario: this.horarionor}, 
    {dia:"Domingo",horario: this.horariofind}
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
