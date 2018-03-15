
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContributePage } from './../contribute/contribute';
import { SharedataProvider } from '../../providers/sharedata/sharedata';



/**
 * Generated class for the CoveragePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coverage',
  templateUrl: 'coverage.html',
})
export class CoveragePage {

  clickMessage:string = '';
  public serviceData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public shareDataProvider: SharedataProvider) {

  }

  async ionViewDidLoad() {




  }

  public getoverhallcoverage(data) {
    var result = 0;
    for(var i= 0; i< data.length; i++) result+=data[i];
    return result;
  }

  movetocontri(){
    this.navCtrl.push(ContributePage);
  }

  display(m) {

    let covType:object;
    let agetype:object;

    covType = {
      "0": "You Only",
      "1": "You + Spouse",
      "2": "You + Child(ren)",
      "3": "You + Family"
    };

    agetype = {
      "0": "Under 55",
      "1": "55 and Above 55"
    };

    sessionStorage.setItem("coverageType", m);
    this.clickMessage = covType[m];
  }

  age(m){
    sessionStorage.setItem("age", m);
  }

}
