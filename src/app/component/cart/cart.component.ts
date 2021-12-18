import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products: any = [];
  public grandTotal: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(response => {
      this.products = response;
      this.grandTotal = this.cartService.getTotalPrice()
    })
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }

  emptyCard() {
    this.cartService.removeAll();
  }

}