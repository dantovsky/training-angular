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

  remove(animals: Animal[], animal: Animal) {
    console.log('Ativando service')
    return animals.filter(a => animal.name !== a.name)
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiURL) // <Animal[]> é um generic necessário, que é um padrão do Angular
  }

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiURL}/${id}`)
  }
}
