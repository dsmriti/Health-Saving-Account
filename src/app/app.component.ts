import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { WhatIsHsaPage } from '../pages/what-is-hsa/what-is-hsa';
import { EstimateEligibleExpensesPage } from '../pages/estimate-eligible-expenses/estimate-eligible-expenses';
import { WalkthroughPage } from '../pages/walkthrough/walkthrough';
import * as XLSX from "xlsx";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any ;
  loader: any;

  pages: Array<{title: string, component: any}>;
  pages2: any;
  constructor(public platform: Platform,public storage:Storage, public statusBar: StatusBar, public splashScreen: SplashScreen, public loadingCtrl: LoadingController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'What is HSA', component: WhatIsHsaPage },
      { title: 'Estimate Eligible Expenses', component: EstimateEligibleExpensesPage },
     ];
    this.pages2 = {
      WhatIsHsaPage: WhatIsHsaPage,
      HomePage: HomePage,
      EstimateEligibleExpensesPage: EstimateEligibleExpensesPage,
    };

    //for walkthrough sliders
    this.presentLoading();

    this.platform.ready().then(() => {

      // this.storage.set('introShown',false).then((vall)=>{

      this.storage.get('introShown').then((result) => {
        if(result){
          this.rootPage = HomePage;
        } else {
          this.rootPage = WalkthroughPage;

          this.storage.set('introShown',true).then((val2)=>{})
        }

        this.loader.dismiss();

      });
    // })
 });
}
  presentLoading() {
  this.loader = this.loadingCtrl.create({
      content: "Loading..."
    });
    this.loader.present();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.XLStoJSON();
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

    public XLStoJSON() {
    return new Promise((resolve, reject) => {
      var url = 'assets/hsa.xlsx';
      var oReq = new XMLHttpRequest();
      var workbook: any;
      oReq.open("GET", url, true);
      oReq.responseType = "arraybuffer";
      oReq.onload = (e) => {
        if (oReq.status >= 200 && oReq.status < 300) {
          var arraybuffer = oReq.response;
          var data = new Uint8Array(arraybuffer);
          var arr = new Array();
          for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
          var bstr = arr.join("");
          workbook = XLSX.read(bstr, {type: "binary"});
          for(var j= 0; j < workbook.SheetNames.length; j++) {
            var worksheetname = workbook.SheetNames[j];
            var worksheet = workbook.Sheets[worksheetname];
            var json = XLSX.utils.sheet_to_json(worksheet, {raw: true});
            localStorage.setItem(worksheetname, JSON.stringify(json));
          }

          resolve('Finished generating JSON');
        } else {
          reject('XMLHttpRequest failed; error code:' + oReq.statusText);
        }
      };
      oReq.send();
    });
  }
}