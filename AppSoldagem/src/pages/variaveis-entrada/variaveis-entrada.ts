import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { processos } from '../formulas/processos';
import { constantes } from '../formulas/constantes';
import { er } from '../formulas/constantes';
import { valores } from '../formulas/constantes';
import { mm } from '../formulas/constantes';
import { at } from '../formulas/constantes';
import { AlertasProvider } from '../../providers/alertas/alertas';

import { Storage } from '@ionic/storage';
import { chanfro } from '../formulas/chanfro';



@IonicPage()
@Component({
  selector: 'page-variaveis-entrada',
  templateUrl: 'variaveis-entrada.html',
})
export class VariaveisEntradaPage {
  public comCord: number;
  public corrente: number;
  public d: number;
  public mObra: number
  public numPass: number;
  public valor: number;
  public valInves: number;

  public processo = processos;
  public chanfro = chanfro;

  public resultado: Resultados[] = [];
  public er = er;
  public valores = valores;
  public mm = mm;
  public at = at;





  public i: number;
  public v: number;
  public velSolda: number;
  //Maquina
  public valResidual: number;
  public cusMedioManu: number;
  public cusDepre: number;
  public cusTotalMaquina: number;

  //Energia
  public tempoSolda: number;
  public cusTotalEnergia: number;

  //Mão de obra
  public cusTotalmObra: number;

  //Consumíves 
  public mMetalDepo: number;
  public cusMetalDepo: number;
  public cusGas: number;
  public cusTotalConsu: number;

  //Total
  public custoTotal: number;


  public aporTermico: number;

  public id: string;

  public mLogo: string = 'md-beaker';
  public mLabel: string = 'i';
  public mVari: string = 'b';
  public data: Date = new Date();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alerta: AlertasProvider,
    public storage: Storage

  ) {
    this.id = navParams.get('id');
    this.mLabel = navParams.get('mLabel');

  }





  tipoGeral() {
    ////this.mostar();
    this.i = 60 * (this.d - 1); //corrente
    this.v = 20 + (0.04 * this.i); //Tensão
    this.velSolda = Math.pow((this.i + 22) / (52 * this.d), 1.43);

    this.processo.valResidual = Math.pow(0.9, 10) * this.valInves;

    //Maquina
    this.processo.cusMedioManu = (0.1 * this.valInves) / 12;
    this.processo.cusDepre = (this.valInves - this.processo.valResidual) / 10;
    this.processo.cusTotalMaquina = (this.processo.cusMedioManu + this.processo.cusDepre) / 12;
  }

  // Eletrodo Revestido
  tipo1() {
    //Energia Eletrica
    //this.mostar();
    this.processo.tempoSolda = (((this.er.efiDeposicao * this.numPass * this.valores.efiEquipamento * this.comCord) / 1000) / this.er.velSolda) / 60; //em horas
    this.processo.cusTotalEnergia = this.valores.valorKWh * this.processo.tempoSolda;

    //Mão de Obra
    this.processo.cusTotalmObra = this.mObra * this.processo.tempoSolda;

    //COnsumiveis
    this.processo.mMetalDepo = ((this.valores.densidadeSol * this.processo.usarChanfro * this.comCord) / 1000000000) / this.er.efiDeposicao;
    this.processo.cusMetalDepo = this.processo.mMetalDepo * this.er.cusEletrodo;
    this.processo.cusGas = 0;
    this.processo.cusTotalConsu = this.processo.cusMetalDepo;

    //Custo Total
    this.processo.custoTotal = this.processo.cusTotalMaquina + this.processo.cusTotalEnergia + this.processo.cusTotalmObra + this.processo.cusTotalConsu;

    //Metalurgia: Aporte Térmico
    if (this.processo.tipoOp === 'Meta&Custo') {
      this.aporTermico = (this.i * this.v * this.er.efiDeposicao) / this.er.velSolda;
    }


  }

  //  Mig/Mag
  tipo2() {
    //this.mostar();
    //Energia Eletrica
    this.processo.tempoSolda = (((this.mm.efiDeposicao * this.numPass * this.valores.efiEquipamento * this.comCord) / 1000) / this.velSolda) / 60; //em horas /diferente
    this.processo.cusTotalEnergia = this.valores.valorKWh * this.processo.tempoSolda;// diferente


    //Mão de Obra
    this.processo.cusTotalmObra = this.mObra * this.processo.tempoSolda;
    //Consumíveis
    this.processo.mMetalDepo = ((this.valores.densidadeSol * this.processo.usarChanfro * this.comCord) / 1000000000) / this.mm.efiDeposicao; //Kg /diferente
    this.processo.cusMetalDepo = this.processo.mMetalDepo * this.mm.cusEletrodo;
    this.processo.cusGas = ((this.valores.vazGas * this.processo.tempoSolda * 60) / 1000) * this.valor; //Reais MM
    this.processo.cusTotalConsu = this.processo.cusMetalDepo; // MM


    //Total
    this.processo.custoTotal = this.processo.cusTotalConsu + this.processo.cusTotalEnergia + this.processo.cusTotalMaquina + this.processo.cusTotalmObra;

    //Metalurgia: Aporte Térmico
    if ((this.processo.tipoOp === 'Meta&Custo')) {
      this.aporTermico = (this.i * this.v * this.mm.efiDeposicao) / this.velSolda;
    }
  }

  //  Arame Tubular
  tipo3() {

    //Energia Eletrica
    this.processo.tempoSolda = (((this.at.efiDeposicao * this.numPass * this.valores.efiEquipamento * this.comCord) / 1000) / this.velSolda) / 60; //em horas /diferente
    this.processo.cusTotalEnergia = this.valores.valorKWh * this.processo.tempoSolda;// diferente


    //Mão de Obra
    this.processo.cusTotalmObra = this.mObra * this.processo.tempoSolda;
    //Consumíveis
    this.processo.mMetalDepo = ((this.valores.densidadeSol * this.processo.usarChanfro * this.comCord) / 1000000000) / this.at.efiDeposicao; //Kg /diferente
    this.processo.cusMetalDepo = this.processo.mMetalDepo * this.at.cusEletrodo;
    this.processo.cusGas = ((this.valores.vazGas * this.processo.tempoSolda * 60) / 1000) * this.valor; //Reais MM
    this.processo.cusTotalConsu = this.processo.cusMetalDepo; // MM


    //Total
    this.processo.custoTotal = this.processo.cusTotalConsu + this.processo.cusTotalEnergia + this.processo.cusTotalMaquina + this.processo.cusTotalmObra;

    //Metalurgia: Aporte Térmico
    if ((this.processo.tipoOp === 'Meta&Custo')) {
      this.aporTermico = (this.i * this.v * this.at.efiDeposicao) / this.velSolda;
    }
  }

  resul() {
    this.processo.comCord = this.comCord;
    this.processo.corrente = this.corrente;
    this.processo.d = this.d;
    this.processo.mObra = this.mObra;
    this.processo.numPass = this.numPass;
    this.processo.valGas = this.valor;
    this.processo.valInves = this.valInves;





    if (this.id === 'Er') {
      if (this.numPass === undefined || this.mObra === undefined ||
        this.comCord === undefined || this.d === undefined ||
        this.valInves === undefined) {
        this.alerta.presentAlert('Prencha todos os campos para ter resultado!');

      }
      else {
        this.tipoGeral();
        this.tipo1();
        this.navCtrl.push('ResultadosPage');

        this.pushResult();
        this.storage.set('resultados', this.resultado);
      }


    }

    else if (this.id === 'Mm') {


      if (this.numPass === undefined || this.mObra === undefined ||
        this.comCord === undefined || this.d === undefined ||
        this.valInves === undefined || this.valor === undefined) {
        this.alerta.presentAlert('Prencha todos os campos para ter resultado!');

      }

      else {
        this.tipoGeral();
        this.tipo2();
        this.navCtrl.push('ResultadosPage');
        this.pushResult();
        this.storage.set('resultados', this.resultado);




      }

    }

    else if (this.id === 'At') {



      if (this.numPass === undefined || this.mObra === undefined ||
        this.comCord === undefined || this.d === undefined ||
        this.valInves === undefined || this.valor === undefined) {
        this.alerta.presentAlert('Prencha todos os campos para ter resultado!');
      }

      else {
        this.tipoGeral();
        this.tipo3();
        this.navCtrl.push('ResultadosPage');
        this.pushResult();
        this.storage.set('resultados', this.resultado);
      }
    }
  }


  pushResult() {
    this.resultado.push({
      idProcesso: this.id,
      tipoOp: this.processo.tipoOp,
      usarChanfro: this.processo.usarChanfro,
      comCord: this.processo.comCord,
      corrente: this.processo.corrente,
      d: this.processo.d,
      mObra: this.processo.mObra,
      numPass: this.processo.numPass,
      valGas: this.processo.valGas,
      valInves: this.processo.valInves,


      //Maquina
      valResidual: this.processo.valResidual,
      cusMedioManu: this.processo.cusMedioManu,
      cusDepre: this.processo.cusDepre,
      cusTotalMaquina: this.processo.cusTotalMaquina,

      //Energia
      tempoSolda: this.processo.tempoSolda,
      cusTotalEnergia: this.processo.cusTotalEnergia,

      //Mão de obra
      cusTotalmObra: this.processo.cusTotalmObra,

      //Consumíves 
      mMetalDepo: this.processo.mMetalDepo,
      cusMetalDepo: this.processo.cusMetalDepo,
      cusGas: this.processo.cusGas,
      cusTotalConsu: this.processo.cusTotalConsu,

      //Total
      custoTotal: this.processo.custoTotal,

      imgChanfro: this.chanfro.imagem,
      nomeChanfro: this.chanfro.chamfro

    });
  }

  ionViewDidLoad() {
    //Retorna os valores do BCDD 
    this.storage.get('resultados').then((val) => {
      //Verifica se existe o banco
      if (val !== null) {
        //Verifica se o objeto que retorna tem mais de três operações
        if (val.length >= 3) {
          //Elimina a operação mais antiga
          val.shift();
          //Adiciona com a operação apagada => length(2)
          this.resultado = val;
        }
        else {
          //Caso as operações dentro do banco seja menor que 3, adiciona normalmente
          this.resultado = val;
        }
      }
      else {
        //Banco não existe!
        console.log('Não há nada salvo no banco!');
      }
    });
  }
}

class Resultados {
  idProcesso: any;
  tipoOp: any;
  usarChanfro: any;
  comCord: any;
  corrente: any;
  d: any;
  mObra: any;
  numPass: any;
  valGas: any;
  valInves: any;
  valResidual: any;
  cusMedioManu: any;
  cusDepre: any;
  cusTotalMaquina: any;
  tempoSolda: any;
  cusTotalEnergia: any;
  cusTotalmObra: any;
  mMetalDepo: any;
  cusMetalDepo: any;
  cusGas: any;
  cusTotalConsu: any;
  custoTotal: any;
  nomeChanfro: any;
  imgChanfro: any


}