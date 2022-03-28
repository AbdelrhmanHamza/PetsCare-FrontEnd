import { Component, OnInit, Input } from '@angular/core';
import { Bussiness } from 'app/models/service.model';
import { ClientBusinessService } from 'app/services/client-business.service';
import { TokenStorageService } from 'app/services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

export interface ImagesUrls {
  src: string;
}
@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss'],
})
export class ServiceDetailsComponent implements OnInit {
  constructor(
    private clientBusinessService: ClientBusinessService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  id: string = '';

  sources: ImagesUrls[] = [

  ];

  serviceDetails: Bussiness = {
    name: '',
    type: '',
    opensAt: '',
    closesAt: '',
  };

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') ?? '';

    if (!this.tokenStorage.getToken()) {
      this.router.navigate(['/']);
    } else {
      this.clientBusinessService.getBusinessById(this.id).subscribe(
        (data) => {
          console.log(data);
          this.serviceDetails.name = data.business_name;
          this.serviceDetails.id = data.id;
          this.serviceDetails.type = data.business_type;
          this.serviceDetails.opensAt = data.open_at;
          this.serviceDetails.closesAt = data.close_at;
          this.serviceDetails.package_name = data.id;
          this.serviceDetails.phone_number = data.phone_number;
          this.serviceDetails.package_description = data.service_description;
          this.serviceDetails.package_price = data.business_name;
          this.serviceDetails.address = data.address;
          data.users_image.forEach((element: 
            { id: any; 
            /*business_profile_id: 2
created_at: "2022-03-20T21:44:58.000000Z"
id: 5
image_name: "Screenshot (1).png"
image_path: "storage/BusinessProfiles/b5CTBv7Ld5YrIRCZrawk1efYNc3O3jmOwi2Ds2qO.png"
pet_id: null
updated_at: "2022-03-20T21:44:58.000000Z"
             */
            image_name: string; 
            image_path: string; 
              }
             ) => {
               this.sources.push({
                 src:'http://petscare.test/'+element.image_path
               })
             });
        },
        (err) => {
          console.log(err.error);
        }
      );
    }
  }

  sendRequest(): void {}
}
