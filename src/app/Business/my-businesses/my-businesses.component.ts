import { BusinessProfileService } from './../../services/business-profile.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bussiness } from 'app/models/service.model';
import { TokenStorageService } from 'app/services/token-storage.service';

@Component({
  selector: 'app-my-businesses',
  templateUrl: './my-businesses.component.html',
  styleUrls: ['./my-businesses.component.scss'],
})
export class MyBusinessesComponent implements OnInit {
  serviceCardInfos: Bussiness[] = [];
  constructor(
    private tokenStorage: TokenStorageService,
    private businessProfileService: BusinessProfileService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.tokenStorage.getToken()) {
      this.router.navigate(['/']);
    } else {
      this.businessProfileService.getBusinesses().subscribe(
        (data) => {
          console.log(data);
          data.forEach(
            (element: {
              id: number;
              business_name: any;
              img: string;
              image_path: string;
              business_type: any;
              open_at: any;
              close_at: any;
              address: any;
              package_name: any;
              package_description: any;
              package_price: any;
            }) => {
              this.serviceCardInfos.push({
                id: element.id,
                img: element.img,
                name: element.business_name,
                type: element.business_type,
                opensAt: element.open_at,
                closesAt: element.close_at,
                address: element.address,
                package_name: element.package_name,
                package_description: element.package_description,
                package_price: element.package_price,
                image_path:
                  element.image_path != null
                    ? 'http://petscare.test/' + element.image_path
                    : './../../../assets/img/team-1.jpg',
              });
            }
          );
          console.log(this.serviceCardInfos);
        },
        (err) => {
          console.log(err.error);
        }
      );
    }
  }
  onDetails(id: any) {
    this.router.navigate(['/business/details/', id]);
  }
  onDelete(id: any): void {
    this.businessProfileService.deleteBusiness(id).subscribe(
      (data) => {
        window.location.reload();
      },
      (err) => {
        console.log(err.error);
      }
    );
  }
}
