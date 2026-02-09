import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { MainTech, TechnologyItem } from '../../../../core/interfaces/technology/technology.interface';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technology.html',
  styleUrl: './technology.scss'
})
export class Technology {
  mainTech: MainTech = {
    image: 'assets/images/technology/boyas.jpg',
    title: 'Monitoreo de Floramiento Algal',
    description: 'Ocean Eyes incluye tecnología avanzada para detectar floraciones de algas nocivas (HABs). Estos eventos afectan la salud marina, la pesca y las comunidades costeras. Con tu ayuda, podemos crear mapas en tiempo real y alertar a las autoridades.'
  };

  technologies: TechnologyItem[] = [
    {
      id: 1,
      image: 'assets/images/technology/entorno-sucio.png',
      title: 'Detección de Floramiento',
      description: 'Captura fotos del agua con coloración anormal (verde, roja, marrón).',
      features: ['Análisis visual automático', 'Geolocalización precisa', 'Timestamp y condiciones']
    },
    {
      id: 2,
      image: 'assets/images/technology/mas-boyas.png',
      title: 'Proyecto MAS BOYAS',
      description: 'Red de boyas inteligentes para monitoreo continuo de calidad del agua.',
      features: ['Sensores de pH y temperatura', 'Detección de clorofila', 'Transmisión en tiempo real']
    },
    {
      id: 3,
      image: 'assets/images/technology/internet.png',
      title: 'Datos Compartidos',
      description: 'Toda la información se comparte con entidades científicas y reguladoras.',
      features: ['Reportes a IMARPE', 'Alertas a DICAPI', 'Dashboard público']
    }
  ];
}
