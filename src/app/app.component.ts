import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoadingController } from 'ionic-angular';
// import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';
import { Storage } from '@ionic/storage';


import { HomePage } from '../pages/home/home';
import { WhatIsHsaPage } from '../pages/what-is-hsa/what-is-hsa';
import { EstimateEligibleExpensesPage } from '../pages/estimate-eligible-expenses/estimate-eligible-expenses';
import { TestingPage } from '../pages/testing/testing';
import { WalkthroughPage } from '../pages/walkthrough/walkthrough';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
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
      { title: 'testing', component: TestingPage },

    ];
    this.pages2 = {
      WhatIsHsaPage: WhatIsHsaPage,
      HomePage: HomePage,
      EstimateEligibleExpensesPage: EstimateEligibleExpensesPage,
      TestingPage: TestingPage,
    }

    //for walkthrough sliders
    this.presentLoading();

    this.platform.ready().then(() => {

      this.storage.get('introShown').then((result) => {


        if(result){
          this.rootPage = 'HomePage';
        } else {
          this.rootPage = 'WalkthroughPage';

          this.storage.set('introShown',true).then((val2)=>{})

          // this.secureStorage.set('introShown', true);
        }

        this.loader.dismiss();

      });

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
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
