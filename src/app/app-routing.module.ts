import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./componentes/pages/about/about.component";
import {CheckComponent} from "./componentes/pages/check/check.component";
import {CheckoutComponent} from "./componentes/pages/checkout/checkout.component";
import {PaymentComponent} from "./componentes/pages/payment/payment.component";
import {HomeComponent} from "./componentes/pages/home/home.component";

const routes: Routes = [
  {path:'', component: AboutComponent},
  {path:'check', component: CheckComponent},
  {path:'checkout', component: CheckoutComponent},
  {path:'payment', component: PaymentComponent},
  {path:'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
