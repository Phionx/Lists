import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {


constructor(public navCtrl: NavController, public navParams: NavParams, private storage: NativeStorage) {

  
  this.storage.getItem('items').then((val) => {
    items:Good[] = val;
    console.log('It worked 1.');
  });
  this.storage.getItem('categoryNames').then((val) => {
    categoryNames:string[] = val;
    console.log('It worked 2.');
  });
  this.storage.getItem('categoryItems').then((val) => {
    categoryItems:number[] = val;
    console.log('It worked 3.');
  });
  this.storage.getItem('listItems').then((val) => {
    console.log('It worked 4.');
  });
  this,storage.getItem('listNames').then((val) => {
    console.log('It worked 5.');
  });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
    }
}


interface Good {
  name:string,
  expires:Boolean,
  lifespan:number,
  metricTypes:string[],
  metricQuant:number[]
  }
     
