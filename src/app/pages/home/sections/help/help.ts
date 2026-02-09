import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { HelpAction } from '../../../../core/interfaces/help/help-action.interface';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './help.html',
  styleUrl: './help.scss',
})
export class Help {
  helpActions: HelpAction[] = [
    {
      id: 1,
      image: 'assets/images/help/barco-1.jpg',
      icon: 'fas fa-clipboard-list',
      title: 'Reporta Actividades',
      description: 'Si observas actividades sospechosas, repórtalas a las autoridades.',
    },
    {
      id: 2,
      image: 'assets/images/help/barco-2.jpg',
      icon: 'fas fa-bullhorn',
      title: 'Difunde Información',
      description: 'Comparte información sobre la pesca ilegal y educa a tu comunidad.',
    },
    {
      id: 3,
      image: 'assets/images/help/barco-3.jpg',
      icon: 'fas fa-leaf',
      title: 'Reduce tu Huella Marina',
      description: 'Evita plásticos de un solo uso y especies en riesgo para proteger los océanos.',
    },
    {
      id: 4,
      image: 'assets/images/help/barco-4.jpg',
      icon: 'fas fa-pen-fancy',
      title: 'Firma Peticiones',
      description: 'Apoya iniciativas que promuevan leyes más estrictas contra la pesca ilegal.',
    },
  ];
}
