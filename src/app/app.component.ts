import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwiperBasicComponent } from './swiper-basic/swiper-basic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SwiperBasicComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-swiper';
}
