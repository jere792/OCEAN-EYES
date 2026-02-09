import { Component } from '@angular/core';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Hero } from './pages/home/sections/hero/hero';
import { Technology } from './pages/home/sections/technology/technology';
import { Help } from './pages/home/sections/help/help';
import { Features } from './pages/home/sections/features/features';
import { Impact } from './pages/home/sections/impact/impact';
import { Infrastructure } from './pages/home/sections/infrastructure/infrastructure';
import { Contact } from './pages/home/sections/contact/contact';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Footer,
    Hero,
    Technology,
    Help,
    Features,
    Impact,
    Infrastructure,
    Contact
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Ocean Eyes';
}
