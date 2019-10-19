import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { processos } from '../formulas/processos';
import { constantes } from '../formulas/constantes';
import { er } from '../formulas/constantes';
import { valores } from '../formulas/constantes';
import { mm } from '../formulas/constantes';
import { at } from '../formulas/constantes';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.id = navParams.get('id');
    this.mLabel = navParams.get('mLabel');

  }

  tipoGeral() {
    ////this.mostar();
    this.i = 60 * (this.d - 1); //corrente
    this.v = 20 + (0.04 * this.i); //Tensão
    this.velSolda = Math.pow((this.i + 22) / (52 * this.d), 1.43);

    this.valResidual = Math.pow(0.9, 10) * this.valInves;

    //Maquina
    this.cusMedioManu = (0.1 * this.valInves) / 12;
    this.cusDepre = (this.valInves - this.valResidual) / 10;
    this.cusTotalMaquina = (this.cusMedioManu + this.cusDepre) / 12;
  }

     // Eletrodo Revestido
     tipo1() {
      //Energia Eletrica
      //this.mostar();
      this.tempoSolda = (((this.er.efiDeposicao * this.numPass * this.valores.efiEquipamento * this.comCord) / 1000) / this.er.velSolda) / 60; //em horas
      this.cusTotalEnergia = this.valores.valorKWh * this.tempoSolda;

      //Mão de Obra
      this.cusTotalmObra = this.mObra * this.tempoSolda;

      //COnsumiveis
      this.mMetalDepo = ((this.valores.densidadeSol * this.processo.usarChanfro * this.comCord) / 1000000000) / this.er.efiDeposicao;
      this.cusMetalDepo = this.mMetalDepo * this.er.cusEletrodo;
      this.cusGas = 0;
      this.cusTotalConsu = this.cusMetalDepo;

      //Custo Total
      this.custoTotal = this.cusTotalMaquina + this.cusTotalEnergia + this.cusTotalmObra + this.cusTotalConsu;

      //Metalurgia: Aporte Térmico
      if (this.processo.tipoOp === 'Meta&Custo' ) {
          this.aporTermico = (this.i * this.v * this.er.efiDeposicao) / this.er.velSolda;
      }
  }

  //  Mig/Mag
  tipo2() {
      //this.mostar();
      //Energia Eletrica
      this.tempoSolda = (((this.mm.efiDeposicao * this.numPass * this.valores.efiEquipamento * this.comCord) / 1000) / this.velSolda) / 60; //em horas /diferente
      this.cusTotalEnergia = this.valores.valorKWh * this.tempoSolda;// diferente


      //Mão de Obra
      this.cusTotalmObra = this.mObra * this.tempoSolda;
      //Consumíveis
      this.mMetalDepo = ((this.valores.densidadeSol * this.processo.usarChanfro * this.comCord) / 1000000000) / this.mm.efiDeposicao; //Kg /diferente
      this.cusMetalDepo = this.mMetalDepo * this.mm.cusEletrodo;
      this.cusGas = ((this.valores.vazGas * this.tempoSolda * 60) / 1000) * this.valor; //Reais MM
      this.cusTotalConsu = this.cusMetalDepo; // MM


      //Total
      this.custoTotal = this.cusTotalConsu + this.cusTotalEnergia + this.cusTotalMaquina + this.cusTotalmObra;

      //Metalurgia: Aporte Térmico
      if ((this.processo.tipoOp === 'Meta&Custo')) {
          this.aporTermico = (this.i * this.v * this.mm.efiDeposicao) / this.velSolda;
      }
  }

  //  Arame Tubular
  tipo3() {

      //Energia Eletrica
      this.tempoSolda = (((this.at.efiDeposicao * this.numPass * this.valores.efiEquipamento * this.comCord) / 1000) / this.velSolda) / 60; //em horas /diferente
      this.cusTotalEnergia = this.valores.valorKWh * this.tempoSolda;// diferente


      //Mão de Obra
      this.cusTotalmObra = this.mObra * this.tempoSolda;
      //Consumíveis
      this.mMetalDepo = ((this.valores.densidadeSol * this.processo.usarChanfro * this.comCord) / 1000000000) / this.at.efiDeposicao; //Kg /diferente
      this.cusMetalDepo = this.mMetalDepo * this.at.cusEletrodo;
      this.cusGas = ((this.valores.vazGas * this.tempoSolda * 60) / 1000) * this.valor; //Reais MM
      this.cusTotalConsu = this.cusMetalDepo; // MM


      //Total
      this.custoTotal = this.cusTotalConsu + this.cusTotalEnergia + this.cusTotalMaquina + this.cusTotalmObra;

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
      this.tipoGeral();
      this.tipo1();
    }

    else if (this.id === 'Mm') {
      this.tipoGeral();
      this.tipo2();



    }

    else if (this.id === 'At') {

      this.tipoGeral();
      this.tipo3();


    }


    this.navCtrl.push('ResultadosPage');




  }

  ionViewDidLoad() {
    console.log(this.id);
  }

}
