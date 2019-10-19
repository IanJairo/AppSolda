import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TipoOperacaoPage } from './tipo-operacao';

@NgModule({
  declarations: [
    TipoOperacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(TipoOperacaoPage),
  ],
})
export class TipoOperacaoPageModule {}
