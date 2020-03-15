import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertasProvider } from '../../providers/alertas/alertas';
import { FirebaseProvider } from '../../providers/firebase/firebase';



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
    public db: FirebaseProvider,
    public alerta: AlertasProvider,
    //public network: NetworkOriginal
  ) {
  }

  enviar() {
    if (this.supportMessage === undefined || this.supportMessage.length < 10) {
      this.alerta.presentAlert('Sua mensagem precisa ter mais de 10 carateres');
    }

    else {
      console.log(this.supportMessage.length);
      this.db.enviarMensagem(this.supportMessage);
      this.alerta.presentToast('Mensagem enviada com sucesso!');

    }
  }



  ionViewDidEnter() {
    //this.network.onDisconnect().subscribe(data => {
    //  console.log(data);
    //},
    //  error => console.log(error));
  }

}
