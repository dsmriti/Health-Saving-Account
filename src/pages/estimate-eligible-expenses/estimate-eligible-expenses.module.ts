import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstimateEligibleExpensesPage } from './estimate-eligible-expenses';

@NgModule({
  declarations: [
    EstimateEligibleExpensesPage,
  ],
  imports: [
    IonicPageModule.forChild(EstimateEligibleExpensesPage),
  ],
})
export class EstimateEligibleExpensesPageModule {}
