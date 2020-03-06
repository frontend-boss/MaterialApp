import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';  

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  addToShoppingCart(){
    
  }
}
