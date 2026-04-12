import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../core/services/producto';
import { CarritoService } from '../../core/services/carrito';
import { Producto } from '../../core/models/producto.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  private productoService = inject(ProductoService);
  private carritoService = inject(CarritoService);

  productos: Producto[] = [];
  destacados: Producto[] = [];
  agregadoId: number | null = null;

  ngOnInit() {
    this.productos = this.productoService.getProductos();
    this.destacados = this.productos.slice(0, 4);
  }

  agregarAlCarrito(producto: Producto) {
    this.carritoService.agregar(producto);
    this.agregadoId = producto.id;
    setTimeout(() => this.agregadoId = null, 2000);
  }
}
