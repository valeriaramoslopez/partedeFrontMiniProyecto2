import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent:()=> import('./features/home/home').then(m=>m.Home)
    },
    {
        path: 'detalles/:id',
        loadComponent:()=> import('./features/detalles-producto/detalles-producto').then(m=>m.DetallesProducto)
    },
    {
        path: 'catalogo',
        loadComponent:()=> import('./features/catalogo/catalogo').then(m=>m.Catalogo)
    },
    {
        path: 'agregar',
        loadComponent:()=> import('./features/agregar/agregar').then(m=>m.Agregar)
    },
    {
        path: 'contacto',
        loadComponent:()=> import('./features/contacto/contacto').then(m=>m.Contacto)
    },
    {
        path: 'carrito',
        loadComponent:()=> import('./features/carrito/carrito').then(m=>m.Carrito)
    },
    {path:'**', redirectTo:''}
];
