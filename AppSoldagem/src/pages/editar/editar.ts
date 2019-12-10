import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { constantes } from '../formulas/constantes';
import { AlertasProvider } from '../../providers/alertas/alertas';

/**
 * Generated class for the EditarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar',
  templateUrl: 'editar.html',
})
export class EditarPage {
  public const;
  public tipo: string;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public alertas: AlertasProvider) {
    this.const = navParams.get('valores');
    this.tipo = navParams.get('tipo');


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarPage');
    console.log(this.const);
    console.log(this.tipo)
  }


  // Envia ao banco de dados
  enviar() {
    if (this.tipo === 'geral') {
      if (this.const.efiEquipamento === undefined || this.const.valorKWh
        === undefined || this.const.vazGas === undefined || this.const.densidadeSol === undefined) {
        this.alertas.presentToast('Preencha os Campos');
      } else {

        console.log('Enviado com sucesso');
        console.log(this.const);
        this.alertas.presentToast('Modificado com sucesso!');

        this.dismiss();
      }
    }

    else if (this.tipo === 'er') {
      if (this.const.efiDeposicao === undefined || this.const.cusEletrodo
        === undefined || this.const.velSolda === undefined) {
        this.alertas.presentToast('Preencha os Campos');
      } else {

        console.log('Enviado com sucesso');
        console.log(this.const);
        this.alertas.presentToast('Modificado com sucesso!');

        this.dismiss();
      }
    }

    else if (this.tipo === 'mm' || this.tipo === 'at') {
      if (this.const.efiDeposicao === undefined || this.const.cusEletrodo
        === undefined) {
        this.alertas.presentToast('Preencha os Campos');
      } else {

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
