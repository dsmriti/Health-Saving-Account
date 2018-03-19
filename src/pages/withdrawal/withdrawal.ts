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
  a:number;
  b:number;
  c:number;
  value: number;
  total:number;
  error_message: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WithdrawalPage');
    this.a = parseInt(this.navParams.get('data1'));
    this.b = parseInt(this.navParams.get('data2'));
    this.c = parseInt(this.navParams.get('data3'));
    this.total = this.a + this.b + this.c;
    console.log(this.a);
    console.log(this.b);
    console.log(this.c);
  }
  openModal(characterNum) {

    let modal = this.modalCtrl.create(ExpenseModalPage, characterNum);
    modal.present();
  }
  movetorate(){
    this.navCtrl.push(RatePage);
    var estimated_value = String(this.value);
    sessionStorage.setItem("estimated_value", estimated_value);
  }

  estimate(){
    if(this.value > this.total) {
      console.log("please enter value less than"+ this.total);
      this.error_message = "please enter value less than "+ this.total;
    }

  }
}
