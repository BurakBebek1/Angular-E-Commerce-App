import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: [];
  searchKey: string = '';
  public filterCategory: any;

  constructor(private apiService: ApiService,
              private cartService: CartService
    ) { }

  ngOnInit(): void {

    this.apiService.getProducts().subscribe(data => {
      this.products = data;
      this.filterCategory = data

      this.products.forEach((element: any) => {
        if(element.category === "women's clothing" || element.category === "men's clothing") {
          element.category = "fashion";
        }
        Object.assign(element, {quantity:1, total:element.price})
      });
    });

    this.cartService.search.subscribe(value => {
      this.searchKey = value;
    })
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }

  filter(category: string) {
    this.filterCategory = this.products.filter((a: any) => {
      if(a.category == category || category=='') {
        return a;
      }
    })
  }


}
