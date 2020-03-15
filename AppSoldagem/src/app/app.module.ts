import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TipoOperacaoPage } from '../pages/tipo-operacao/tipo-operacao';
import { FeedbackPage } from '../pages/feedback/feedback';
import { ModifiConstantesPage } from '../pages/modifi-constantes/modifi-constantes';

import { IonicStorageModule } from '@ionic/storage';
import { AlertasProvider } from '../providers/alertas/alertas';

import { CONFIG } from './config.fire';

import { AngularFirestoreModule } from '@angular/fire/firestore'; //O Database 

import { AngularFireAuthModule } from '@angular/fire/auth'; //Autenticação
import { AngularFireModule } from '@angular/fire';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { HistoricoPage } from '../pages/historico/historico';

//import {  NetworkOriginal } from '@ionic-native/network';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TipoOperacaoPage,
    FeedbackPage,
    ModifiConstantesPage,
    HistoricoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireModule.initializeApp(CONFIG),
    IonicStorageModule.forRoot({
      name: '__soldagem',
      storeName: 'constantes',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TipoOperacaoPage,
    FeedbackPage,
    ModifiConstantesPage,
    HistoricoPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AlertasProvider,
    FirebaseProvider,
    AngularFireDatabase
    //    NetworkOriginal
  ]
})
export class AppModule { }
