import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { WithdrawalPage } from './../withdrawal/withdrawal';
/**
 * Generated class for the ContributePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contribute',
  templateUrl: 'contribute.html',
})
export class ContributePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContributePage');
  }
  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'About Your Annual Contribution',
      message: 'Each year the Federal government determines the total maximum dollar amount both you and your employer may contribute. For 2017, this maximum is $3,400 if you are Single, and $6,750 for all other coverage levels.If you are aged 55 years or older, you may also make \"catch-up\" contributions of up to $1,000 in addition to your respective maximum contribution amount regardless of coverage level.',
      buttons: ['Dismiss']
    });
    alert.present()
  }
  movetowithdrawal(){
  this.navCtrl.push(WithdrawalPage);
  }


}
