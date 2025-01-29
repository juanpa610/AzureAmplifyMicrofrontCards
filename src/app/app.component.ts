import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mfe1Module } from './mfe1/mfe1.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Mfe1Module],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Micro frontend 1'; 
}
