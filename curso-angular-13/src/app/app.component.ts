import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curso-angular-13';
  userName = 'Dantiii'
  userData = {
    email: 'dantiii@gmail.com',
    role: 'Admin'
  }
}
