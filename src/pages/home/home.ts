import { Component } from '@angular/core';
import { NavController, Platform, MenuController, LoadingController } from 'ionic-angular';

import { Message } from '../../../node_modules/@angular/compiler/src/i18n/i18n_ast';
import { LocalNotifications } from '@ionic-native/local-notifications';
//PLUGINS
import { SocialSharing } from '@ionic-native/social-sharing';
//CONSTANTES
import { IMAGENES } from '../images';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  message: string = null;
  file: string = null;
  link: string = null;
  subject: string = null;

  current_image;

  constructor(
    public navCtrl: NavController,
    private socialSharing: SocialSharing,
    private menuCtrl: MenuController,
    public cargandoCtrl: LoadingController) {

    this.current_image = IMAGENES[3];
  }


  share(image) {
    let url = 'www/' + image;
    let loading = this.cargandoCtrl.create({
      content: 'Cargando'
    });
    this.socialSharing.share('message', 'subject', url, null)
    .then(() => { loading.dismiss();

    }).catch(() => {loading.dismiss();

    });

  }

  random() {
    let random = Math.floor(Math.random() * IMAGENES.length);
    console.log(random);
    this.current_image = IMAGENES[random];

  }   


}
