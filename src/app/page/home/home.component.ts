import { Component } from '@angular/core';
import { StackComponent } from "./sections/stack/stack.component";
import { stackIcons } from '../../core/data/stackIcons';
import { ProjectsComponent } from "./sections/projects/projects.component";

@Component({
  selector: 'app-home',
  imports: [StackComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  dataStackIcons = stackIcons;

}
