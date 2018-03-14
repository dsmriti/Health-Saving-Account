import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CoveragePage } from '../pages/coverage/coverage';
import { ContributePage } from '../pages/contribute/contribute';
import { WithdrawalPage } from '../pages/withdrawal/withdrawal';
import { WhatIsHsaPage } from '../pages/what-is-hsa/what-is-hsa';
import { EstimateEligibleExpensesPage } from '../pages/estimate-eligible-expenses/estimate-eligible-expenses';
import { ContriModalPage } from '../pages/contri-modal/contri-modal';
import { ExpenseModalPage } from '../pages/expense-modal/expense-modal';
import { RatePage } from '../pages/rate/rate';
import { MarginalPage } from '../pages/marginal/marginal';
import { DetermineTaxRatePage } from '../pages/determine-tax-rate/determine-tax-rate';
import { ResultPage } from '../pages/result/result';
import { TestingPage } from '../pages/testing/testing';
import { ViewGraphPage } from '../pages/view-graph/view-graph';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { File } from '@ionic-native/file';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SharedataProvider } from '../providers/sharedata/sharedata';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CoveragePage,
    ContributePage,
    WithdrawalPage,
    WhatIsHsaPage,
    EstimateEligibleExpensesPage,
    ContriModalPage,
    ExpenseModalPage,
    RatePage,
    MarginalPage,
    DetermineTaxRatePage,
    ResultPage,
    ViewGraphPage,
    TestingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartsModule,
    CommonModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CoveragePage,
    ContributePage,
    WithdrawalPage,
    WhatIsHsaPage,
    EstimateEligibleExpensesPage,
    ContriModalPage,
    ExpenseModalPage,
    RatePage,
    MarginalPage,
    DetermineTaxRatePage,
    ResultPage,
    ViewGraphPage,
    TestingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SharedataProvider
  ]
})
export class AppModule {
}
