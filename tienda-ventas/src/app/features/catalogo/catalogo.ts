import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../core/services/producto';
import { CarritoService } from '../../core/services/carrito';
import { Producto } from '../../core/models/producto.model';

@Component({
  selector: 'app-catalogo',
  imports: [RouterLink, CommonModule],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.scss',
})
export class Catalogo implements OnInit {
  private productoService = inject(ProductoService);
  carritoService = inject(CarritoService);

  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];
  generos: string[]=[];
  generoSeleccionado: string='Todos';
  agregadoId: number | null = null;

  ngOnInit() {
    this.productos = this.productoService.getProductos();
    this.productosFiltrados=this.productos;
    this.generos=['Todos', ...new Set(this.productos.map(p=>p.genero))];
  }

  filtrarPorGenero(genero: string){
    this.generoSeleccionado=genero;
    if(genero=='Todos'){
      this.productosFiltrados=this.productos;
    }else{
      this.productosFiltrados=this.productos.filter(p=>p.genero===genero);
    }
  }

  agregarAlCarrito(producto: Producto) {
    this.carritoService.agregar(producto);
    this.agregadoId = producto.id;
    setTimeout(() => this.agregadoId = null, 2000);
  }
}
