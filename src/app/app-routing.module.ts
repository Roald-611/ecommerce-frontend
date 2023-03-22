import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProductComponent} from "./components/product/product.component";
import {CartComponent} from "./components/cart/cart.component";
import {ChackoutComponent} from "./components/chackout/chackout.component";
import {ThankyouComponent} from "./components/thankyou/thankyou.component";
import {LoginComponent} from "./components/login/login.component";
import {ProfileGuard} from "./guard/profile.guard";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'product/:id',component:ProductComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout',component:ChackoutComponent},
  {path:'thankyou',component:ThankyouComponent},
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProductComponent,canActivate:[ProfileGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
