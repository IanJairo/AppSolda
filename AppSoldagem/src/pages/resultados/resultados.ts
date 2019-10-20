import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Modal } from 'ionic-angular';
import { processos } from '../formulas/processos';
import { TipoOperacaoPage } from '../tipo-operacao/tipo-operacao';
//import { ConstantesPage } from '../constantes/constantes';




@IonicPage()
@Component({
  selector: 'page-resultados',
  templateUrl: 'resultados.html',
})
export class ResultadosPage {
  public processo = processos;
  public valResidual: number = this.processo.valResidual;
  public valResidualNumber: string;

  public cusMedioManu: number = this.processo.cusMedioManu;
  public cusMedioManuNumber: string;

  public cusDepre: number = this.processo.cusDepre;
  public cusDepreNumber: string;

  public cusTotalMaquina: number = this.processo.cusTotalMaquina;
  public cusTotalMaquinaNumber: string;

  public tempoSolda: number = this.processo.tempoSolda;
  public tempoSoldaNumber: string;

  public cusTotalEnergia: number = this.processo.cusTotalEnergia;
  public cusTotalEnergiaNumber: string;

  public cusTotalmObra: number = this.processo.cusTotalmObra;
  public cusTotalmObraNumber: string;

  public mMetalDepo: number = this.processo.mMetalDepo;
  public mMetalDepoNumber: string;

  public cusMetalDepo: number = this.processo.cusMetalDepo;
  public cusMetalDepoNumber: string;

  public usarChamfro: number = this.processo.usarChanfro;
  public usarChamfroNumber: string;

  public cusGas: number = this.processo.cusGas;
  public cusGasNumber: string;

  public cusTotalConsu: number = this.processo.cusTotalConsu;
  public cusTotalConsuNumber: string;

  public custoTotal: number = this.processo.custoTotal;
  public custoTotalNumber: string;




  public modo: string;




  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController) {

    this.valResidualNumber = (this.valResidual).toLocaleString('pt-BR', { maximumFractionDigits: 2 });
    this.cusMedioManuNumber = (this.cusMedioManu).toLocaleString('pt-BR', { maximumFractionDigits: 2 });
    this.cusDepreNumber = (this.cusDepre).toLocaleString('pt-BR', { maximumFractionDigits: 2 });
    this.cusTotalMaquinaNumber = (this.cusTotalMaquina).toLocaleString('pt-BR', { maximumFractionDigits: 2 });
    this.tempoSoldaNumber = (this.tempoSolda).toLocaleString('pt-BR', { maximumFractionDigits: 2 });
    this.cusTotalEnergiaNumber = (this.cusTotalEnergia).toLocaleString('pt-BR', { maximumFractionDigits: 2 });
    this.cusTotalmObraNumber = (this.cusTotalmObra).toLocaleString('pt-BR', { maximumFractionDigits: 2 });
    this.mMetalDepoNumber = (this.mMetalDepo).toLocaleString('pt-BR', { maximumFractionDigits: 2 });
    this.cusMetalDepoNumber = (this.cusMetalDepo).toLocaleString('pt-BR', { maximumFractionDigits: 2 });
    this.cusTotalConsuNumber = (this.cusTotalConsu).toLocaleString('pt-BR', { maximumFractionDigits: 2 });
    this.usarChamfroNumber = (this.usarChamfro).toLocaleString('pt-BR', { maximumFractionDigits: 2 });
    this.custoTotalNumber = (this.custoTotal).toLocaleString('pt-BR', { maximumFractionDigits: 2 });
    this.cusGasNumber = (this.cusGas).toLocaleString('pt-BR', { maximumFractionDigits: 2 });
  }


  verMais(req: string) {
    if (req === 'inicio') {
      this.navCtrl.setRoot(TipoOperacaoPage);
    }

    if (req === 'feedback') {
      //this.navCtrl.setRoot(FeedbackPage);
    }

    if (req === 'metalurgia') {
      const modal = this.modalCtrl.create('MetalurgiaPage')
      modal.present();
    }

    else {
      this.navCtrl.setRoot('ModifiConstantesPage');

    }
  }

  ionViewDidLoad() {
    if ((this.processo.tipoOp === 'Meta&Custo')) {
      this.modo = 'Valores de Metalurgia';

    }

    else {
      this.modo = 'Modificar contantes';
    }
  }








}
