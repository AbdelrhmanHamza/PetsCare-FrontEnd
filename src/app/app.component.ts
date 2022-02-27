import { Component, OnInit } from '@angular/core';
import { UserType } from './services/enums/user-type';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pet-care';
  isBusiness = false;
  constructor(private tokenStorage: TokenStorageService) {}
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      let user = this.tokenStorage.getUser();
      if(user.type === UserType.BUSINESS){
        this.isBusiness = true;

      }
    }
  }
}
