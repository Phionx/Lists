import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompiledListPage } from './compiled-list';

@NgModule({
  declarations: [
    CompiledListPage,
  ],
  imports: [
    IonicPageModule.forChild(CompiledListPage),
  ],
})
export class CompiledListPageModule {}
