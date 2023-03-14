import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'assets/courses.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      tap(courses => console.log(courses))
    );
  }
}


/**
 * [
      { _id: '1', name: 'Angular', category: 'Frontend'},
      { _id: '2', name: 'ReactJS', category: 'Frontend'},
    ];
 */
