import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { Http,RequestOptions, Headers } from '@angular/http';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the AnuncioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anuncio',
  templateUrl: 'anuncio.html',
})
export class AnuncioPage {


	anuncio:any={}

  loader:any

	edad:any=['18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']

	distrito:any=['San Juan de Miraflores','Lince','San Martin de Porras','Los Olivos','Miraflores','Surquillo']

	precio:any=['100','200','300','400']



  constructor(public loadingCtrl: LoadingController,private http: Http,public navCtrl: NavController, public navParams: NavParams,private view:ViewController) {
 	

 	this.anuncio.imagen=[
 	{'id':0,'imagen':'https://cdn4.vectorstock.com/i/thumb-large/98/08/default-photo-placeholder-vector-20889808.jpg'},
 	{'id':1,'imagen':'https://cdn4.vectorstock.com/i/thumb-large/98/08/default-photo-placeholder-vector-20889808.jpg'},
 	{'id':2,'imagen':'https://cdn4.vectorstock.com/i/thumb-large/98/08/default-photo-placeholder-vector-20889808.jpg'},
 	{'id':3,'imagen':'https://cdn4.vectorstock.com/i/thumb-large/98/08/default-photo-placeholder-vector-20889808.jpg'},
 	{'id':4,'imagen':'https://cdn4.vectorstock.com/i/thumb-large/98/08/default-photo-placeholder-vector-20889808.jpg'},
 	{'id':5,'imagen':'https://cdn4.vectorstock.com/i/thumb-large/98/08/default-photo-placeholder-vector-20889808.jpg'}
 	]

 	

  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Publicando tu anuncio, Espere porfavor ❤",
    });
    this.loader.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AnuncioPage');

    
    this.anuncio.archivo=[]
  }


    closeModal(){



    this.view.dismiss()


}


guarda(data){

	console.log(this.anuncio)


 

		var formData = new FormData();
		formData.append('edad',this.anuncio.edad);
		formData.append('distrito',this.anuncio.distrito);
		formData.append('precio',this.anuncio.precio);

		for (var i = 0; i < this.anuncio.archivo.length; i++) {

				formData.append('foto'+'_'+i,this.anuncio.archivo[i]);

			}

      //this.presentLoading()

  
     this.http.post('http://aniavestidos.com:5000/guardakine',formData).subscribe(res =>
  
   		  console.log(res),

             this.loader.dissmiss()
    );
  
  





}

fileChange(event,data){

  

    if(event.target.files && event.target.files[0]){

      let reader = new FileReader();

      reader.onload = (event:any) => {


        this.anuncio.imagen[data]['imagen'] = event.target.result;

        console.log(this.anuncio.imagen)


      }
      
      reader.readAsDataURL(event.target.files[0]);

    }


      let fileList: FileList = event.target.files;  
      let file: File = fileList[0];

      this.anuncio.archivo[data] = fileList[0];
      console.log(file);
  }










}
