import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.scss']
})
export class ParentDataComponent implements OnInit {

  @Input() name: string = "" // Precisamos inicializar o dado
  @Input() userData!: {email: string, role: string} // ! signigica que garantimos que esse dado vai ser iniciado

  constructor() { }

  ngOnInit(): void {
  }

}
