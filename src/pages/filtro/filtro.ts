import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the FiltroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filtro',
  templateUrl: 'filtro.html',
})
export class FiltroPage {

	edad:any=['18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']

	distrito:any=['Surco','San Juan de Miraflores','Lince','San Martin de Porras','Los Olivos','Miraflores','Surquillo','Chorrillos','Villa María del Triunfo']

  paginas:any=['Skoka','Photokines','Locanto']

	precio:any=['100','200','300','400']

	_edad:any;
	_distrito:any;
	_precio:any;
  _origen:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private view:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FiltroPage');
  }


    closeModal(){


    let data={'edad':this._edad,'distrito':this._distrito,'precio':this._precio,'origen':this._origen}
   
    this.view.dismiss(data)


}



 checkAdult(age) {
  return age >= 18;
}



}
