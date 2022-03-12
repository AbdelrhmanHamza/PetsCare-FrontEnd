import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'app/services/token-storage.service';


@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit {
  username:string='';
  constructor(private tokenStorage: TokenStorageService) {}

  ngOnInit(): void {
    if(this.tokenStorage.getToken()){
      this.username=this.tokenStorage.getUser().user_name;
    }
  }
  logout(): void {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
