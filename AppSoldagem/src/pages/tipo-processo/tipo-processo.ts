import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { constantes } from '../formulas/constantes';


@IonicPage()
@Component({
  selector: 'page-tipo-processo',
  templateUrl: 'tipo-processo.html',
})
export class TipoProcessoPage {
  public mensagem: string;
  public metodo: string;

  public cons = constantes;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    ) {
    this.mensagem = '';


  }
  //Ir para Eletrodo revestido
  verEr() {
    this.metodo = 'Er';
    this.cons.metodo = this.metodo;
    this.navCtrl.push('VariaveisEntradaPage', {
      id: this.metodo,

      mLabel: 'Valor consumivel'
    });

  }

  verMm() {
    this.metodo = 'Mm';
    this.cons.metodo = this.metodo;
    this.navCtrl.push('VariaveisEntradaPage', {
      id: this.metodo,

      mLabel: 'Custo do Gas'

    });
  }

  verAt() {
    this.metodo = 'At';
    this.cons.metodo = this.metodo;
    this.navCtrl.push('VariaveisEntradaPage', {
      id: this.metodo,

      mLabel: 'Custo do Gas'
    });
  }
}
