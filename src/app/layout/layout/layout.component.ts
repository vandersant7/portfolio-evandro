import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../core/components/navbar/navbar.component";
import { MenuMobileComponent } from "../../core/components/menu-mobile/menu-mobile.component";

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, NavbarComponent, MenuMobileComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  menu: string[] = ['Home', 'Sobre', 'Contato'];
}
