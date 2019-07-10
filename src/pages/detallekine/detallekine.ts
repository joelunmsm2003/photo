import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

/**
 * Generated class for the DetallekinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detallekine',
  templateUrl: 'detallekine.html',
})
export class DetallekinePage {


	detallekine:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private view:ViewController) {




     this.detallekine=navParams.get('kine')

     console.log('hahahhha',this.detallekine)



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallekinePage');
  }

  closeModal(){


   
    this.view.dismiss()


}

chat(){

    this.navCtrl.push(ChatPage);
	
}






}
