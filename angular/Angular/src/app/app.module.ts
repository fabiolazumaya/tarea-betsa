import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import routing Angular
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { testComponent} from './components/test/test.component';
import {ComponentTpl} from './components/componenttpl/componenttpl.component';


import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { HealthyComponent } from './components/healthy/healthy.component';
import { BigCardsComponent } from './components/big-cards/big-cards.component';
import { CardsLeftComponent } from './components/cards-left/cards-left.component';
import { CardsRightComponent } from './components/cards-right/cards-right.component';
import { GridComponent } from './components/grid/grid.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
@NgModule({
  declarations: [
    AppComponent, //Separar por coma.
    testComponent, 
    ComponentTpl, 
    HeaderComponent, 
    SliderComponent, 
    HealthyComponent, 
    BigCardsComponent, 
    CardsLeftComponent, 
    CardsRightComponent, 
    GridComponent, 
    FooterComponent, HomeComponent, ErrorComponent, 
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders //se añade la variable creada. 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
