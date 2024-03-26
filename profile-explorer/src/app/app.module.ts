// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { AdminComponent } from './components/admin/admin.component';
import { MapService } from './services/map.service';
import { ProfileService } from './profile.service';

@NgModule({
  declarations: [AppComponent, ProfileListComponent, AdminComponent],
  imports: [BrowserModule, FormsModule],
  providers: [MapService, ProfileService],
  bootstrap: [AppComponent],
})
export class AppModule {}
