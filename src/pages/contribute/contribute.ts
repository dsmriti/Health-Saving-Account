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
    this.navCtrl.push(WithdrawalPage);
  }

  companyContribution(yourCoverageType, yourAge){
  
    let Tiers_SeedMoney_Limits = JSON.parse(localStorage.getItem("Tiers_SeedMoney_Limits"));
    let irsCatchup: number;
    let companyContri = Tiers_SeedMoney_Limits[yourCoverageType].input_cocontribSQL;
    let irsLimit = Tiers_SeedMoney_Limits[yourCoverageType].input_IRSreglimitSQL;
    
    if(yourAge == 1){
        irsCatchup = Tiers_SeedMoney_Limits[yourCoverageType].input_IRScatchupSQL;
        this.above_55 = companyContri + irsLimit + irsCatchup;
        //return this.above_55;
       
    }else{
        irsCatchup = 0;
        this.under_55 = companyContri + irsLimit;
       // return this.under_55;
    }
    
   //return {"company_contribution": companyContri, "irsLimit": irsLimit, "irsCatchup": irsCatchup};
     return companyContri;
    //return above_55;
    //return under_55;
    
   
  }
  
}
