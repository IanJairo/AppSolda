import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { chanfro } from '../formulas/chanfro';
import { processos } from '../formulas/processos';
import { valores } from '../formulas/constantes';
import { AlertasProvider } from '../../providers/alertas/alertas';

@IonicPage()
@Component({
  selector: 'page-tipo-operacao',
  templateUrl: 'tipo-operacao.html',
})
export class TipoOperacaoPage {
  op1: boolean;
  op2: boolean;


  public valores = valores;

  public val_geral = {

  }


  public espessura: number;
  public nariz: number;
  public fresta: number;
  public angulo: number;
  public acabamento: number;

  public chamfro: string;
  public imagem: string;

  public aTV: number;
  public aTX: number;
  public aTK: number;
  public aTmeioV: number;


  public processos = processos;
  public cFormulas = chanfro;

  public escolhaOp2;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertas: AlertasProvider
) {
    this.op1 = false;
    this.op2 = true;




  }

  public formulas() {
    let x: number = (this.espessura - this.nariz) / 2;
    let y: number = (x * Math.tan(this.angulo));

    let triangulo: number = (x * y) / 2;
    let retangulo: number = (this.espessura * this.fresta);
    let Evx: number = ((2 * y + this.fresta) * this.acabamento * Math.PI) / 2;
    let Evmv: number = (Math.PI * Math.pow(this.fresta, 2)) / 8;
    let Ekmv: number = ((this.fresta + (this.espessura - this.nariz) + Math.tan(this.angulo)) * this.acabamento * Math.PI) / 2;


    if (this.chamfro === "tipoV") {
      let a1: number = 2 * triangulo;
      let a2: number = retangulo;
      let a3: number = Evx;
      let a4: number = Evmv;

      this.aTV = a1 + a2 + a3 + a4;

      this.processos.usarChanfro = this.aTV;



    }

    if (this.chamfro === "tipoX") {
      let a1: number = 4 * triangulo;
      let a2: number = retangulo;
      let a3: number = 2 * Evx;

      this.aTX = a1 + a2 + a3;

      this.processos.usarChanfro = this.aTX;

    }

    if (this.chamfro === "tipoK") {
      let a1: number = 2 * triangulo;
      let a2: number = 2 * Ekmv;

      this.aTK = a1 + a2;
      this.processos.usarChanfro = this.aTK;

    }

    if (this.chamfro === "tipoMeioV") {
      let a1: number = triangulo;
      let a2: number = retangulo;
      let a3: number = Evmv;
      let a4: number = Ekmv

      this.aTmeioV = a1 + a2 + a3 + a4;
      this.processos.usarChanfro = this.aTmeioV;

    }



  }

  seg() {
    this.cFormulas.espessura = this.espessura;
    this.cFormulas.nariz = this.nariz;
    this.cFormulas.fresta = this.fresta;
    this.cFormulas.angulo = this.angulo;
    this.cFormulas.acabamento = this.acabamento;
    this.cFormulas.chamfro = this.chamfro;



    if (isNaN(this.espessura) || isNaN(this.nariz) || isNaN(this.fresta)
      || isNaN(this.angulo) || isNaN(this.acabamento) || (!this.chamfro)) {
      this.alertas.presentAlert();
    }

    else {
      this.formulas();
      this.navCtrl.push('TipoProcessoPage');
    }




  }

  tipoOp() {
    if (this.op1 === true && this.op2 === true) {
      this.processos.tipoOp = 'Meta&Custo';
    }

    else {
      if (this.op1 === true) {
        this.processos.tipoOp = 'Metalurgia';
      }

      else if (this.op2 === true) {
        this.processos.tipoOp = 'Custo';
      }
    }
  }

  escolha() {

    if (this.chamfro === "tipoV") {
      this.imagem = "assets/fots/ChamfroTipoV.png";
      this.cFormulas.imagem = this.imagem;
    }

    if (this.chamfro === "tipoX") {
      this.imagem = "assets/fots/ChamfroTipoX.png";
      this.cFormulas.imagem = this.imagem;
    }

    if (this.chamfro === "tipoK") {
      this.imagem = "assets/fots/ChamfroTipoK.png";
      this.cFormulas.imagem = this.imagem;
    }

    if (this.chamfro === "tipoMeioV") {
      this.imagem = "assets/fots/ChamfroTipoMeioV.png";
      this.cFormulas.imagem = this.imagem;
    }

  }



  ionViewDidLoad() {

  }
}


