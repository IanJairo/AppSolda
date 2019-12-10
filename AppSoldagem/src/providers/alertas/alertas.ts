
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class AlertasProvider {

  constructor(
    public toastController: ToastController
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

}
