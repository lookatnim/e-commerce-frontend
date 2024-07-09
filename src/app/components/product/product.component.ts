import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products = [
    {
      name: 'Product 1',
      price: 19.99,
      description: 'This is a great product.',
      image: '../../../assets/img/product1.jpg'
    },
    {
      name: 'Product 2',
      price: 29.99,
      description: 'This is another great product.',
      image: '../../../assets/img/product2.jpg'
    },
    // Add more products as needed
  ];

  constructor() {}

  ngOnInit(): void {}
}
