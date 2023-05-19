import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor( private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  // MostrarLoading() {
  //   this.presentLoading();

  }

  // async presentLoading() {
  //   const loading = await this.loadingCtrl.create({
  //     message: 'cargando...',
  //   });

  //   await loading.present();
//   }

// }
