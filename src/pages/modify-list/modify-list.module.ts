import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModifyListPage } from './modify-list';

@NgModule({
  declarations: [
    ModifyListPage,
  ],
  imports: [
    IonicPageModule.forChild(ModifyListPage),
  ],
})
export class ModifyListPageModule {}
