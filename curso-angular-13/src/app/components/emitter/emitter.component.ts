import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.scss']
})
export class EmitterComponent implements OnInit {

  myNumber: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  // Neste caso estou a receber o evento do click e um parametro junto.
  // sPoderia receber somente o evento do click.
  onChangeNumbver(range: number): void {
    this.myNumber = Math.floor(Math.random() * range)
  }

}
