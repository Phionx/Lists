import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModifyItemStatsPage } from './modify-item-stats';

@NgModule({
  declarations: [
    ModifyItemStatsPage,
  ],
  imports: [
    IonicPageModule.forChild(ModifyItemStatsPage),
  ],
})
export class ModifyItemStatsPageModule {}
