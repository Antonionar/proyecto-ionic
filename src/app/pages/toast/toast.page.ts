import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {


  constructor( private toastCtrl: ToastController) { }

  ngOnInit() {
  }










  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'your setting have benn saved.',
      duration: 2000,
    });

     toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastCtrl.create({
      header: 'toast header',
      message: 'Clicknto Close',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'favorite',
          handler: () => {
            console.log('favorite clickend');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () =>  {
            console.log('Cancel clicked')
          }
        }
      ]
    });
    toast.present();
  }

}

