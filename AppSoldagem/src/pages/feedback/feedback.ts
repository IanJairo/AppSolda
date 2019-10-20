import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
//import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';


@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
  supportMessage: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    //public db: FirebaseServiceProvider,
    public alerCtrl: AlertController,
    public toastCtrl: ToastController) {
  }

  enviar() {
    if (this.supportMessage === undefined || this.supportMessage.length < 10) {
      this.alerta('Sua mensagem precisa ter mais de 10 carateres');
    }

    else {
      console.log(this.supportMessage.length);
      //this.db.save(this.supportMessage);
      this.enviarAlerta();

    }
  }
  
  //Alerta para campo vazio
  alerta(message) {
    let alert = this.alerCtrl.create({
      title: 'Olá Soldador!',
      message,
      buttons: ['Ok']
    });
    alert.present()
  }
  //Toast para enviado
  enviarAlerta() {
    let toast = this.toastCtrl.create({
      message: 'Mensagem enviada com sucesso!',
      duration: 3000,
      position: 'bottom'
    });

    toast.present();

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }

}
