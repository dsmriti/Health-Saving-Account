import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { DetermineTaxRatePage } from './../determine-tax-rate/determine-tax-rate';
import { ResultPage } from './../result/result';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-marginal',
  templateUrl: 'marginal.html',
})
export class MarginalPage {

  marginalForm: FormGroup;
  submitAttempt:boolean=false;

  tax_rate:any;
  tax_rate_options:any=[];
  selected_tax_rate:string="";
  tax_rate_select:any;
  growthYears: any;
  annualContri: any;
  

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public modalCtrl: ModalController,
			  private alertCtrl: AlertController) {


    this.marginalForm = formBuilder.group({
      m_t:['', Validators.compose([Validators.required])],
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarginalPage');


    this.tax_rate = JSON.parse(localStorage.getItem("Tax_Brackets"));
    for(var i=0; i<this.tax_rate.length; i++)
      this.tax_rate_options.push(this.tax_rate[i]["Tax Rate"])
    this.selected_tax_rate = sessionStorage.getItem("tax_rate");
    console.log("Got From Session Storage " + this.selected_tax_rate);
    this.tax_rate_select = this.selected_tax_rate;

  }

  onSelectTaxoOptions(selectedoption){
    this.selected_tax_rate = String(selectedoption);
    sessionStorage.setItem("tax_rate", this.selected_tax_rate);
  }
  openModal(characterNum) {

    let modal = this.modalCtrl.create(DetermineTaxRatePage, characterNum);
    modal.present();
    modal.onDidDismiss(data => {
      console.log("Data =>", data);
      this.tax_rate_select = data;
      this.selected_tax_rate = data;
    })
  }
  movetoresult(){
  if(this.tax_rate_select==null)
  {
 this.presentAlert("Please select your Marginal Tax Rate.");
  }
  
	var HSABal = sessionStorage.getItem('current_hsa_input');
	this.growthYears = sessionStorage.getItem('growth_rate');
	let annualWith:any = sessionStorage.getItem('estimated_value');
	var compCont = sessionStorage.getItem('company_contribution');
	var yourcont =  sessionStorage.getItem('annual_contri');
	var annualContri = parseInt(compCont) + parseInt(yourcont);
	
	
	let accBal = (annualContri * this.growthYears) + parseInt(HSABal);
	let expensesWithdraw = annualWith * this.growthYears;
	if(accBal >= expensesWithdraw){
	
	this.submitAttempt = true;
    if(this.marginalForm.valid)
	{
      this.navCtrl.push(ResultPage);
	 }

  }
	
	else
	{
	 this.presentAlert("Please re-estimate your annual withdrawals or decrease the number of years modeled. Your HSA balance would reach $0 after 1 year(s) based on your current selections.");
	}
	
	   }

 presentAlert(data) {
  let alert = this.alertCtrl.create({
    title: 'Error',
    subTitle: data,
    buttons: ['Ok']
  });
  alert.present();
}
   
}
