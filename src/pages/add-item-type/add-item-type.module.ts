import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddItemTypePage } from './add-item-type';

@NgModule({
  declarations: [
    AddItemTypePage,
  ],
  imports: [
    IonicPageModule.forChild(AddItemTypePage),
  ],
})
export class AddItemTypePageModule {}
