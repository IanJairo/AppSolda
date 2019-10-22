import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { valores, er, mm, at } from '../formulas/constantes';



@IonicPage()
@Component({
  selector: 'page-modifi-constantes',
  templateUrl: 'modifi-constantes.html',
})
export class ModifiConstantesPage {
  public val_geral = {
    efiEquipamento: '',
    vk: '',
    vg: '',
    ds: '',
  };

  public val_er = {
    ed: '',
    ce: '',
    vs: '',
  };


  public val_mm = {
    ed: '',
    ce: '',
  }

  public val_at = {
    ed: '',
    ce: '',
  }

  public key: string;
  public key1: string;
  public key2: string;
  public key3: string;

  public valores = valores;
  public er = er;
  public mm = mm;
  public at = at;




  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,

    private storage: Storage,
  ) {

  }

  //Enviar valores ao banco
  subir() {
    if (this.val_geral) {
      this.key = 'gerais';


    }

    if (this.val_er.ed || this.val_er.ce || this.val_er.vs) {
      this.key1 = 'er';

    }

    if (this.val_mm.ed || this.val_mm.ce) {
      this.key2 = 'mm';

    }

    if (this.val_at.ed || this.val_at.ce) {
      this.key3 = 'at';

    }

    this.enviar();
  }

  enviar() {
    if (this.key) {

      this.storage.set(this.key, this.val_geral);
      this.mostar();
      this.conSalvo();
    }

    if (this.key1) {
      this.storage.set(this.key1, this.val_er);
      this.mostar();
      this.conSalvo();
    }

    if (this.key2) {
      this.storage.set(this.key2, this.val_mm);
      this.mostar();
      this.conSalvo();
    }

    if (this.key3) {
      this.storage.set(this.key3, this.val_at);
      this.mostar();
      this.conSalvo();
    }

  }

  //Alerta para contantes atualizadas
  conSalvo() {
    const toast = this.toastCtrl.create({
      message: 'Constantes alteradas com sucesso',
      duration: 2000,
      position: 'top'
    });
    toast.present();
    this.navCtrl.push(ModifiConstantesPage);
  }


  mostar() {


    if (this.key) {
      this.storage.get(this.key).then((val = {}) => {

        if (val.efiEquipamento !== 0.9 && val.efiEquipamento !== null && val.efiEquipamento !== undefined) {
          this.valores.efiEquipamento = val.efiEquipamento;
        }

        if (val.vk !== 0.39 && val.vk !== null && val.vk !== undefined) {
          this.valores.valorKWh = val.vk;
        }


        if (val.vg !== 15 && val.vg !== null && val.vg !== undefined) {
          this.valores.vazGas = val.vg;
        }


        if (val.ds !== 7860 && val.ds !== null && val.ds !== undefined) {
          this.valores.densidadeSol = val.ds;
        }
      });
    }

    if (this.key1) {
      this.storage.get(this.key1).then((val = {}) => {

        if (val.ed !== 0.6 && val.ed !== null && val.ed !== undefined) {
          this.er.efiDeposicao = val.ed;
        }

        if (val.ce !== 10.39 && val.ce !== null && val.ce !== undefined) {
          this.er.cusEletrodo = val.ce;
        }


        if (val.vs !== 0.006 && val.vs !== null && val.vs !== undefined) {
          this.er.velSolda = val.vs;
        }

      });
    }

    if (this.key2) {
      this.storage.get(this.key2).then((val = {}) => {

        if (val.ed !== 0.9 && val.ed !== null && val.ed !== undefined) {
          this.mm.efiDeposicao = val.ed;
        }

        if (val.ce !== 8.3 && val.ce !== null && val.ce !== undefined) {
          this.mm.cusEletrodo = val.ce;
        }


      });
    }

    if (this.key3) {
      this.storage.get(this.key3).then((val = {}) => {


        if (val.ed !== 0.85 && val.ed !== null && val.ed !== undefined) {
          this.at.efiDeposicao = val.ed;
        }

        if (val.ce !== 11.45 && val.ce !== null && val.ce !== undefined) {
          this.at.cusEletrodo = val.ce;
        }

      });
    }

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ConstantesPage');

  }

}