import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  
  animations: [
    trigger('openClose', [
      state('open', style({height: '200px',})),
      state('closed', style({height: '0px',})),
      transition('open => closed', [animate('0.3s ease-out')]),
      transition('closed => open', [animate('0.3s ease-out')]),
    ]),

    trigger('openCloseBackdrop', [
      state('open', style({visibility: 'visible', cursor: 'pointer', opacity: '1'})),
      state('closed', style({visibility: 'hidden', cursor: 'auto', opacity: '0'})),
      transition('open => closed', [animate('0.3s ease-out')]),
      transition('closed => open', [animate('0.3s ease-out')]),
    ]),
  ]

})

export class AppComponent {
  title = 'nextlevel-app';

  isOpen = false;

  toggleNav() {
    this.isOpen = !this.isOpen;
  }
  
}
