import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoveragePage } from './coverage';

@NgModule({
  declarations: [
    CoveragePage,
  ],
  imports: [
    IonicPageModule.forChild(CoveragePage),
  ],
})
export class CoveragePageModule {}
