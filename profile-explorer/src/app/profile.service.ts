import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Profile } from './profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profiles: Profile[] = [
    { id: 1, name: 'John Doe', age: 25, address: '123 Main St', email: 'john.doe@example.com', phone: '555-1234' },
    { id: 2, name: 'Jane Smith', age: 30, address: '456 Elm St', email: 'jane.smith@example.com', phone: '555-5678' },
    { id: 3, name: 'Alice Johnson', age: 35, address: '789 Oak St', email: 'alice.johnson@example.com', phone: '555-9012' }
  ];

  constructor() { }

  getProfiles(): Observable<Profile[]> {
    return of(this.profiles);
  }

  getProfile(id: number): Observable<Profile | undefined> {
    return of(this.profiles.find(profile => profile.id === id));
  }
}
