import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import type { ImpactStat } from '../../../../core/interfaces/impact/impact-stat.interface';

@Component({
  selector: 'app-impact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './impact.html',
  styleUrl: './impact.scss'
})
export class Impact implements OnInit {
  private platformId = inject(PLATFORM_ID);

  stats: ImpactStat[] = [
    { number: '+12%', label: 'Reducción de la Contaminación' },
    { number: '+120', label: 'Comunidades Activas' },
    { number: '+1K', label: 'Reportes Anuales' },
    { number: '98%', label: 'Tasa de Respuesta' }
  ];

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.observeStats();
    }
  }

  observeStats() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.2 });

    setTimeout(() => {
      document.querySelectorAll('.impact__stat').forEach(el => observer.observe(el));
    }, 100);
  }
}
