import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TipoOperacaoPage } from '../pages/tipo-operacao/tipo-operacao';
import { FeedbackPage } from '../pages/feedback/feedback';
import { ModifiConstantesPage } from '../pages/modifi-constantes/modifi-constantes';
import { valores } from '../pages/formulas/constantes';
import { HistoricoPage } from '../pages/historico/historico';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  public valores = valores;

  public val_geral = {
    envio: false,
    efiEquipamento: 0.9,
    valorKWh: 0.39,
    vazGas: 15,
    densidadeSol: 7860,
  }


  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen) {
    this.initializeApp();


    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Início', component: HomePage },
      { title: 'Operação', component: TipoOperacaoPage },
      { title: 'Constantes', component: ModifiConstantesPage },
      { title: 'Historico', component: HistoricoPage },
      { title: 'Feedback', component: FeedbackPage },

    ];

  }

  initializeApp() {

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();


    });
  }



  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}