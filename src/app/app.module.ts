import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraModule } from './calculadora';
import { DashboardModule } from './dashboard';
import {DataBindingsModule } from './data-bindings';
import { HomeModule } from './home';
import { PreparacaoAmbienteModule } from './preparacao-ambiente';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    DataBindingsModule,
    PreparacaoAmbienteModule,
    CalculadoraModule,
    DashboardModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
