import {ViewChild} from '@angular/core';
import {App, Platform, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {ListPage} from './pages/list/list';

@App({
  templateUrl: 'build/app.html',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: any;
  pages: any;

  constructor(platform: Platform) {
    
    this.initializeApp(platform);
    
    this.pages = [
      { title: 'Getting Started', component: TabsPage },
      { title: 'List', component: ListPage }
    ];
    
    this.rootPage = TabsPage;
  }
  
  initializeApp(platform){
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
