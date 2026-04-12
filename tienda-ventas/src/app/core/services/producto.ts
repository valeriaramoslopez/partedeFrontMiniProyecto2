import { Injectable, signal } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({ providedIn: 'root' })
export class ProductoService {

  productos = signal<Producto[]>([
    {
      id: 1,
      titulo: 'Naruto Vol. 1',
      autor: 'Masashi Kishimoto',
      marca: 'Shonen Jump',
      precio: 120,
      stock: 15,
      disponible: 5,
      volumen: 1,
      genero: 'Shonen',
      imagen: 'assets/mangas/naruto.jpg',
      descripcion: 'El inicio de la historia del ninja Naruto Uzumaki que sueña con ser Hokage.'
    },
    {
      id: 2,
      titulo: 'One Piece Vol. 1',
      autor: 'Eiichiro Oda',
      marca: 'Shonen Jump',
      precio: 130,
      stock: 10,
      disponible: 7,
      volumen: 1,
      genero: 'Shonen',
      imagen: 'assets/mangas/onepiece.jpg',
      descripcion: 'Monkey D. Luffy comienza su aventura para ser el Rey de los Piratas.'
    },
    {
      id: 3,
      titulo: 'Attack on Titan Vol. 1',
      autor: 'Hajime Isayama',
      marca: 'Shonen Jump',
      precio: 150,
      stock: 8,
      disponible: 3,
      volumen: 1,
      genero: 'Seinen',
      imagen: 'assets/mangas/aot.jpg',
      descripcion: 'La humanidad lucha por sobrevivir dentro de enormes murallas contra los titanes.'
    },
    {
      id: 4,
      titulo: 'Demon Slayer Vol. 1',
      autor: 'Koyoharu Gotouge',
      marca: 'Shonen Jump',
      precio: 140,
      stock: 12,
      disponible: 4,
      volumen: 1,
      genero: 'Shonen',
      imagen: 'assets/mangas/demonslayer.jpg',
      descripcion: 'Tanjiro busca vengar a su familia y encontrar una cura para su hermana Nezuko.'
    },
    {
      id: 5,
      titulo: 'Death Note Vol. 1',
      autor: 'Tsugumi Ohba',
      marca: 'Shonen Jump',
      precio: 125,
      stock: 20,
      disponible: 10,
      volumen: 1,
      genero: 'Thriller',
      imagen: 'assets/mangas/deathnote.jpg',
      descripcion: 'Light Yagami encuentra un cuaderno sobrenatural que mata a quien se le escriba el nombre.'
    },
    {
      id: 6,
      titulo: 'Fullmetal Alchemist Vol. 1',
      autor: 'Hiromu Arakawa',
      marca: 'Shonen Jump',
      precio: 135,
      stock: 9,
      disponible: 2,
      volumen: 1,
      genero: 'Shonen',
      imagen: 'assets/mangas/fma.jpg',
      descripcion: 'Dos hermanos alquimistas buscan la Piedra Filosofal para recuperar sus cuerpos.'
    }
  ]);

  getProductos(): Producto[] {
    return this.productos();
  }

  getProductoPorId(id: number): Producto | undefined {
    return this.productos().find(p => p.id === id);
  }

  agregarProducto(producto: Omit<Producto, 'id'>): void {
    const lista = this.productos();
    const nuevoId = Math.max(...lista.map(p => p.id)) + 1;
    this.productos.set([...lista, { ...producto, id: nuevoId }]);
  }
}

