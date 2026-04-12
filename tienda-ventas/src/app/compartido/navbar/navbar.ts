import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../core/services/carrito';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  carritoService = inject(CarritoService);
  menuAbierto=false;
  
  toggleMenu(){
    this.menuAbierto=!this.menuAbierto;
  }
}
