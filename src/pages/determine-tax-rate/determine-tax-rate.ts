import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DetermineTaxRatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-determine-tax-rate',
  templateUrl: 'determine-tax-rate.html',
})
export class DetermineTaxRatePage {
tax_rate: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetermineTaxRatePage');
  }
closeModal() {
    this.viewCtrl.dismiss();
  }
}
