import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpenseModalPage } from './expense-modal';

@NgModule({
  declarations: [
    ExpenseModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpenseModalPage),
  ],
})
export class ExpenseModalPageModule {}
