import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
