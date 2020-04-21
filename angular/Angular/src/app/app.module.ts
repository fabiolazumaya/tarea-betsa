import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { testComponent} from './components/test/test.component';
import {ComponentTpl} from './components/componenttpl/componenttpl.component';

import { from } from 'rxjs';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { HealthyComponent } from './components/healthy/healthy.component';
import { BigCardsComponent } from './components/big-cards/big-cards.component';
import { CardsLeftComponent } from './components/cards-left/cards-left.component';
import { CardsRightComponent } from './components/cards-right/cards-right.component';
import { GridComponent } from './components/grid/grid.component';
import { FooterComponent } from './components/footer/footer.component';
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
    FooterComponent, 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
