import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessRequest } from 'app/models/businessRequest.mode';
import { BusinessRequestsService } from 'app/services/business-requests.service';
import { TokenStorageService } from 'app/services/token-storage.service';

@Component({
  selector: 'app-business-requests-tab',
  templateUrl: './business-requests-tab.component.html',
  styleUrls: ['./business-requests-tab.component.scss'],
})
export class BusinessRequestsTabComponent implements OnInit {

  constructor(
    private tokenStorage: TokenStorageService,
    private businessRequestsService: BusinessRequestsService,
    private router: Router
  ) {}
  requests: BusinessRequest[] = [];
  ngOnInit(): void {
    if (!this.tokenStorage.getToken()) {
      this.router.navigate(['/']);
    } else {
      this.businessRequestsService.getRequests().subscribe(
        (data) => {
          console.log(data);
          data.forEach(
            (element: {
              first_name: string;
              last_name: string;
              description: string;
              is_read: number;
            }) => {
              this.requests.push({
                user: element.first_name + ' ' + element.last_name,
                description: element.description,
                status: element.is_read.toString(),
              });
            }
          );
        },
        (err) => {
          console.log(err.error);
        }
      );
    }
  }
}
