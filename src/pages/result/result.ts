import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewGraphPage } from './../view-graph/view-graph';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Injectable()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  outputs:Object;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
   this.getdata();
  }
 movetograph(){
    this.navCtrl.push(ViewGraphPage,{
      data:this.outputs
      });
  }

  getdata(){
    var input_json = JSON.stringify({
      input_age:sessionStorage.getItem("age"),
      input_covtierSQL:sessionStorage.getItem("coverageType"),
      input_curbal:sessionStorage.getItem("current_hsa_input"),
      input_cocontribSQL:sessionStorage.getItem("company_contribution"),
      input_eecontrib:sessionStorage.getItem("annual_contri"),
      input_withdrawal:sessionStorage.getItem("estimated_value"),
      input_interest:sessionStorage.getItem("interest_rate"),
      input_years:sessionStorage.getItem("growth_rate"),
      input_taxrateSQL:sessionStorage.getItem("tax_rate"),
      input_IRScatchupSQL:sessionStorage.getItem("irsCatchup_input"),
      input_IRSreglimitSQL:sessionStorage.getItem("irsLimit_input"),
    })
    

    var API_URL = "https://beplb02.poolt.hewitt.com/dsi0101/calculator";
    var input = "Site=HSA_Modeler_Base_API_v6&Data="+encodeURIComponent(input_json);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });

    this.http.post(API_URL, input, options).map(res => res.json()).subscribe(data => {
      this.outputs = data;
      console.log(data);
  });
}
}
