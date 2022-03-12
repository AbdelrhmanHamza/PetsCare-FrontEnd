import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bussiness } from 'app/models/service.model';
import { ClientBusinessService } from 'app/services/client-business.service';
import { TokenStorageService } from 'app/services/token-storage.service';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor(private clientBusinessService: ClientBusinessService, private tokenStorage: TokenStorageService,
    private router: Router) { }



    
  serviceCardInfos: Bussiness[] = [];
  pages: number = 0;
  ngOnInit(): void {
    if (!this.tokenStorage.getToken()) {
      this.router.navigate(['/']);
    }else{
      this.clientBusinessService.getBusinesses().subscribe(
        (data) => {
          console.log(data);
          this.pages=data.last_page;
          console.log(this.pages);
          data.data.forEach((element: 
            { id: any; 
            business_name: any;
             business_type: any; 
             open_at: any; 
             close_at: any; 
             address: any; 
             package_name: any; 
             package_description: any; 
             package_price: any; }
             ) => {
            this.serviceCardInfos.push({
              id: element.id,
              name: element.business_name,
              type: element.business_type,
              opensAt: element.open_at,
              closesAt: element.close_at,
              address: element.address,
              package_name: element.package_name,
              package_description: element.package_description,
              package_price: element.package_price
            })
          });
          console.log(this.serviceCardInfos);
        },
        (err) => {
          console.log(err.error);

        }
      );
    }
  }

}
