import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessSubsciption } from 'app/models/businessSubscription.model';
import { BusinessProfileService } from 'app/services/business-profile.service';
import { TokenStorageService } from 'app/services/token-storage.service';

@Component({
  selector: 'app-business-subscription-tab',
  templateUrl: './business-subscription-tab.component.html',
  styleUrls: ['./business-subscription-tab.component.scss'],
})
export class BusinessSubscriptionTabComponent implements OnInit {
  packages: BusinessSubsciption[] = [];

  constructor(
    private tokenStorage: TokenStorageService,
    private businessProfileService: BusinessProfileService,
    private router: Router
  ) {}
  ngOnInit(): void {
    if (!this.tokenStorage.getToken()) {
      this.router.navigate(['/']);
    } else {
      this.businessProfileService
        .getSubscribtions(this.tokenStorage.getUser().id)
        .subscribe(
          (data) => {
            console.log(data[0].service_package);
            data[0].service_package.forEach(
              (element: {
                id: number;
                package_name: string;
                package_price: string;
                created_at: string;
              }) => {
                this.packages.push({
                  id: element.id,
                  packageName: element.package_name,
                  createdAt: element.created_at,
                  price: element.package_price,
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
