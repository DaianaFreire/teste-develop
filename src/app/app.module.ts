import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AboutComponent } from './componentes/pages/about/about.component';
import { CheckComponent } from './componentes/pages/check/check.component';
import { CheckoutComponent } from './componentes/pages/checkout/checkout.component';
import { PaymentComponent } from './componentes/pages/payment/payment.component';
import { HomeComponent } from './componentes/pages/home/home.component';
import { FormComponent } from './componentes/form/form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {IMaskModule} from "angular-imask";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    CheckComponent,
    CheckoutComponent,
    PaymentComponent,
    HomeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    IMaskModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
