import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { constantes } from '../formulas/constantes';
import { AlertasProvider } from '../../providers/alertas/alertas';
import { Storage } from '@ionic/storage';
import { valores, er, mm, at } from '../formulas/constantes';



@IonicPage()
@Component({
  selector: 'page-editar',
  templateUrl: 'editar.html',
})
export class EditarPage {
  public const;
  public tipo: string;

  public valores = valores;
  public er = er;
  public mm = mm;
  public at = at;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public alertas: AlertasProvider,
    public storage: Storage,




  ) {
    this.const = navParams.get('valores');
    this.tipo = navParams.get('tipo');


  }

  atualizarG() {
    this.storage.get('geral').then((val) => {
      this.valores.efiEquipamento = val.efiEquipamento;
      this.valores.valorKWh = val.valorKWh;
      this.valores.vazGas = val.vazGas;
      this.valores.densidadeSol = val.densidadeSol;
    });
  }

  atualizarEr() {
    this.storage.get('er').then((val) => {
      this.er.cusEletrodo = val.cusEletrodo;
      this.er.efiDeposicao = val.efiDeposicao;
      this.er.velSolda = val.velSolda;
    });
  }

  atualizarMm() {
    this.storage.get('mm').then((val) => {
      this.mm.cusEletrodo = val.cusEletrodo;
      this.mm.efiDeposicao = val.efiDeposicao;
      
    });
  }
  atualizarAt() {
    this.storage.get('at').then((val) => {
      this.at.cusEletrodo = val.cusEletrodo;
      this.at.efiDeposicao = val.efiDeposicao;
      
    });
  }



  ionViewWillLeave() {
    this.atualizarG();
    this.atualizarEr();
    this.atualizarMm();
    this.atualizarAt();

  }


  // Envia ao banco de dados
  enviar() {
    if (this.tipo === 'geral') {
      if (this.const.efiEquipamento === undefined || this.const.valorKWh
        === undefined || this.const.vazGas === undefined || this.const.densidadeSol === undefined) {
        this.alertas.presentToast('Preencha os Campos');
      } else {
        this.storage.set(this.tipo, this.const);
        

        this.alertas.presentToast('Modificado com sucesso!');

        this.dismiss();
      }
    }

    else if (this.tipo === 'er') {
      if (this.const.efiDeposicao === undefined || this.const.cusEletrodo
        === undefined || this.const.velSolda === undefined) {
        this.alertas.presentToast('Preencha os Campos');
      } else {
        this.storage.set(this.tipo, this.const);
        

        console.log('Enviado com sucesso');
        console.log(this.const);
        this.alertas.presentToast('Modificado com sucesso!');

        this.dismiss();
      }
    }

    else if (this.tipo === 'mm') {
      if (this.const.efiDeposicao === undefined || this.const.cusEletrodo
        === undefined) {
        this.alertas.presentToast('Preencha os Campos');
      } else {
        this.storage.set(this.tipo, this.const);
        
        console.log('Enviado com sucesso');
        console.log(this.const);
        this.alertas.presentToast('Modificado com sucesso!');
        this.dismiss();
      }
    }

    else if (this.tipo === 'at') {
      if (this.const.efiDeposicao === undefined || this.const.cusEletrodo
        === undefined) {
        this.alertas.presentToast('Preencha os Campos');
      } else {
        this.storage.set(this.tipo, this.const);
        
        console.log('Enviado com sucesso');
        console.log(this.const);
        this.alertas.presentToast('Modificado com sucesso!');
        this.dismiss();
      }
    }
    


  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

}
