import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './home/about/about.component';
import { HomeContainerComponent } from './home/home-container/home-container.component';
import { ServicesComponent } from './home/services/services.component';
import { ContactContainerComponent } from './pages/contact/contact-container/contact-container.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterationComponent } from './pages/registeration/registeration.component';

const routes: Routes = [
  {path:'home', component:HomeContainerComponent},
  { path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'contact-us',component:ContactContainerComponent},
  {path:'sign-up', component:RegisterationComponent},
  { path:'login', component:LoginComponent},
  {path:'services', component:ServicesComponent},
  { path:'about-us', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*

const routes: Routes = [
  { path: 'home', component: ProductContainerComponent },
  { path: '', redirectTo:'/home', pathMatch :'full'},
  { path: 'details', component: ProductDetailsComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registeration', component: RegisterationComponent },
];
*/