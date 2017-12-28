import { Component } from '@angular/core';

import { AddPage } from '../add/add';
import { ItemsPage } from '../items/items';
import { ListPage } from '../list/list';
import { UpdatePage } from '../update/update';
import { ManagePage } from '../manage/manage';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


  tab1Root = AddPage;
  tab2Root = ItemsPage;
  tab3Root = ListPage;
  tab4Root = UpdatePage;
  tab5Root = ManagePage;
  tab6Root = AboutPage;
  constructor() {

  }
}
