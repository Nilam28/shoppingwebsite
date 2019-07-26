import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { BannerComponent } from './component/banner/banner.component';
import {MaterialModule} from './../material/material.module'
import { ProductComponent } from './component/product/product.component';
import { ProductCountComponent } from './pages/product-count/product-count.component'
import { UserRoutingModule } from './user-routing.module';
//import { UserService } from './user.service';

@NgModule({
  declarations: [
    HomeComponent, 
    LayoutComponent,
     ProductListComponent,
      BannerComponent,
      ProductComponent,
      ProductCountComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ]
})
export class UserModule { }



