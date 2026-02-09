import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { Features } from './sections/features/features';
import { Help } from './sections/help/help';
import { Technology } from './sections/technology/technology';
import { Impact } from './sections/impact/impact';
import { Infrastructure } from './sections/infrastructure/infrastructure';
import { Contact } from './sections/contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, Features, Help, Technology, Impact, Infrastructure, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
