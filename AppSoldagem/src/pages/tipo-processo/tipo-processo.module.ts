import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TipoProcessoPage } from './tipo-processo';

@NgModule({
  declarations: [
    TipoProcessoPage,
  ],
  imports: [
    IonicPageModule.forChild(
      TipoProcessoPage),
  ],
})
export class TipoProcessoPageModule {}
