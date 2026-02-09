import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { SecurityFeature } from '../../../../core/interfaces/infrastructure/security-feature.interface';

@Component({
  selector: 'app-infrastructure',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './infrastructure.html',
  styleUrl: './infrastructure.scss'
})
export class Infrastructure {
  features: SecurityFeature[] = [
    {
      icon: 'fas fa-lock',
      title: 'Encriptación Extremo a Extremo',
      description: 'Los reportes están totalmente protegidos para resguardar la identidad.',
      color: '#3B82F6'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'GPS en Tiempo Real',
      description: 'Etiquetado de ubicación preciso para las autoridades.',
      color: '#13B6EC'
    }
  ];
}
