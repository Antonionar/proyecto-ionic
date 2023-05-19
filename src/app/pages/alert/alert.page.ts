import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
// import { type } from 'os';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor( private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'this is an alert message.',
      buttons: ['ok']
    });

    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'subtitle',
      message: 'this is an alert message.',
      buttons: [
        {
        text: 'ok',
        handler: () => {
          console.log('click en ok!')
        }
      },

        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'rojo'
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'prompt',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'placeholder 1'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'Hello',
          placeholder: 'placeholder 2'
        },
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'placeholder 3'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        {
          name: 'name4',
          type: 'date',
          min: '2015-03-01',
          max: '2025-01-12'
        },
        {
          name: 'name5',
          type: 'date',
          min: '2015-03-01',
          max: '2025-01-12'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name:'name7',
          type: 'number',
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Advanced Atributes',
          cssClass: 'specialClass',
          attributes: {
            maxlenfth: 4,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('confirm cancel');
          }
        },{
          text: 'ok',
          handler: ( data:any ) => {
            console.log()
          }
        }
      ]
    });
    await alert.present();

  }

}






