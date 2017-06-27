import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EulaPage } from './eula';

@NgModule({
  declarations: [
    EulaPage,
  ],
  imports: [
    IonicPageModule.forChild(EulaPage),
  ],
  exports: [
    EulaPage
  ]
})
export class EulaPageModule {}
