import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { testComponent} from './components/test/test.component';
import {ComponentTpl} from './components/componenttpl/componenttpl.component';

import { from } from 'rxjs';
import { HeaderComponent } from './component/header/header.component';
import { SliderComponent } from './component/slider/slider.component';
import { HealthyComponent } from './component/healthy/healthy.component';
import { BigCardsComponent } from './component/big-cards/big-cards.component';
import { CardsLeftComponent } from './component/cards-left/cards-left.component';
import { CardsRightComponent } from './component/cards-right/cards-right.component';
import { GridComponent } from './component/grid/grid.component';
import { FooterComponent } from './component/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    testComponent, //Separar por coma.
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
