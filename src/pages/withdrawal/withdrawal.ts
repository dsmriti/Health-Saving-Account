import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExpenseModalPage } from './../expense-modal/expense-modal';
import { ModalController } from 'ionic-angular';
import { RatePage } from './../rate/rate';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-withdrawal',
  templateUrl: 'withdrawal.html',
})
export class WithdrawalPage {

  withdrawalForm: FormGroup;
  submitAttempt:boolean=false;


  a:number;
  b:number;
  c:number;
  value: number;
  total:number;
  error_message: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public modalCtrl: ModalController) {

    this.withdrawalForm = formBuilder.group({
      e_a:['', Validators.compose([Validators.maxLength(20),Validators.required])],
    });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WithdrawalPage');
    this.a = parseInt(this.navParams.get('data1'));
    this.b = parseInt(this.navParams.get('data2'));
    this.c = parseInt(this.navParams.get('data3'));
    this.total = this.a + this.b + this.c;
    console.log(this.a);
    console.log(this.b);
    console.log(this.c);
  }
  openModal(characterNum) {
    let modal = this.modalCtrl.create(ExpenseModalPage, characterNum);
    modal.present();
  }
  movetorate(){
    this.submitAttempt = true;
    if(this.withdrawalForm.valid){

      if(this.value >= this.total)
        this.error_message = "Please enter value less than "+ this.total;
      else{
        this.error_message=""
        this.navCtrl.push(RatePage);
        var estimated_value = String(this.value);
        sessionStorage.setItem("estimated_value", estimated_value);
      }


    }



  }

  estimate(){
    if(this.value > this.total) {
      console.log("Please enter value less than "+ this.total);
      this.error_message = "Please enter value less than "+ this.total;
    }
  }
}
