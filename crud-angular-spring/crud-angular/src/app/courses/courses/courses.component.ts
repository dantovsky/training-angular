import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Course } from './../model/course';
import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  // coursesService: Cours  esService;

  constructor(
      private coursesService: CoursesService,
      public dialog: MatDialog
    ) {
    // this.courses = []; // Outra firma para inicializar a var
    // this.coursesService = new CoursesService();
    this.courses$ = this.coursesService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos.')
       return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {

  }

}
