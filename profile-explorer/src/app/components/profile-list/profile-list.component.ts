// src/app/components/profile-list/profile-list.component.ts
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Profile } from '../../models/profile.model';
import { ProfileService } from '../../profile.service';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css'],
})
export class ProfileListComponent implements OnInit {
  profiles: Profile[];
  filteredProfiles: Profile[];
  selectedProfile: Profile;
  loading: boolean = true;

  @ViewChild('map', { static: true }) mapElement: ElementRef;

  constructor(private profileService: ProfileService, private mapService: MapService) {}

  ngOnInit(): void {
    this.profiles = this.profileService.getProfiles();
    this.filteredProfiles = this.profiles;
    this.initMap();
  }

  private initMap(): void {
    const center = { lat: 37.7749, lng: -122.4194 }; // San Francisco coordinates
    this.mapService.initMap(this.mapElement.nativeElement, center);

    let completed = 0;
    this.profiles.forEach((profile) => {
      // Assume each profile has a `address` property with string address
      this.geocodeAddress(profile.address).then(
        (location) => {
          this.mapService.addMarker(location);
          completed++;
          if (completed === this.profiles.length) {
            this.loading = false;
          }
        },
        (error) => {
          console.error('Error geocoding address:', error);
          // Handle error gracefully, e.g., display a message to the user
        }
      );
    });
  }

  private geocodeAddress(address: string): Promise<google.maps.LatLngLiteral> {
    return new Promise((resolve, reject) => {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK && results[0].geometry) {
          const location = results[0].geometry.location;
          resolve({ lat: location.lat(), lng: location.lng() });
        } else {
          reject('Geocode was not successful for the following reason: ' + status);
        }
      });
    });
  }

  filterProfiles(criteria: string): void {
    if (!criteria) {
      this.filteredProfiles = this.profiles;
    } else {
      this.filteredProfiles = this.profiles.filter((profile) => {
        return (
          profile.name.toLowerCase().includes(criteria.toLowerCase()) ||
          profile.description.toLowerCase().includes(criteria.toLowerCase())
        );
      });
    }
  }

  showProfileDetails(profile: Profile): void {
    this.selectedProfile = profile;
  }

  closeProfileDetails(): void {
    this.selectedProfile = null;
  }
}
