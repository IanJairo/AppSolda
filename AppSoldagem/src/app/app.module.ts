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


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TipoOperacaoPage,
    FeedbackPage,
    ModifiConstantesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
    ModifiConstantesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
