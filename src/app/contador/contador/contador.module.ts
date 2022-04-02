import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { ContadorComponent } from './contador.component';



@NgModule({
  declarations: [
   CalculadoraComponent,
   ContadorComponent

  ],
  exports:[
CalculadoraComponent,
ContadorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContadorModule { }
