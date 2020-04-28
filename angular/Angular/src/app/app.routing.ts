//Importar módulos del Core de Angular para el routing. 

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; //Se indican las rutas. 

//Importar componentes que quiero que respondan a mis rutas.
import { HomeComponent } from './components/home/home.component';

//Crear array de urls con su componente a renderear. 
const appRoutes: Routes = [ 
    {path: '/', component: HomeComponent},
    {path: '/home', component: HomeComponent},
]

//Export appRoutingProviders y appRoutes usando método forRoot de RouterModule. 
export const appRoutingProviders: any[] = []; //Estoy creando la constante 'appRoutingProviders' estoy creando un array. Pendiente para cuando se ocupe. 
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); //Se mandan a llamar. quien sabe por qué. 
