import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TipoOperacaoPage } from '../tipo-operacao/tipo-operacao';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public home;

  constructor(public navCtrl: NavController) {
    this.home = [
      {text: "Temos o objetivo de interativamente de calcular valores de metalurgia e estimar custo nos processos de soldagem"},
      {text: "É só introduzir parâmetros dos chanfros em juntas soldadas e os processos utilizados"}
    ];
  }

  onSeguinte() {
    this.navCtrl.push(TipoOperacaoPage);

  }

}
