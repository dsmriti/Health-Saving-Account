import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CoveragePage } from './../coverage/coverage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
data:''
  constructor(public navCtrl: NavController) {

  }
  movetocoverage(){
  this.navCtrl.push(CoveragePage);
  }


}
