import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CoveragePage } from '../pages/coverage/coverage';
import { ContributePage } from '../pages/contribute/contribute';
import { WithdrawalPage } from '../pages/withdrawal/withdrawal';
import { WhatIsHsaPage } from '../pages/what-is-hsa/what-is-hsa';
import { EstimateEligibleExpensesPage } from '../pages/estimate-eligible-expenses/estimate-eligible-expenses';
import { ContriModalPage } from '../pages/contri-modal/contri-modal';
import { ExpenseModalPage } from '../pages/expense-modal/expense-modal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CoveragePage,
    ContributePage,
    WithdrawalPage,
    WhatIsHsaPage,
    EstimateEligibleExpensesPage,
    ContriModalPage,
    ExpenseModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CoveragePage,
    ContributePage,
    WithdrawalPage,
    WhatIsHsaPage,
    EstimateEligibleExpensesPage,
    ContriModalPage,
    ExpenseModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
