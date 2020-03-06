import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition, stagger, query } from '@angular/animations';
import { EventEmitterService } from './event-emitter.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
  animations: [
    trigger('openClose', [
      state('open', style({height: '70vh',})),
      state('closed', style({height: '0px',})),
      transition('open => closed', [animate('0.3s cubic-bezier(.51,.51,0,1)')]),
      transition('closed => open', [animate('0.3s cubic-bezier(.51,.51,0,1)')]),
    ]),

    trigger('openCloseBackdrop', [
      state('open', style({visibility: 'visible', cursor: 'pointer', opacity: '1'})),
      state('closed', style({visibility: 'hidden', cursor: 'auto', opacity: '0'})),
      transition('open => closed', [animate('0.2s ease-out')]),
      transition('closed => open', [animate('0.2s ease-out')]),
    ]),

    trigger('openCloseLinks', [
      transition(':enter', [ // each time the binding value changes
        query('a', style({ opacity: 0})),
        query('a', [
          stagger(1000, [
            animate('0.6s', style({ opacity: 1 }))
          ])
        ]),
      ])
    ])
    
  ] // end of animations

})

export class AppComponent implements OnInit{

  constructor(private eventEmitterServiceInstance: EventEmitterService){ }

  ngOnInit(): void {
    if (this.eventEmitterServiceInstance.subscriptionInstance == undefined) {    
      this.eventEmitterServiceInstance.subscriptionInstance = this.eventEmitterServiceInstance
                                                                  .invokeAddItemToCart
                                                                  .subscribe(() => { this.addItemToCart(); });    
    }      
  }

  title = 'nextlevel-app';

  isOpen = false;

  toggleNav() {
    this.isOpen = !this.isOpen;
    this.navItems.length ? this.clearNavItems() : this.fillNavItems();
  }
  
  navItemsBackup = ["home", "example", "shop", "contact", "impressum", "privacy"];
  navItems = [];

  fillNavItems() {
    this.navItems = this.navItemsBackup;
  }
 
  clearNavItems(){
    this.navItems = [];
  }


  cartItems = [];
  cartIcon = "add_shopping_cart";

  addItemToCart(){

    console.log("in additemtocart");

    this.cartItems.push('card_giftcard');

    if(this.cartItems.length > 0){
      this.cartIcon = "shopping_cart";
    }
  }

}
