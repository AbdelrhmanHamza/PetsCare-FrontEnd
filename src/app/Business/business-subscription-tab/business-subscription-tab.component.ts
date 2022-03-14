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
  handler:any = null;
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

  pay(amount: any) {    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51KaeUALRd9Mfm0umJKqYJCI3ZPNIEH0ctc4LwPysjVg95g8bcVVDq4iPZihFZrh4MRfAPpSDMnz6A9Sjbu1ELPFg00lwMMxm0p',
      locale: 'auto',
      token: function (token: any) {
        this.businessProfileService.sendtokenpayment(token);
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Token Created!!');
      }
    });
 
    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * 100
    });
 
  }
  
  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51KaeUALRd9Mfm0umJKqYJCI3ZPNIEH0ctc4LwPysjVg95g8bcVVDq4iPZihFZrh4MRfAPpSDMnz6A9Sjbu1ELPFg00lwMMxm0p',
          locale: 'auto',
          token: function (token: any) {
            this.businessProfileService.sendtokenpayment(token);

            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token);
            alert('Payment Success!!');
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }
}
