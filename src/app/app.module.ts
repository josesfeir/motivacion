import { BrowserModule } from '@angular/platform-browser';
import { BackgroundMode } from '@ionic-native/background-mode';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SocialSharing } from '@ionic-native/social-sharing';

import {Pagina2Page, Pagina3Page, AjustesPage,AlarmPage} from "../pages/index.paginas";

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyCHKyppNL6xYeYUkGdZ8-zLV7SBqYByQxA",
  authDomain: "motivacion-001.firebaseapp.com",
  databaseURL: "https://motivacion-001.firebaseio.com",
  projectId: "motivacion-001",
  storageBucket: "motivacion-001.appspot.com",
  messagingSenderId: "209958150499"
};

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage, Pagina2Page, 
    Pagina3Page, 
    AjustesPage,
    AlarmPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {backButtonText: 'Atrás'}),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Pagina2Page, 
    Pagina3Page, 
    AjustesPage,
    AlarmPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    LocalNotifications,
    AngularFireDatabase,
    BackgroundMode,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
