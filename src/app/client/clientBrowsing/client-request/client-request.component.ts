import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusinessRequest } from 'app/models/businessRequest.mode';
import { ClientRequestService } from '../../../services/client-request.service';

@Component({
  selector: 'app-client-request',
  templateUrl: './client-request.component.html',
  styleUrls: ['./client-request.component.scss']
})
export class ClientRequestComponent implements OnInit {
  requestForm = new FormGroup({
    requestDescription:new FormControl('',[Validators.required]),
    requestDueDate:new FormControl('',[Validators.required]),
  
  
  });
  constructor(private router: Router,private clientRequest: ClientRequestService) { }

  ngOnInit(): void {
  }

  
  onSubmit(){
     
      this.clientRequest.requestService(<BusinessRequest>this.requestForm.value).subscribe(
        (data)=>{
          this.router.navigate(['/']);
        }

      )
      
      

     }

     get requestDescription(){
    return this.requestForm.get('requestDescription');
  };
  get requestDueDate()
  {
    return this.requestForm.get('requestDueDate');
  };
 

}
