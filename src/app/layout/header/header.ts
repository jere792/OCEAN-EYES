import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isScrolled = false;
  isMobileMenuOpen = false;

  menuItems = [
    { label: 'Inicio', link: '#hero', id: 'hero' },
    { label: 'Funcionalidades', link: '#funcionalidades', id: 'funcionalidades' },
    { label: 'Ayuda', link: '#ayuda', id: 'ayuda' },
    { label: 'Tecnología', link: '#tecnologia', id: 'tecnologia' },
    { label: 'Impacto', link: '#impacto', id: 'impacto' },
    { label: 'Contacto', link: '#contacto', id: 'contacto' },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }

    this.closeMobileMenu();
  }
}
