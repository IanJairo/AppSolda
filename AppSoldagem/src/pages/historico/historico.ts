import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { processos } from '../formulas/processos';


@IonicPage()
@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html',
})
export class HistoricoPage {
  public valores: any;
  public processo = processos;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage) {
  }

  verResultados(resul) {

    this.processo.tipoOp = resul.tipoOp;
    this.processo.usarChanfro = resul.usarChanfro;
    this.processo.comCord = resul.comCord;
    this.processo.corrente = resul.corrente;
    this.processo.d = resul.d;
    this.processo.mObra = resul.mObra;
    this.processo.numPass = resul.numPass;
    this.processo.valGas = resul.valGas;
    this.processo.valInves = resul.valInves;


    //Maquina
    this.processo.valResidual = resul.valResidual;
    this.processo.cusMedioManu = resul.cusMedioManu;
    this.processo.cusDepre = resul.cusDepre;
    this.processo.cusTotalMaquina = resul.cusTotalMaquina;

    //Energia
    this.processo.tempoSolda = resul.tempoSolda;
    this.processo.cusTotalEnergia = resul.cusTotalEnergia;

    //Mão de obra
    this.processo.cusTotalmObra = resul.cusTotalmObra;

    //Consumíves 
    this.processo.mMetalDepo = resul.mMetalDepo;
    this.processo.cusMetalDepo = resul.cusMetalDepo;
    this.processo.cusGas = resul.cusGas;
    this.processo.cusTotalConsu = resul.cusTotalConsu;

    //Total
    this.processo.custoTotal = resul.custoTotal;
    this.navCtrl.push('ResultadosPage', {
      resul: resul,
      tipo: 'historico'
    });
    this.processo = resul;
    console.log(this.processo);
    console.log(resul);

  }


  ionViewDidLoad() {
    this.storage.get('resultados').then((data) => {
      this.valores = data;
      console.log('testando o bagulho', this.valores);

    });
  }

}
