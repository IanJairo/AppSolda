
import { Injectable } from '@angular/core';


import { AngularFireDatabase } from '@angular/fire/database';




@Injectable()
export class FirebaseProvider {
  public key: string = 'feedbackApp';
  public error: string;
  constructor(
    public db: AngularFireDatabase
    ) {

  }

  // Envia ao Banco
  enviarMensagem(dado: string) {
    this.db.database.ref(this.key).push(dado)
      .then(() => {
        console.log('Enviado com sucesso!');
      })
      .catch(err => {
        console.log('mira el error: ', err);
        this.error = err;
      })
  }

  verifiNet() {

  }
}
