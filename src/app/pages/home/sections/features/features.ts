import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.html',
  styleUrl: './features.scss'
})
export class Features {
  features: Feature[] = [
    {
      id: 1,
      icon: 'assets/icons/anonimo-icon.png',
      title: 'Reportes Anónimos',
      description: 'Tu identidad está protegida. Solo usamos DNI para validar nunca se comparte.'
    },
    {
      id: 2,
      icon: 'assets/icons/camara-icon.png',
      title: 'Reporte con Foto/Video',
      description: 'Captura evidencia de pesca ilegal con la cámara. La app guarda ubicación GPS automáticamente.'
    },
    {
      id: 3,
      icon: 'assets/icons/offline-icon.png',
      title: 'Modo Offline',
      description: 'Reporta sin señal. La app guarda todo y sincroniza automáticamente cuando tengas internet.'
    },
    {
      id: 4,
      icon: 'assets/icons/ubicacion-icon.png',
      title: 'Geolocalización Precisa',
      description: 'Cada reporte incluye coordenadas exactas y timestamp para validación de autoridades.'
    }
  ];
}
