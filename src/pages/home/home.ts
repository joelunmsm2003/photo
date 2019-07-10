import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { Http,RequestOptions, Headers } from '@angular/http';
import { DetallekinePage } from '../detallekine/detallekine';
import { FiltroPage } from '../filtro/filtro';
import { AnuncioPage } from '../anuncio/anuncio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


kines:any;
searchTerm:any;
kines_respaldo:any;

  constructor(public modalCtrl: ModalController,private http: Http,public navCtrl: NavController) {




  	this.http.get('http://142.93.202.255:2000/kines')
    .subscribe(
      data => {


      	console.log(JSON.parse(data['_body']))

      	this.kines = JSON.parse(data['_body'])
       

      	this.kines_respaldo= JSON.parse(data['_body'])


      })

  }


    detalle(data) {


   let profileModal = this.modalCtrl.create(DetallekinePage, {'kine':data});
   profileModal.onDidDismiss(data => {


       //


     

   });
   profileModal.present();



 }


 filtro(){


 	

 	  let profileModal = this.modalCtrl.create(FiltroPage, {});
   profileModal.onDidDismiss(data => {

   	let total = []





   	   	for (let i in data['distrito']){

   		let kine= this.kines_respaldo.filter(item => 

    	JSON.stringify(item.distrito).toLowerCase().indexOf(data['distrito'][i].toLowerCase()) !== -1

    	);

    	total =total.concat(kine)

   	}

   	   	for (let i in data['edad']){

   		let kine= this.kines_respaldo.filter(item => 

    	JSON.stringify(item.edad).toLowerCase().indexOf(data['edad'][i].toLowerCase()) !== -1

    	);

    	total =total.concat(kine)

   	}


   	   	for (let i in data['precio']){

   		let kine= this.kines_respaldo.filter(item => 

    	JSON.stringify(item.edad).toLowerCase().indexOf(data['precio'][i].toLowerCase()) !== -1

    	);

    	total =total.concat(kine)

   	}

          for (let i in data['origen']){

       let kine= this.kines_respaldo.filter(item => 

      JSON.stringify(item.origen).toLowerCase().indexOf(data['origen'][i].toLowerCase()) !== -1

      );

      total =total.concat(kine)

     }




   	this.kines =total

   	console.log(this.kines)


   });
   profileModal.present();



 }


   


 publica(){


 	

 	  let profileModal = this.modalCtrl.create(AnuncioPage, {});
   profileModal.onDidDismiss(data => {


     
    this.http.get('http://142.93.202.255:2000/kines')
    .subscribe(
      data => {


        console.log(JSON.parse(data['_body']))

        this.kines = JSON.parse(data['_body'])

        this.kines_respaldo= JSON.parse(data['_body'])


      })


   });
   profileModal.present();

}

}
