// import { identifierName } from '@angular/compiler';
// import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';


// declare var stripe: stripe.StripeStatic

// @Component({
//   selector: 'app-stripe',
//   templateUrl: './stripe.component.html',
//   styleUrls: ['./stripe.component.scss']
// })
// export class StripeComponent implements OnInit {

//   constructor() { }
//   @Input() amount!:number;
//   @ViewChild('cardElement') cardElement!: ElementRef;
//   stripe:any;
//   card:any;
//   cardErrors:any;
//   loading=false;
//   confirmation:any;
//   ngAfterViewInit() {
  
//       this.stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
    
//       const elements =this.stripe.elements();
//       this.card=elements.create('card');
//       this.card.mount(this.cardElement.nativeElement);
//       this.card.addEventListener('change',({error}:any)=>{
//         this.cardErrors=error && error.message;
//       });

//   }

//   ngOnInit(): void {
 
//   }
//   async handleform(e:any){
//     e.preventDefault();
//     const{source,error} = await this.stripe.createSource(this.card);

//     if (error){
//       const cardErrors=error.message;
//     }
//     // else{
//     //   this.loading=true;
//     //   const user =await this.auth.getUser();
//     //   const fun = this.functions.httpsCallable('stripeCreateCharge');
//     //   this.confirmation =await fun({source:source,identifierName,uid:user.uid,amount:this.amount}).toPromise();
//     // }
//   }

// }
