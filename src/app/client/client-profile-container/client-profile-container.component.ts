import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/models/user.model';
import { TokenStorageService } from 'app/services/token-storage.service';

@Component({
  selector: 'app-client-profile-container',
  templateUrl: './client-profile-container.component.html',
  styleUrls: ['./client-profile-container.component.scss'],
})
export class ClientProfileContainerComponent implements OnInit {
  user!: User;
  constructor(
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.user = this.tokenStorage.getUser();
    } else {
      this.router.navigate(['/']);
    }
  }
}
