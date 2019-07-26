import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(
    private userSevice: UserService
  ) { }

  public products: any = [];
  ngOnInit() {

    this.userSevice.getCategoryWiseProducts('5d224669ca5bec29abdf23ed').subscribe(
      (data: any) => {
        this.products = data.data;
        console.log('data', this.products);
      },
      err => {
        console.log('eer', err);
      }
    );
  }

}
