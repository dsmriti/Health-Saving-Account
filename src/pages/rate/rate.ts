import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarginalPage } from './../marginal/marginal';


@IonicPage()
@Component({
  selector: 'page-rate',
  templateUrl: 'rate.html',
})
export class RatePage {
  interest_rate:any;
  growth_rate: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RatePage');

  }

  movetomarginal(){
    this.navCtrl.push(MarginalPage);
  }
  public rate(selecterate) {
    this.interest_rate = String(selecterate);
    //sessionStorage.setItem("interest_rate", this.interest_rate);
    console.log(selecterate);
  }
  public growth(selectedgrowth){
    this.growth_rate = String(selectedgrowth);
    //sessionStorage.setItem("interest_rate", this.interest_rate);
    console.log(selectedgrowth);

  }

}
