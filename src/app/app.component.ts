import { Component, ViewChild} from '@angular/core';
import { Platform, Nav, MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { BackgroundMode } from '@ionic-native/background-mode';
import {AlarmPage} from  '../pages/alarm/alarm';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV') nav: Nav;
  public rootPage: any;
  public pages: Array<{ titulo: string, component: any, icon: string }>;

  constructor(
    platform:     Platform,
    statusBar:    StatusBar,
    splashScreen: SplashScreen,
    private menuCtrl : MenuController,
    backgroundMode: BackgroundMode) {

    this.rootPage = HomePage;
    this.pages = [
      {titulo: 'Inicio',          component: HomePage,   icon: 'home'},
      {titulo: 'Configurar Alarma', component: AlarmPage, icon: 'md-alarm'}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      backgroundMode.enable();
    });
  }

  goToPage(page){
    this.nav.setRoot(page);
  }

}