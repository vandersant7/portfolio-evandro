import { IStackIcon } from './../../../../core/data/icon.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stack',
  imports: [],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.scss'
})
export class StackComponent {
  @Input({ required: true }) stackIcons: IStackIcon[] = [];
}
