import { Component, OnInit } from '@angular/core';
import { UserService } from './../../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

    productCategories = [];

  title = 'app';

  ngOnInit() {
    this.userService.getHomeProducts().subscribe(
      (data: any) => {
        this.productCategories = data.data;
        console.log('data.data', data.data);
      },
      err => {
        console.log('eer', err);
      }
    );
  }

}
