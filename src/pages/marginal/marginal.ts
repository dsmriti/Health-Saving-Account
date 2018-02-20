import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { DetermineTaxRatePage } from './../determine-tax-rate/determine-tax-rate';

/**
 * Generated class for the MarginalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-marginal',
  templateUrl: 'marginal.html',
})
export class MarginalPage {
 tax_rate: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarginalPage');
  }
  openModal(characterNum) {

    let modal = this.modalCtrl.create(DetermineTaxRatePage, characterNum);
    modal.present();
  }

}
