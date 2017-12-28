import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModifyListsPage } from './modify-lists';

@NgModule({
  declarations: [
    ModifyListsPage,
  ],
  imports: [
    IonicPageModule.forChild(ModifyListsPage),
  ],
})
export class ModifyListsPageModule {}
