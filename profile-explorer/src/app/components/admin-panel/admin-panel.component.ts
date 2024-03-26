// src/app/components/admin-panel/admin-panel.component.ts
import { Component, OnInit } from '@angular/core';
import { Profile } from '../../models/profile.model';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  profiles: Profile[];
  selectedProfile: Profile;
  mode: 'add' | 'edit' = 'add';

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profiles = this.profileService.getProfiles();
  }

  addProfile(profile: Profile): void {
    this.profileService.addProfile(profile);
    this.profiles = this.profileService.getProfiles();
    this.selectedProfile = null;
  }

  editProfile(profile: Profile): void {
    this.profileService.editProfile(profile);
    this.profiles = this.profileService.getProfiles();
    this.selectedProfile = null;
    this.mode = 'add';
  }

  deleteProfile(id: number): void {
    this.profileService.deleteProfile(id);
    this.profiles = this.profileService.getProfiles();
    this.selectedProfile = null;
  }

  selectProfile(profile: Profile): void {
    this.selectedProfile = { ...profile };
    this.mode = 'edit';
  }

  clearSelection(): void {
    this.selectedProfile = null;
    this.mode = 'add';
  }
}
