import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBusinessProfileFormComponent } from './business/add-business-profile-form/add-business-profile-form.component';
import { BusinessProfileComponent } from './business/business-profile/business-profile.component';
import { BusinessRequestsTabComponent } from './Business/business-requests-tab/business-requests-tab.component';
import { BusinessSubscriptionTabComponent } from './Business/business-subscription-tab/business-subscription-tab.component';
import { BusinessUpdateContainerComponent } from './Business/business-update-container/business-update-container.component';
import { MyBusinessesComponent } from './Business/my-businesses/my-businesses.component';

import { ClientAddPetFormComponent } from './client/clientBrowsing/client-add-pet-form/client-add-pet-form.component';

import { ClientProfileContainerComponent } from './client/client-profile-container/client-profile-container.component';

import { ContainerComponent } from './client/clientBrowsing/container/container.component';
import { ServiceDetailsComponent } from './client/clientBrowsing/service-details/service-details.component';
import { AboutComponent } from './home/about/about.component';
import { HomeContainerComponent } from './home/home-container/home-container.component';
import { ServicesComponent } from './home/services/services.component';
import { ContactContainerComponent } from './pages/contact/contact-container/contact-container.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterationComponent } from './pages/registeration/registeration.component';
// import { StripeComponent } from './payment/stripe/stripe.component';

const routes: Routes = [

  {path:'home', component:HomeContainerComponent},
  { path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'contact-us',component:ContactContainerComponent},
  {path:'sign-up', component:RegisterationComponent},
  { path:'login', component:LoginComponent},
  {path:'services', component:ServicesComponent},
  { path:'about-us', component:AboutComponent},
  { path:'businesses', component:ContainerComponent},
  { path:'businesses/details', component:ServiceDetailsComponent},
  { path:'business/profile', component:BusinessProfileComponent},
  { path:'business/my-businesses', component:MyBusinessesComponent},
  { path:'business/add', component:AddBusinessProfileFormComponent},
  { path:'business/details', component:BusinessUpdateContainerComponent},
  { path:'business/requests', component:BusinessRequestsTabComponent},
  { path:'business/subscription', component:BusinessSubscriptionTabComponent},
  {path:'client', component:ClientAddPetFormComponent},

  { path: 'home', component: HomeContainerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'contact-us', component: ContactContainerComponent },
  { path: 'sign-up', component: RegisterationComponent },
  { path: 'profile', component: ClientProfileContainerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'businesses', component: ContainerComponent },
  { path: 'businesses/details/:id', component: ServiceDetailsComponent },
  { path: 'business/profile', component: BusinessProfileComponent },
  { path: 'business/my-businesses', component: MyBusinessesComponent },
  { path: 'business/add', component: AddBusinessProfileFormComponent },
  { path: 'business/details', component: BusinessUpdateContainerComponent },
  { path: 'business/requests', component: BusinessRequestsTabComponent },
  {
    path: 'business/subscription',
    component: BusinessSubscriptionTabComponent,
  },
  { path: 'business/details/:id', component: BusinessUpdateContainerComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
