import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

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
import { AddBusinessProfileFormComponent } from './business/add-business-profile-form/add-business-profile-form.component';
import { FilterComponent } from './client/clientBrowsing/filter/filter.component';
import { CardComponent } from './client/clientBrowsing/card/card.component';
import { PaginationComponent } from './client/clientBrowsing/pagination/pagination.component';
import { ContainerComponent } from './client/clientBrowsing/container/container.component';
import { FormsModule } from '@angular/forms';
import { BusinessRequestsTabComponent } from './Business/business-requests-tab/business-requests-tab.component';
import { BusinessSubscriptionTabComponent } from './Business/business-subscription-tab/business-subscription-tab.component';
import { MyBusinessesComponent } from './Business/my-businesses/my-businesses.component';
import { BusinessGalleryPreviewComponent } from './Business/business-gallery-preview/business-gallery-preview.component';

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
    BusinessProfileComponent,
    AddBusinessProfileFormComponent,
    BusinessSubscriptionTabComponent,
    BusinessRequestsTabComponent,
    FilterComponent,
    CardComponent,
    PaginationComponent,
    ContainerComponent,
    MyBusinessesComponent,
    BusinessGalleryPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
