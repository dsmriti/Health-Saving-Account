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
  a:any;
  b:any;
  c:any;
  d:any;
  e:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RatePage');
   
  }

  movetomarginal(){
    this.navCtrl.push(MarginalPage);
  }
  
  public rate(selectedrate) {
    this.interest_rate = String(selectedrate);
    sessionStorage.setItem("interest_rate", this.interest_rate);
    console.log(selectedrate);
  }
  public growth(selectedgrowth){
    this.growth_rate = String(selectedgrowth);
    sessionStorage.setItem("growth_rate", this.growth_rate);
    console.log(selectedgrowth);
  }
 

}
