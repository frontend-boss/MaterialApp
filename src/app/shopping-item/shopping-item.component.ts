import { Component, OnInit, Input } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';  

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent implements OnInit {

  @Input('item') item: any;

  constructor(private eventEmitterService: EventEmitterService) { }

  ngOnInit(): void {
  }


  addItemToCart(){
    console.log("in additemtocart in example component");
    this.eventEmitterService.onAddItemToCart();
  }
}
