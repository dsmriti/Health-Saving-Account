import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContributePage } from './../contribute/contribute';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoveragePage');
  }
  

movetocontri(){
  this.navCtrl.push(ContributePage);
  }
  export class ClickMeComponent {
  clickMessage = '';
 
  display() {
    this.clickMessage = 'You are my hero!';
  }
}
