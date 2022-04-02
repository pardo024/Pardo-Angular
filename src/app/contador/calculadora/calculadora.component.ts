import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent  {
   
   resultado:string;
   evaluada:string;
  constructor() { 

this.resultado='';
this.evaluada='';
  }


total(sumador:string):void{
  this.resultado+=sumador;
}

  num1():void{
    
  this.total('1');
  }
  num2():void{
    
    this.total('2');
    }
    num3():void{
    
      this.total('3');
      }
      num4():void{
    
        this.total('4');
        }
        num5():void{
    
          this.total('5');
          }
          num6():void{
    
            this.total('6');
            }
            num7():void{
    
              this.total('7');
              }
              num8():void{
    
                this.total('8');
                }
                num9():void{
    
                  this.total('9');
                  }
                  num0():void{
    
                    this.total('0');
                    }
                    suma():void{
    
                      this.total('+');
                      }
    
                    resta():void{
    
                      this.total('-');
                      }

                      multi():void{
    
                        this.total('*');
                        }
                        div():void{
    
                          this.total('/');
                          }
                        
                          p1():void{
    
                            this.total('(');
                            }
                            p2():void{
    
                              this.total(')');
                              }
            
                              punto():void{
    
                                this.total('.');
                                }
                                potencia():void{
    
                                  this.total('**');
                                  }
                                  cls():void{
    
                                   this.resultado="";
                                    }

                    igual():void{
                     
                      this.evaluada= eval(this.resultado);
                   this.resultado=this.evaluada;
                      }
}
