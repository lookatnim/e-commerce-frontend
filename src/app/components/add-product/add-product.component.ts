import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductsServiceService } from 'src/app/services/products-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit{
  productForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient,private productService: ProductsServiceService, private router:Router) {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      discription: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]]
    });
    this.productService = productService;
  }

  ngOnInit(): void {
    const userRole = localStorage.getItem('userRole');
    if (userRole !== "1") {
      // Redirect to home page or desired route if user role does not match
      this.router.navigate(['/home']); // Update with your desired route
      return; // Prevent further execution of fetchProducts()
    }
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  onSubmit() {
    if (this.productForm.valid) {
      const formData = new FormData();
      formData.append('product', JSON.stringify(this.productForm.value));
      if (this.selectedFile) {
        formData.append('imageFile', this.selectedFile);
      }

      this.productService.addProduct(formData);

      // const token = localStorage.getItem('token');

      // // Set the headers
      // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      // // Replace the URL with your actual API endpoint
      // const apiUrl = 'http://localhost:8005/products/addproduct';

      // this.http.post(apiUrl, formData, { headers }).subscribe(response => {
      //   console.log('Product added successfully', response);
      // }, error => {
      //   console.error('Error adding product', error);
      // });
      //desadad
    }
  }
}
