import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
  
  // Propriedades
  name: string = 'Dante'
  idade: number = 38
  job = 'Programmer'
  hobbies = ['Correr', 'Programar', 'Andar de skate']
  car: Car = {name: 'Megane', year: 2016, assign: '72 RI 80'}

  constructor() { }

  ngOnInit(): void {
  }

}

interface Car {
  name: string,
  year: number,
  assign: string,
  lastRevision?: string
}
