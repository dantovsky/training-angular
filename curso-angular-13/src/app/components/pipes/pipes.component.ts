import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  someText = 'TexTO coM cASE bem MaLuCo!!!'
  today = new Date()
  
  constructor() { }

  ngOnInit(): void {
  }

}
