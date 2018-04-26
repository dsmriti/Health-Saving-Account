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
   private deter5: string = "light";
  private deter6: string = "";
  private deter7: string = "";
  private deter8: string = "";
  closeModal() {
    this.viewCtrl.dismiss(this.selected_tax_rate);
  }
  onSelectTaxoOptions(selectedoption) {
    this.selected_tax_rate = String(selectedoption);
    sessionStorage.setItem("tax_rate", this.selected_tax_rate);
    console.log(selectedoption);
  }
  determine(n) {


    if(n==5){
      this.deter5 = "light";
      this.deter6 = "";
      this.deter7 = "";
      this.deter8 = "";
    }
    if(n==6){
      this.deter5 = "";
      this.deter6 = "light";
      this.deter7 = "";
      this.deter8 = "";
    }
    if(n==7){
      this.deter5 = "";
      this.deter6 = "";
      this.deter7 = "light";
      this.deter8 = "";
    }
    if(n==8){
      this.deter5 = "";
      this.deter6 = "";
      this.deter7 = "";
      this.deter8 = "light";
    }
    let deterType:object;

   deterType = {
      "5": "Single",
      "6": "You + Spouse",
      "7": "You + Child(ren)",
      "8": "You + Family"
    };
    
    sessionStorage.setItem("deterType", n);
    this.clickMessage = deterType[n];
  }
  display(m) {
    this.tax_rate_option = [];
    for (var i = 0; i < this.tax_rate.length; i++) {
      this.tax_rate_option.push({
        "selection": this.tax_rate[i][m], "tax_rate_selected": this.tax_rate[i]["Tax Rate"] + "%"
      });
    }
    console.log(this.tax_rate_option);
    this.clickMessage = m;
  }
}
