import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor( private modaCtrl: ModalController) { }

  ngOnInit() {
  }

  async mostarModal() {

    const modal = await this.modaCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'fernando',
        pais: 'Costa Rica'
      }
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();

    console.log(data);

  }

}
