import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Producto } from '../../core/models/producto.model';

@Component({
  selector: 'app-producto-card',
  imports: [RouterLink, CommonModule],
  templateUrl: './producto-card.html',
  styleUrl: './producto-card.scss',
})
export class ProductoCard {
  @Input() producto!: Producto;
  @Output() agregarCarrito = new EventEmitter<Producto>();

  agregado=false;

  onAgregarCarrito() {
    this.agregarCarrito.emit(this.producto);
    this.agregado=true;
    setTimeout(()=>this.agregado=false, 2000);
  }
}
