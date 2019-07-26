// import { Injectable } from '@angular/core';
// import { LoginRequest } from './login.types';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { map, catchError} from 'rxjs/operators';
// import { environment } from './../../../environments/environment';
// import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {

//   constructor(
//     private http: HttpClient,
//     private router: Router
//   ) { }

//   public login(userInfo: LoginRequest) {
//     return this.http.post<any>(`${environment.apiUrl}auth/login`, userInfo).pipe(
//       map(response => {
//         if (response && response.data.token) {
//           localStorage.setItem('currentUser', JSON.stringify(response.data.user));
//           localStorage.setItem('token', response.data.token);
//         }
//       }),
     
//     );
//   }

//   public isLoggedIn() {
//     if (localStorage.getItem('currentUser')) {
//       return true;
//     }
//     return false;
//   }
// }


import { Injectable } from '@angular/core';
import { LoginRequest } from './login.types';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';

// https://www.truecodex.com/course/angular-project-training/login-and-logout-using-web-api-with-token-based-authentication-angular
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  errorData: {};

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public login(userInfo: LoginRequest) {
    return this.http.post<any>(`${environment.apiUrl}auth/login`, userInfo).pipe(
      map(response => {
        if (response && response.data.token) {
          localStorage.setItem('currentUser', JSON.stringify(response.data.user));
          localStorage.setItem('token', response.data.token);
        }
      }),
      //catchError(this.handleError)
    );
  }

  public isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
  }
}
