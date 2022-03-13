import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
    private router: Router,
    private modalService: NgbModal
  ) {}
  packages: ServicePakage[] = [];

  addPackageForm = new FormGroup({
    package_name: new FormControl('', [Validators.required]),
    package_description: new FormControl('', [Validators.required]),
    package_price: new FormControl('', [Validators.required]),
  });

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

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
  onDelete(id: any) {
    this.businessPakageService.deletePackage(id).subscribe(
      (data) => {
        window.location.reload();
      },
      (err) => {
        console.log(err.error);
      }
    );
  }
  onSubmit() {
    console.log(<ServicePakage>this.addPackageForm.value);
    this.businessPakageService
      .addPackage(<ServicePakage>this.addPackageForm.value, this.id)
      .subscribe(
        (data) => {
          window.location.reload();
        },
        (err) => {
          console.log(err.error);
        }
      );
  }

  get packageName() {
    return this.addPackageForm.get('package_name');
  }
  get packageDescription() {
    return this.addPackageForm.get('package_description');
  }
  get packagePrice() {
    return this.addPackageForm.get('package_price');
  }
}
