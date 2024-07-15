import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any[] = []; // Initialize an empty array

  constructor(private productService: ProductsServiceService, private router : Router) {}

  ngOnInit(): void {
    this.fetchProducts(); // Call the method to fetch products on component initialization
  }

  fetchProducts() {
    this.productService.allProducts().subscribe(
      (response: any) => {
        this.products = response; // Assign the fetched products to the component's products array
        console.log(response)
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  public addToCart(productId: any): void {
    this.productService.addToCart(productId).subscribe(
      response => {
        this.router.navigate(['/cart']);
        console.log(response)
      },
      error => {
        console.error('Error adding product', error);
      }
    );
  }

  getProductImageUrl(product: any): string {
    if (product && product.images && product.images.length > 0) {
      return 'data:' + product.images[0].type + ';base64,' + product.images[0].picByte;
    }
    return ''; // Default or placeholder image URL if no image is found
  }

}
