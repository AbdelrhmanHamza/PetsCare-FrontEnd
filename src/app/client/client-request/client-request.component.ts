import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientRequestServiceModel } from 'app/models/client-request-service.model';
import { ClientRequestService } from 'app/services/client-request.service';

@Component({
  selector: 'app-client-request',
  templateUrl: './client-request.component.html',
  styleUrls: ['./client-request.component.scss'],
})
export class ClientRequestComponent implements OnInit {
  @Input()
  packageId: number = 0;
  @Input()
  businessProfileID: string = '';
  request: ClientRequestServiceModel = {
    business_profile_id: '',
    package_id: 0,
    description: '',
    request_due_date: '',
  };
  registForm = new FormGroup({
    description: new FormControl('', [Validators.required]),
    request_due_date: new FormControl('', [Validators.required]),
  });
  get requestDescription() {
    return this.registForm.get('requestDescription');
  }
  get requestDueDate() {
    return this.registForm.get('requestDueDate');
  }

  constructor(private clientRequest: ClientRequestService) {}

  ngOnInit(): void {
    console.log(this.request);
  }

  onSubmit() {
    this.request = this.registForm.value;
    this.request.business_profile_id = this.businessProfileID;
    this.request.package_id = this.packageId;
    console.log(this.request);

    this.clientRequest.requestService(this.request).subscribe(
      (data) => {
        window.location.reload();

      },
      (err) => {
        console.log(err);
      }
    );
  }
}
