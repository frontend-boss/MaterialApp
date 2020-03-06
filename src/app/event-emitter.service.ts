import { Injectable, EventEmitter, Output} from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  invokeAddItemToCart = new EventEmitter();
  subscriptionInstance: Subscription;

  constructor() { }

  onAddItemToCart(){
    console.log("in additemtocart in emitter service");
    this.invokeAddItemToCart.emit();
  }
}
