import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.scss']
})

// Componente filho que irá emitir um evento de click para um componente pai.
export class ChangeNumberComponent implements OnInit {

  @Output() changeNumber: EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(): void {
    let range: number = 10 // range number to use in Math.random() on parent component 
    this.changeNumber.emit(range)
  }

}
