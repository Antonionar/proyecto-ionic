import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() nombre: string | undefined;
  @Input() pais: string | undefined;

  constructor( private modaCtrl: ModalController) { }

  ngOnInit() {
  }

salirSinArgumentos() {
  this.modaCtrl.dismiss();
}


salirConArgumentos() {
  this.modaCtrl.dismiss({
    nombre: 'felipe',
    pais: 'españa'
  })

  }


}
