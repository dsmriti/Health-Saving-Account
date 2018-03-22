import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DetermineTaxRatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-determine-tax-rate',
  templateUrl: 'determine-tax-rate.html',
})
export class DetermineTaxRatePage {

  clickMessage:any= 'Single';
  tax_rate:any;
  tax_rate_option:any=[];
  selected_tax_rate:string="";
  tax_rate_select:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetermineTaxRatePage');
    this.tax_rate = JSON.parse(localStorage.getItem("Tax_Brackets"));
    sessionStorage.removeItem("tax_rate");
  }
  closeModal() {
    this.viewCtrl.dismiss(this.selected_tax_rate);
  }
  onSelectTaxoOptions(selectedoption) {
    this.selected_tax_rate = String(selectedoption);
    sessionStorage.setItem("tax_rate", this.selected_tax_rate);
    console.log(selectedoption);
  }
  display(m) {
    this.tax_rate_option = [];
    for (var i = 0; i < this.tax_rate.length; i++) {
      this.tax_rate_option.push({
        "selection": this.tax_rate[i][m], "tax_rate_selected": this.tax_rate[i]["Tax Rate"]
      });
    }
    console.log(this.tax_rate_option);
    this.clickMessage = m;
  }
}
