import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsServiceService } from 'src/app/services/products-service.service';

interface CartItem {
  image: string;
  name: string;
  price: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: any = [];
  totalPrice: number = 0;

  constructor(private productService: ProductsServiceService, private router : Router) {}

  ngOnInit(): void {
    this.fetchProducts();
    this.calculateTotalPrice();
  }

  fetchProducts() {
    this.productService.getCartItems().subscribe(
      (response: any) => {
        this.cartItems = response; 
        this.calculateTotalPrice();
        console.log(response)
      },
      (error) => {
        console.error('Error fetching cart:', error);
      }
    );
  }

  getProductImageUrl(product: any): string {
    if (product && product.images && product.images.length > 0) {
      return 'data:' + product.images[0].type + ';base64,' + product.images[0].picByte;
    }
    return ''; // Default or placeholder image URL if no image is found
  }

  calculateTotalPrice(): void {
    this.totalPrice = 0;
    this.cartItems.forEach((item: any) => {
      console.log(item)
      this.totalPrice += item.product.prize;
    });
  }
  
}
