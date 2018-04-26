import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContributePage } from './../contribute/contribute';
import { SharedataProvider } from '../../providers/sharedata/sharedata';

@IonicPage()
@Component({
  selector: 'page-coverage',
  templateUrl: 'coverage.html',
})
export class CoveragePage {

  clickMessage:string = 'You Only';
  clickMessageage:string = 'UNDER 55';

  public serviceData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public shareDataProvider: SharedataProvider) {}

  async ionViewDidLoad() {

    sessionStorage.setItem("age",'0');
    sessionStorage.setItem("coverageType", '0');



  }

  private buttonColor0: string = "light";
  private buttonColor1: string = "";

  private coveragelvl0: string = "light";
  private coveragelvl1: string = "";
  private coveragelvl2: string = "";
  private coveragelvl3: string = "";

  // public getoverhallcoverage(data) {
  //   var result = 0;
  //   for(var i= 0; i< data.length; i++) result+=data[i];
  //   return result;
  // }
  movetocontri(){
    this.navCtrl.push(ContributePage);
  }

  display(m) {


    if(m==0){
      this.coveragelvl0 = "light";
      this.coveragelvl1 = "";
      this.coveragelvl2 = "";
      this.coveragelvl3 = "";
    }
    if(m==1){
      this.coveragelvl0 = "";
      this.coveragelvl1 = "light";
      this.coveragelvl2 = "";
      this.coveragelvl3 = "";
    }
    if(m==2){
      this.coveragelvl0 = "";
      this.coveragelvl1 = "";
      this.coveragelvl2 = "light";
      this.coveragelvl3 = "";
    }
    if(m==3){
      this.coveragelvl0 = "";
      this.coveragelvl1 = "";
      this.coveragelvl2 = "";
      this.coveragelvl3 = "light";
    }

    let covType:object;

    covType = {
      "0": "You Only",
      "1": "You + Spouse",
      "2": "You + Child(ren)",
      "3": "You + Family"
    };



   sessionStorage.setItem("coverageType", m);
    this.clickMessage = covType[m];
  }

  age(m){
    if(m==0){
      this.buttonColor0 = "light";
      this.buttonColor1 = "";
    }
    if(m==1){
      this.buttonColor1 = "light";
      this.buttonColor0 = "";
    }

    let agetype:object;

    agetype = {
      "0": "Under 55",
      "1": "55 and Above 55"
    };

    sessionStorage.setItem("age", m);
    this.clickMessageage= agetype[m];
  }
}
