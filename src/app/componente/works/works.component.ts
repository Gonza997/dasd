import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  
  works: Array<String> = [
    "Papeleria",
    "Fotos",
    "Putacopias",
    "Putas",
    "Putas",
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
