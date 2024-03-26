// src/app/components/admin/admin.component.ts
import { Component, OnInit } from '@angular/core';
import { Profile } from '../../models/profile.model';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  profiles: Profile[];

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profiles = this.profileService.getProfiles();
  }

  addProfile(profile: Profile): void {
    this.profileService.addProfile(profile);
  }

  updateProfile(index: number, profile: Profile): void {
    this.profileService.updateProfile(index, profile);
  }

  deleteProfile(index: number): void {
    this.profileService.deleteProfile(index);
  }
}
