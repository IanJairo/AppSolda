
import { Injectable } from '@angular/core';
import { ToastController, AlertController } from 'ionic-angular';

@Injectable()
export class AlertasProvider {

  constructor(
    public toastController: ToastController,
    public alertController: AlertController
  ) {
    console.log('Hello AlertasProvider Provider');
  }

  presentToast(message) {
    const toast = this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
  
  presentAlert(message) {
    let alert = this.alertController.create({
      title: 'Olá Soldador!',
      message,
      buttons: ['Ok']
    });
    alert.present()
  }

}
