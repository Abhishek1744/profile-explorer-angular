import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-details-view',
  templateUrl: './profile-details-view.component.html',
  styleUrls: ['./profile-details-view.component.css']
})
export class ProfileDetailsViewComponent implements OnInit {
  profile: any;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.profileService.getProfileById(id).subscribe((profile) => {
      this.profile = profile;
    });
  }
}
