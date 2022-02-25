import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ServicesComponent } from './home/services/services.component';
import { AboutComponent } from './home/about/about.component';
import { OfferComponent } from './home/offer/offer.component';
import { PosterComponent } from './home/poster/poster.component';
import { ContactContainerComponent } from './pages/contact/contact-container/contact-container.component';
import { ContactFormComponent } from './pages/contact/contact-form/contact-form.component';
import { ContactDetailsComponent } from './pages/contact/contact-details/contact-details.component';
import { RegisterationComponent } from './pages/registeration/registeration.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeContainerComponent } from './home/home-container/home-container.component';
import { BusinessProfileComponent } from './business/business-profile/business-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ServicesComponent,
    AboutComponent,
    OfferComponent,
    PosterComponent,
    ContactContainerComponent,
    ContactFormComponent,
    ContactDetailsComponent,
    RegisterationComponent,
    LoginComponent,
    HomeContainerComponent,
    BusinessProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
