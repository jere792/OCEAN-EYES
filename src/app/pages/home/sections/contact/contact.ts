import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SocialLink {
  name: string;
  url: string;
  iconClass: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  socialLinks: SocialLink[] = [
    { name: 'Facebook', url: 'https://facebook.com', iconClass: 'fa-brands fa-facebook-f' },
    { name: 'Instagram', url: 'https://instagram.com', iconClass: 'fa-brands fa-instagram' },
    { name: 'TikTok', url: 'https://tiktok.com', iconClass: 'fa-brands fa-tiktok' },
    { name: 'X', url: 'https://x.com', iconClass: 'fa-brands fa-x-twitter' }
  ];
}
