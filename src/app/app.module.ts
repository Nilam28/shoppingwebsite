import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminModule } from './modules/admin/admin.module';
import { UserModule } from './modules/user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './modules/login/login.module';
import { CharlimitPipe } from './shared/pipe/charlimit.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CharlimitPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    UserModule,
    LoginModule,
    BrowserAnimationsModule,
  ],
  providers:
   [
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
