import { Component } from '@angular/core';
import { StackComponent } from "./sections/stack/stack.component";

@Component({
  selector: 'app-home',
  imports: [StackComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


}
