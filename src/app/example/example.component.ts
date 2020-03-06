import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';    
  
import { ShoppingItemComponent } from '../shopping-item/shopping-item.component';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.less']
})
export class ExampleComponent implements OnInit {

  constructor(private eventEmitterService: EventEmitterService) { }

  ngOnInit(): void {
  }

  addItemToCart(){
    console.log("in additemtocart in example component");
    this.eventEmitterService.onAddItemToCart();
  }
}
