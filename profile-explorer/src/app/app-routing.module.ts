import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { MapComponent } from './components/map/map.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { ProfileDetailsViewComponent } from './components/profile-details-view/profile-details-view.component';

const routes: Routes = [
  { path: 'admin-panel', component: AdminPanelComponent },
  { path: 'map', component: MapComponent },
  { path: 'profile-details/:id', component: ProfileDetailsComponent },
  { path: 'profile-list', component: ProfileListComponent },
  { path: 'profile-details-view/:id', component: ProfileDetailsViewComponent },
  { path: '', redirectTo: '/profile-list', pathMatch: 'full' },
  { path: '**', redirectTo: '/profile-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
