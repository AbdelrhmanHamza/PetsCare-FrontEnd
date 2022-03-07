import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicePakage } from 'app/models/service-pakage.model';
import { BusinessPakagesService } from 'app/services/business-pakages.service';
import { TokenStorageService } from 'app/services/token-storage.service';

@Component({
  selector: 'app-business-packages',
  templateUrl: './business-packages.component.html',
  styleUrls: ['./business-packages.component.scss'],
})
export class BusinessPackagesComponent implements OnInit {
  @Input()
  id: string = '';
  constructor(
    private tokenStorage: TokenStorageService,
    private businessPakageService: BusinessPakagesService,
    private router: Router
  ) {}
  packages: ServicePakage[] = [];

  ngOnInit(): void {
    if (!this.tokenStorage.getToken()) {
      this.router.navigate(['/']);
    } else {
      this.businessPakageService.getPakages(this.id).subscribe(
        (data) => {
          data.forEach(
            (element: {
              id: number;
              package_name: string;
              package_description: string;
              package_price: string;
            }) => {
              this.packages.push({
                id: element.id,
                package_name: element.package_name,
                package_description: element.package_description,
                package_price: element.package_price,
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
