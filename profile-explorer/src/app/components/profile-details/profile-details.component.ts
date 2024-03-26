import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  profile: Profile | undefined;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.profileService.getProfile(id)
      .subscribe(profile => this.profile = profile);
  }
}
