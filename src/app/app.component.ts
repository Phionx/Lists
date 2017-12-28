import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  items:Good[];
  categoryItems:number[];
  categoryNames:string[];
  listItems:number[];
  listNames:string[];
  




  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage: NativeStorage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.


      this.storage.setItem('items', this.items)
      .then(
        () => console.log('Stored item!'),
        error => console.error('Error storing item', error)
      );
      this.storage.setItem('categoryItems', this.categoryItems)
      .then(
        () => console.log('Stored item!'),
        error => console.error('Error storing item', error)
      );
      this.storage.setItem('categoryNames',this.categoryNames)
      .then(
        () => console.log('Stored item!'),
        error => console.error('Error storing item', error)
      );
      this.storage.setItem('listItems', this.listItems)
      .then(
        () => console.log('Stored item!'),
        error => console.error('Error storing item', error)
      );
      this.storage.setItem('listNames', this.listNames)
      .then(
        () => console.log('Stored item!'),
        error => console.error('Error storing item', error)
      );

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  }


interface Good {
name:string,
expires:Boolean,
lifespan:number,
metricTypes: string[],
metricQuant: number[]
}

