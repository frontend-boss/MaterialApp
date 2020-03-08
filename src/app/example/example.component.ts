import { Component, OnInit } from '@angular/core';   
  
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  constructor() { }

  shoppingitems = [
    {
      image: "../assets/suit.jpg",
      title: "Washington Suit",
      price: 530.00

    },
    {
      image: "../assets/suit.jpg",
      title: "Washington Suit",
      price: 530.00

    },
    {
      image: "../assets/suit.jpg",
      title: "Washington Suit",
      price: 530.00

    },
  ];


  ngOnInit(): void {
    
  }



}
