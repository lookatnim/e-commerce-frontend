import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsServiceService } from 'src/app/services/products-service.service';
 // Update the path as per your file structure

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: any[] = []; // Initialize an empty array

  constructor(private productService: ProductsServiceService , private router: Router) {}

  

  ngOnInit(): void {
    const userRole = localStorage.getItem('userRole');
    if (userRole !== "1") {
      // Redirect to home page or desired route if user role does not match
      this.router.navigate(['/home']); // Update with your desired route
      return; // Prevent further execution of fetchProducts()
    }
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

  getProductImageUrl(product: any): string {
    if (product && product.images && product.images.length > 0) {
      return 'data:' + product.images[0].type + ';base64,' + product.images[0].picByte;
    }
    return ''; // Default or placeholder image URL if no image is found
  }

  deleteProduct(productId: number) {
    this.productService.deleteProduct(productId).subscribe(
      () => {
        console.log(`Product with ID ${productId} deleted successfully`);
        // Optionally, you can update the products array after deletion
        this.fetchProducts();
      },
      (error) => {
        console.error(`Error deleting product with ID ${productId}:`, error);
      }
    );
  }
  
}
