import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExpenseModalPage } from './../expense-modal/expense-modal';
import { ModalController } from 'ionic-angular';
import { RatePage } from './../rate/rate';


/**
 * Generated class for the WithdrawalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-withdrawal',
  templateUrl: 'withdrawal.html',
})
export class WithdrawalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WithdrawalPage');
  }
  openModal(characterNum) {

    let modal = this.modalCtrl.create(ExpenseModalPage, characterNum);
    modal.present();
  }
  movetorate(){
    this.navCtrl.push(RatePage);
  }

}
