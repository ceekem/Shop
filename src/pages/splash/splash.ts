import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

/**
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  constructor(public splashScreen: SplashScreen, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

    ionViewDidEnter() {

    this.splashScreen.hide();


      setTimeout(()=>{
        this.viewCtrl.dismiss();
      }, 4000);



  }

}
