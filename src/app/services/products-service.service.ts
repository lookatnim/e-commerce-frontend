import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private httpClient : HttpClient, private router :Router) { }
  
  public addProduct(productData: any){
    
      const token = localStorage.getItem('token');
      // Set the headers
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      // Replace the URL with your actual API endpoint
      const apiUrl = `${environment.apiUrl}products/addproduct`;

      this.httpClient.post(apiUrl, productData, { headers }).subscribe(response => {
        console.log('Product added successfully', response);
        this.router.navigate(['/products']);
      }, error => {
        console.error('Error adding product', error);
      });
  }

  // public addToCart(productId : any){
  //   const token = localStorage.getItem('token');
  //   // Set the headers
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    

  //   // Replace the URL with your actual API endpoint
  //   const apiUrl = `${environment.apiUrl}cart/addtocart/${productId}/${localStorage.getItem('id')}`;
  //   this.httpClient.get(apiUrl,{headers}).subscribe(response =>{
  //     this.router.navigate(['/cart']);
  //   }, error => {
  //     console.error('Error adding product', error);
  //   })
// }
  addToCart(productId: any): Observable<void> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const apiUrl = `${environment.apiUrl}cart/addtocart/${productId}/${localStorage.getItem('id')}`;
    

    return this.httpClient.get<void>(apiUrl, { headers });
  }

  getCartItems(): Observable<void> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const apiUrl = `${environment.apiUrl}cart/user/${localStorage.getItem('id')}`;
    

    return this.httpClient.get<void>(apiUrl, { headers });

  }
  

  public allProducts(): Observable<any[]> {
    const apiUrl = `${environment.apiUrl}products/pub/all`; // Update with your actual API endpoint

    return this.httpClient.get<any[]>(apiUrl);
  }

  public deleteProduct(productId: number): Observable<any> {
    const token = localStorage.getItem('token');
      // Set the headers
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const apiUrl = `${environment.apiUrl}products/deleteproduct/${productId}`; // Update with your DELETE API endpoint

    return this.httpClient.delete(apiUrl,{headers});
  }
}
