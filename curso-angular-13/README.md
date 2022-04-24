# Curso Angular 13

Git do curso:  
https://github.com/matheusbattisti/curso_angular_yt/

Playlist do YouTube:  
https://www.youtube.com/watch?v=vJt_K1bFUeA&list=PLnDvRpP8Bnex2GQEN0768_AxZg_RaIGmw

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## Criar um fake API Server com json-server

01. Instalar:
```
npm i son-server
```
02. Criar um file `db.json` e criar uma estrutura em JSON:
```json
{
  "animals": [
    { "id": 1, "name": "Turca", "type": "Dog", "age": 4 },
    { "id": 2, "name": "Tom", "type": "Cat", "age": 10 },
    { "id": 3, "name": "Frida", "type": "Dog", "age": 11 },
    { "id": 4, "name": "Bob", "type": "Horse", "age": 2 },
    { "id": 5, "name": "Paco", "type": "Bird", "age": 1 }
  ]
}
```
03. Rodar o server:
```
json-server --watch db.json
```
## Consumir dados de uma API REST

No file services utilizar:
```ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Criar uma car privada com a URL
private apiURL = 'http://localhost:3000/animals'
```

No app.module.ts:
```ts
import { HttpClientModule } from '@angular/common/http'

imports: [ HttpClientModule ],
```

Files completos, onde mostra como consumir dados de uma API

File `list.services.ts`
```ts
import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiURL = 'http://localhost:3000/animals'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiURL) // <Animal[]> é um generic necessário, que é um padrão do Angular
  }
}
```

File `list-render.component.ts`
```ts
import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {

  // Utilizando o esquema com HttpClientModule (aula #18)
  animalsAPI: Animal[] = []

  constructor(private listService: ListService) { 
    this.getAnimalsAPI()
  }

  ngOnInit(): void {
  }

  getAnimalsAPI(): void {
    // Como o getAll() retorna um Observable<Animal[]>, então temos que ter um subscribe.
    this.listService.getAll().subscribe(animals => this.animalsAPI = animals)
  }

}
```

File `list-render.component.html`
```html
<ul>
    <li *ngFor="let animal of animalsAPI">
        Nome: {{animal.name}} | Tipo: {{animal.type}}
    </li>
</ul>
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
