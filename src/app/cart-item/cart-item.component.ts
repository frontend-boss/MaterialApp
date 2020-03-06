import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  template: `
    <p>
      cart-item works!
    </p>
  `,
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
