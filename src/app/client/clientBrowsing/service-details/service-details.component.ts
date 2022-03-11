import { Component, OnInit,Input } from '@angular/core';
import { Bussiness } from 'app/models/service.model';
import { ClientBusinessService } from 'app/services/client-business.service';
import { TokenStorageService } from 'app/services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

export interface ImagesUrls{
  src:string
}
@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {
  id:any;

  constructor(private clientBusinessService: ClientBusinessService, private tokenStorage: TokenStorageService,
    private router: Router, private activatedRoute:ActivatedRoute) {
    // const url: Observable<any> = activatedRoute.url.pipe(Map(segments :A =>segments.join('')))
    // const id: Observable<any> = activatedRoute.params
// this.id=id
     }


  sources:ImagesUrls[]=[
    {src:"../../../../assets/img/team-1.jpg"},
    {src:"../../../../assets/img/team-2.jpg"},
    {src:"../../../../assets/img/blog-1.jpg"},
    {src:"../../../../assets/img/blog-2.jpg"},

  ]
  @Input()
serviceDetails!:Bussiness
// ={

//   name: "Doha",
//   type: "Vet",
//   opensAt: "always opened",
//   closesAt: "always closed :P ",
//   package_name: "Pack da7do7",
//   phone_number: "01000000",
//   package_description: "isn't it obvious ?? >(",
//   package_price: "msh el price nuber leh 3amleno string ",
//   address: "Hereeeeeeeeeeeeeeeeeeeeee"

// }
  ngOnInit(): void {

  this.activatedRoute.queryParams.subscribe(queryParam=>{console.log(queryParam)
    this.id=  queryParam.id
  
  })
  
   
  

    if (!this.tokenStorage.getToken()) {
      this.router.navigate(['/']);
    }else{
      this.clientBusinessService.getBusinessById(this.id).subscribe(
        (data) => {
          console.log(data);
        ;
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
            this.serviceDetails ={
              id: element.id,
              name: element.business_name,
              type: element.business_type,
              opensAt: element.open_at,
              closesAt: element.close_at,
              address: element.address,
              package_name: element.package_name,
              package_description: element.package_description,
              package_price: element.package_price
            }
          });
          console.log(this.serviceDetails);
        },
        (err) => {
          console.log(err.error);

        }
      );
    }


  }
sendRequest():void{}
}
