import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-mobile',
  imports: [],
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.scss'
})
export class MenuMobileComponent {

  @Input({ required: true }) menuItems: string[] = [];

}
