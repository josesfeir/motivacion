import { Component } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import * as moment from 'moment';

@Component({
  selector: 'page-alarm',
  templateUrl: 'alarm.html'
})
export class AlarmPage { 
  notifyTime: any;
  notifications: any[] = [];
  days: any[];
  chosenHours: number;
  chosenMinutes: number;

  constructor( public navCtrl: NavController, 
    public platform: Platform, 
    public alertCtrl: AlertController, 
    public localNotifications: LocalNotifications){

      this.notifyTime = moment(new Date()).format();
 
        this.chosenHours = new Date().getHours();
        this.chosenMinutes = new Date().getMinutes();
 
        this.days = [
            {title: 'Lunes', dayCode: 1, checked: false},
            {title: 'Martes', dayCode: 2, checked: false},
            {title: 'Miércoles', dayCode: 3, checked: false},
            {title: 'Jueves', dayCode: 4, checked: false},
            {title: 'Viernes', dayCode: 5, checked: false},
            {title: 'Sábado', dayCode: 6, checked: false},
            {title: 'Domingo', dayCode: 0, checked: false}
        ];
 
    }
    ionViewDidLoad(){ 
      this.platform.ready().then(() =>{
        console.log("-----------------in view did load-------------------");
        this.localNotifications.hasPermission().then(function(granted){
          if (!granted){
            this.localNotifications.registerPermission();
          }
        })
      });
    }
    
    timeChange(time){
      this.chosenHours = time.hour;
      this.chosenMinutes = time.minute;
  }
 
    addNotifications(){
      let currentDate = new Date();
      let currentDay = currentDate.getDay(); // Sunday = 0, Monday = 1, etc.
      for(let day of this.days){
 
        if(day.checked){
 
            let firstNotificationTime = new Date();
            let dayDifference = day.dayCode - currentDay;
 
            if(dayDifference < 0){
                dayDifference = dayDifference + 7; // for cases where the day is in the following week
            }
 
            firstNotificationTime.setHours(firstNotificationTime.getHours() + (24 * (dayDifference)));
            firstNotificationTime.setHours(this.chosenHours);
            firstNotificationTime.setMinutes(this.chosenMinutes);
 
            let notification = {
                id: day.dayCode,
                title: 'Hey!',
                text: '¡Mira tu Frase Motivadora!',
                trigger : {at: firstNotificationTime},
                every: "week"
            };
 
            this.notifications.push(notification);
 
        }
 
    }
 
    console.log("Notifications to be scheduled: ", this.notifications);
 
    if(this.platform.is('cordova')){
 
        // Cancel any existing notifications
        this.localNotifications.cancelAll().then(() => {
 
            // Schedule the new notifications
            this.localNotifications.schedule(this.notifications);
 
            this.notifications = [];
 
            let alert = this.alertCtrl.create({
                title: '¡Listo!',
                buttons: ['Ok']
            });
 
            alert.present();
 
        });
 
    }
 
    } 
    cancelAll(){
      this.localNotifications.cancelAll();
 
    let alert = this.alertCtrl.create({
        title: 'Alerta cancelada :(',
        buttons: ['Ok']
    });
 
    alert.present();
 
    }
    

}


