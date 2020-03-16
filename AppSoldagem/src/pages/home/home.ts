import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TipoOperacaoPage } from '../tipo-operacao/tipo-operacao';
import { Storage } from '@ionic/storage';

import { valores, er, mm, at } from '../formulas/constantes';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public valores = valores;
  public er = er;
  public mm = mm;
  public at = at;

  public home;
  g = {
    efiEquipamento: 0.9,
    valorKWh: 0.39,
    vazGas: 15,
    densidadeSol: 7860,
  }


  mM = {
    efiDeposicao: 0.9,
    cusEletrodo: 8.3,
  }

  eR = {
    efiDeposicao: 0.6,
    cusEletrodo: 10.39,
    velSolda: 0.006,
  }

  aT = {
    efiDeposicao: 0.85,
    cusEletrodo: 11.42,
  }
  constructor(public navCtrl: NavController,
    public storage: Storage) {
    this.home = [
      { text: "Temos o objetivo de interativamente de calcular valores de metalurgia e estimar custo nos processos de soldagem" },
      { text: "É só introduzir parâmetros dos chanfros em juntas soldadas e os processos utilizados" }
    ];
  }

  onSeguinte() {
    this.navCtrl.push(TipoOperacaoPage);

  }

  ionViewDidLoad() {
  

    this.storage.get('geral').then((val) => {
      if (val === null) {
        this.storage.set('geral', this.valores);
        this.valores.efiEquipamento = this.g.efiEquipamento;
        this.valores.valorKWh = this.g.valorKWh;
        this.valores.vazGas = this.g.vazGas;
        this.valores.densidadeSol = this.g.densidadeSol;
      }
      else {
        console.log("Existem as constantes no banco!");
        
      }
    });

    this.storage.get('mm').then((val) => {
      if (val === null) {
        this.storage.set('mm', this.mm);
        this.mm.cusEletrodo = this.mM.cusEletrodo;
        this.mm.efiDeposicao = this.mM.efiDeposicao;

      }
      else {
        console.log("Existem as constantes no banco!");
      }
    });

    this.storage.get('at').then((val) => {
      if (val === null) {
        this.storage.set('at', this.at);
        this.at.cusEletrodo = this.aT.cusEletrodo;
        this.at.efiDeposicao = this.aT.efiDeposicao;
      }
      else {
        console.log("Existem as constantes no banco!");
      }
    });

    this.storage.get('er').then((val) => {
      if (val === null) {
        this.storage.set('er', this.er);
        this.er.cusEletrodo = this.eR.cusEletrodo;
        this.er.efiDeposicao = this.eR.efiDeposicao;
        this.er.velSolda = this.eR.velSolda;
      }
      else {
        console.log("Existem as constantes no banco!");
      }
    });

  }



}
