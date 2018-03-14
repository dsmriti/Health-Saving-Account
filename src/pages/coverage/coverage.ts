///<reference path="../../providers/sharedata/sharedata.ts"/>
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContributePage } from './../contribute/contribute';
import { SharedataProvider } from '../../providers/sharedata/sharedata';
import {HttpClient} from "@angular/common/http";

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
    await this.delay(1000);
    console.log("data collected");
    this.serviceData = this.shareDataProvider.gettaxrate();
    console.log(this.serviceData);
  }

  public getoverhallcoverage(data) {
    var result = 0;
    for(var i= 0; i< data.length; i++) result+=data[i];
    return result;
  }

  public delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
movetocontri(){
  this.navCtrl.push(ContributePage);
  }

  display(m) {
    this.clickMessage = m;
  }
}
