import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 4 },
    { name: 'Tom', type: 'Cat', age: 10 },
    { name: 'Frida', type: 'Dog', age: 5 },
    { name: 'Bob', type: 'Dog', age: 1 },
  ]

  animal: Animal = {
    name: 'Teste',
    type: 'Qualque chose',
    age: 10,
  }

  animalDetails = ''

  // Utilizando o esquema com HttpClientModule (aula #18)
  animalsAPI: Animal[] = []

  constructor(private listService: ListService) { 
    this.getAnimalsAPI()
  }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`
  }

  // Aula de Service
  removeAnimal(animal: Animal): void {
    console.log('Removendo animal...', animal)
    this.animals = this.listService.remove(this.animals, animal)
  }

  getAnimalsAPI(): void {
    // Como o getAll() retorna um Observable<Animal[]>, então temos que ter um subscribe.
    this.listService.getAll().subscribe(animals => this.animalsAPI = animals)
  }

}
