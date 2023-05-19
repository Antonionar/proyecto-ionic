import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { componente } from './interfaces/interfaces';
import { MenuController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes: Observable<componente[]> | undefined;


  constructor( private menuCtrl: MenuController,
    private dataService: DataService ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }









}
