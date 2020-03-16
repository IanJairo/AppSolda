import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { valores, er, mm, at } from '../formulas/constantes';



@IonicPage()
@Component({
  selector: 'page-modifi-constantes',
  templateUrl: 'modifi-constantes.html',
})
export class ModifiConstantesPage {


  public valores = valores;
  public er = er;
  public mm = mm;
  public at = at;




  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,

    private storage: Storage,
  ) {

  }
  editar(tipo, valores) {
    const modal = this.modalCtrl.create('EditarPage', {
      tipo: tipo,
      valores: valores
    });
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConstantesPage');

  }
}

