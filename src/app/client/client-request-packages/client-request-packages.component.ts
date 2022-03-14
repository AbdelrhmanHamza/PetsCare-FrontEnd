import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicePakage } from 'app/models/service-pakage.model';
import { ClientRequestService } from 'app/services/client-request.service';
import { TokenStorageService } from 'app/services/token-storage.service';

@Component({
  selector: 'app-client-request-packages',
  templateUrl: './client-request-packages.component.html',
  styleUrls: ['./client-request-packages.component.scss'],
})
export class ClientRequestPackagesComponent implements OnInit {
  @Input()
  id: string = '';
  packageID = 0;
  packages: ServicePakage[] = [];
  constructor(
    private clientRequestService: ClientRequestService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    console.log(this.id);
    if (!this.tokenStorage.getToken()) {
      this.router.navigate(['/']);
    } else {
      this.clientRequestService.getPakages(this.id).subscribe(
        (data) => {
          console.log(data);
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
  open(content: any, id: number) {
    this.packageID = id;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
}
