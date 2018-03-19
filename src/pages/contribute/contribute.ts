import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { WithdrawalPage } from './../withdrawal/withdrawal';
import { ContriModalPage } from './../contri-modal/contri-modal';


@IonicPage()
@Component({
  selector: 'page-contribute',
  templateUrl: 'contribute.html',
})
export class ContributePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  company_contri: any;
  current_hsa : number;
  annual_contri: number;
  companyContri:any;
  above_55:number;
  under_55:number;
  annual_contri_value:number=0;
  ionViewDidLoad() {

    console.log('ionViewDidLoad ContributePage');
    let coverageType: any;
    let age: any;
    let tiersSeedMoney: Object;
    coverageType = sessionStorage.getItem("coverageType");
    age = sessionStorage.getItem("age");
    tiersSeedMoney = this.companyContribution(coverageType,age);
    console.log(tiersSeedMoney);
    this.company_contri = this.companyContribution(coverageType, age);
    console.log(this.above_55);
    console.log(this.under_55);
     }

  openModal(characterNum){
    let modal = this.modalCtrl.create(ContriModalPage, characterNum);
    modal.present();
  }

  movetowithdrawal(){
    this.navCtrl.push(WithdrawalPage,{
      data1:this.current_hsa,
      data2:this.company_contri,
      data3:this.annual_contri_value

    });
  }

  checkanualcontribution() {
    console.log(this.annual_contri_value);
    if (this.annual_contri_value > this.annual_contri) {
      console.log("Value Excceded");
    }
  }

  getvaluesfromjson() {

  }

  companyContribution(yourCoverageType, yourAge){

    let Tiers_SeedMoney_Limits = JSON.parse(localStorage.getItem("Tiers_SeedMoney_Limits"));
    let irsCatchup: number;
    let companyContri = Tiers_SeedMoney_Limits[yourCoverageType].input_cocontribSQL;
    let irsLimit = Tiers_SeedMoney_Limits[yourCoverageType].input_IRSreglimitSQL;
    irsCatchup = Tiers_SeedMoney_Limits[yourCoverageType].input_IRScatchupSQL;
    var result;
    if(yourAge == 1){
      this.annual_contri = companyContri + irsLimit + irsCatchup;
    }else{
      irsCatchup = 0;
      this.annual_contri = companyContri + irsLimit;
    }
     return companyContri;
  }

}
