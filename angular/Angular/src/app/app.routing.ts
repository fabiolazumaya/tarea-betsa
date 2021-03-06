//Importar módulos del Core de Angular para el routing.

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; //Se indican las rutas.

//Importar componentes que quiero que respondan a mis rutas.
import { HomeComponent } from './components/home/home.component';
import { LifeandTipsComponent } from './components/lifeand-tips/lifeand-tips.component';
import { En123Component } from './components/en123/en123.component';
import { ErrorComponent } from './components/error/error.component';

//Crear array de urls con su componente a renderear.
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'lifeandTips', component: LifeandTipsComponent },
  { path: 'lifeandTips/:category_name', component: LifeandTipsComponent },
  { path: 'en123/:category_name', component: En123Component },
  { path: '**', component: ErrorComponent }, //Siempre debe de ir hasta abajo
];

//Export appRoutingProviders y appRoutes usando método forRoot de RouterModule.
export const appRoutingProviders: any[] = []; //Estoy creando la constante 'appRoutingProviders' estoy creando un array. Pendiente para cuando se ocupe.
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); // tipo ModuleWithProviders modelo de dato.
