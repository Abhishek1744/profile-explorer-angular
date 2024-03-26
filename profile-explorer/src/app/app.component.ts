// app.component.ts

import { Component } from '@angular/core';
import { ProfileListComponent } from './components/profile-list/profile-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'profile-explorer';
}
