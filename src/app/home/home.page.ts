import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}


  fechar(){
    navigator['app'].exitApp();
    
  }

  public precoGasolina: string;
  public precoAlcool: string; 
  public resultadoTexto: String = "  Preencha os valores para que seja calculado qual opção se encaixa mais no seu bolso.  "

  calculaPreco(){
    if( this.precoGasolina && this.precoAlcool ) {

        //para fazer o calculo tem que fazer o parse no angular
        var pAlcool = parseFloat(this.precoAlcool)
        var pGas = parseFloat(this.precoGasolina)

        var res = pAlcool /  pGas 
        
        if(res >= 0.7 ){
          this.resultadoTexto = " A gasolina vale mais a pena! "
        }else{
          this.resultadoTexto = " O álcool vale mais a pena!  "
        }
    }




  }


  

}
