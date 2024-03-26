// src/app/services/profile.service.ts
import { Injectable } from '@angular/core';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profiles: Profile[] = [
    {
      name: 'John Doe',
      photoUrl: 'https://via.placeholder.com/150',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Jane Smith',
      photoUrl: 'https://via.placeholder.com/150',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  getProfiles(): Profile[] {
    return this.profiles;
  }

  addProfile(profile: Profile): void {
    this.profiles.push(profile);
  }

  updateProfile(index: number, profile: Profile): void {
    this.profiles[index] = profile;
  }

  deleteProfile(index: number): void {
    this.profiles.splice(index, 1);
  }
}
