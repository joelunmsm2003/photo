webpackJsonp([4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detallekine_detallekine__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filtro_filtro__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__anuncio_anuncio__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(modalCtrl, http, navCtrl) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.http.get('http://142.93.202.255:2000/kines')
            .subscribe(function (data) {
            console.log(JSON.parse(data['_body']));
            _this.kines = JSON.parse(data['_body']);
            _this.kines_respaldo = JSON.parse(data['_body']);
        });
    }
    HomePage.prototype.detalle = function (data) {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__detallekine_detallekine__["a" /* DetallekinePage */], { 'kine': data });
        profileModal.onDidDismiss(function (data) {
            //
        });
        profileModal.present();
    };
    HomePage.prototype.filtro = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__filtro_filtro__["a" /* FiltroPage */], {});
        profileModal.onDidDismiss(function (data) {
            var total = [];
            var _loop_1 = function (i) {
                var kine = _this.kines_respaldo.filter(function (item) {
                    return JSON.stringify(item.distrito).toLowerCase().indexOf(data['distrito'][i].toLowerCase()) !== -1;
                });
                total = total.concat(kine);
            };
            for (var i in data['distrito']) {
                _loop_1(i);
            }
            var _loop_2 = function (i) {
                var kine = _this.kines_respaldo.filter(function (item) {
                    return JSON.stringify(item.edad).toLowerCase().indexOf(data['edad'][i].toLowerCase()) !== -1;
                });
                total = total.concat(kine);
            };
            for (var i in data['edad']) {
                _loop_2(i);
            }
            var _loop_3 = function (i) {
                var kine = _this.kines_respaldo.filter(function (item) {
                    return JSON.stringify(item.edad).toLowerCase().indexOf(data['precio'][i].toLowerCase()) !== -1;
                });
                total = total.concat(kine);
            };
            for (var i in data['precio']) {
                _loop_3(i);
            }
            var _loop_4 = function (i) {
                var kine = _this.kines_respaldo.filter(function (item) {
                    return JSON.stringify(item.origen).toLowerCase().indexOf(data['origen'][i].toLowerCase()) !== -1;
                });
                total = total.concat(kine);
            };
            for (var i in data['origen']) {
                _loop_4(i);
            }
            _this.kines = total;
            console.log(_this.kines);
        });
        profileModal.present();
    };
    HomePage.prototype.publica = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__anuncio_anuncio__["a" /* AnuncioPage */], {});
        profileModal.onDidDismiss(function (data) {
            _this.http.get('http://142.93.202.255:2000/kines')
                .subscribe(function (data) {
                console.log(JSON.parse(data['_body']));
                _this.kines = JSON.parse(data['_body']);
                _this.kines_respaldo = JSON.parse(data['_body']);
            });
        });
        profileModal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/andy/photo/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color=\'dark\'>\n    <ion-title>Loquillas </ion-title>\n  </ion-navbar>\n\n    \n</ion-header>\n\n<ion-content >\n\n\n<div class="wrapper" style="padding:2px;">\n  <div class=\'columns\'>\n    <div class="grid" *ngFor = \'let c of kines \' (click)=\'detalle(c)\'>\n    \n            <img *ngIf=\'c.origen=="Photokines"\' src="{{c.photo[0][\'imagen\']}}">\n\n\n            \n            <img *ngIf=\'c.origen=="Loquillas"\' src="http://142.93.202.255:2000/{{c.photo[0][\'photo\']}}">\n\n            <img *ngIf=\'c.origen=="Skoka" && c.photo[0]\' src="{{c.photo[0][\'imagen\']}}">\n            \n            <div style="padding-left:10px; padding-bottom: 10px; color:#234;">\n            <span *ngIf=\'c.distrito\'>{{c.distrito}}<br></span>\n            <span *ngIf=\'c.precio\'>{{c.precio}}<br></span>\n            <span *ngIf=\'c.edad\'>{{c.edad}}</span> \n\n          </div>\n\n    </div>\n  </div>\n</div>\n\n\n</ion-content>\n\n\n<ion-footer>\n\n<ion-toolbar color=\'light\' style=\'text-align: center\'>\n\n<button ion-button color=\'secondary\' (click)=\'filtro()\'>Filtro</button>\n        <button ion-button color=\'danger\' (click)=\'publica()\'>Publica tu anuncio</button>\n</ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/andy/photo/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/anuncio/anuncio.module": [
		283,
		3
	],
	"../pages/chat/chat.module": [
		284,
		2
	],
	"../pages/detallekine/detallekine.module": [
		285,
		1
	],
	"../pages/filtro/filtro.module": [
		286,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallekinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DetallekinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetallekinePage = /** @class */ (function () {
    function DetallekinePage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.detallekine = navParams.get('kine');
        console.log('hahahhha', this.detallekine);
    }
    DetallekinePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetallekinePage');
    };
    DetallekinePage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    DetallekinePage.prototype.chat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chat_chat__["a" /* ChatPage */]);
    };
    DetallekinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detallekine',template:/*ion-inline-start:"/home/andy/photo/src/pages/detallekine/detallekine.html"*/'\n\n<ion-content class=\'fondo\'>\n\n\n\n    <ion-icon padding name="close" style=\'color:#fff; font-size:36px; position:fixed; right: 5px;z-index:1000\'  (click)=\'closeModal()\' ></ion-icon>\n\n\n    <ion-slides   slidesPerView=1>\n\n  <ion-slide  *ngFor = \'let c of detallekine.photo\'>\n\n   <img *ngIf=\'c.imagen\' src="{{c.imagen}}" alt="">\n\n    <img *ngIf=\'c.photo\' src="http://mylookxpressapp.com:2000/{{c.photo}}" alt="">\n\n\n  </ion-slide>\n\n  \n\n</ion-slides>\n\n<p padding style=\'color: #fff;\n    line-height: 20px;\'>\n\n	{{detallekine.contenido}}\n\n</p>\n\n\n</ion-content>\n\n<ion-footer>\n\n <ion-toolbar color=\'light\' style=\'text-align: center;\'>\n    \n    \n\n  <ion-buttons >\n      <a href=\'tel:+51{{detallekine.telefono}}"\' full ion-button color=\'dark\'>Llamar</a>\n\n      <a target="_blank"  ion-button color=\'secondary\' full href="https://wa.me/51{{detallekine.telefono}}?text=Hola%20amiga%20vi%20tu%20anuncio">Whatsaapp</a>\n\n    </ion-buttons>\n\n\n  </ion-toolbar>\n\n</ion-footer>\n'/*ion-inline-end:"/home/andy/photo/src/pages/detallekine/detallekine.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */]])
    ], DetallekinePage);
    return DetallekinePage;
}());

//# sourceMappingURL=detallekine.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"/home/andy/photo/src/pages/chat/chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>chat</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/andy/photo/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FiltroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FiltroPage = /** @class */ (function () {
    function FiltroPage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.edad = ['18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'];
        this.distrito = ['Surco', 'San Juan de Miraflores', 'Lince', 'San Martin de Porras', 'Los Olivos', 'Miraflores', 'Surquillo', 'Chorrillos', 'Villa María del Triunfo'];
        this.paginas = ['Skoka', 'Photokines', 'Locanto'];
        this.precio = ['100', '200', '300', '400'];
    }
    FiltroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FiltroPage');
    };
    FiltroPage.prototype.closeModal = function () {
        var data = { 'edad': this._edad, 'distrito': this._distrito, 'precio': this._precio, 'origen': this._origen };
        this.view.dismiss(data);
    };
    FiltroPage.prototype.checkAdult = function (age) {
        return age >= 18;
    };
    FiltroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filtro',template:/*ion-inline-start:"/home/andy/photo/src/pages/filtro/filtro.html"*/'\n\n<ion-content padding class=\'fondo\'>\n\n	 <ion-icon padding name="close" style=\'color:#fff; font-size:36px;\' (click)=\'closeModal()\' ></ion-icon>\n\n\n<ion-list>\n\n\n    <ion-item style=\'background: none; color:#fff;\'>\n\n    <ion-label style=\'color:#fff;\' multiple="true" >Pagina</ion-label>\n    <ion-select [(ngModel)]="_origen"  cancelText="Cerrar" okText="Aceptar">\n      <ion-option *ngFor = \'let d of paginas\' value="{{d}}" >{{d}}</ion-option>\n     \n    </ion-select>\n\n\n  </ion-item>\n\n  <ion-item style=\'background: none; color:#fff;\'>\n    <ion-label style=\'color:#fff;\'>Edad</ion-label>\n    <ion-select [(ngModel)]="_edad" multiple="true"  cancelText="Cerrar" okText="Aceptar">\n      <ion-option *ngFor = \'let e of edad\' value="{{e}}" >{{e}}</ion-option>\n     \n    </ion-select>\n\n\n    \n  </ion-item>\n\n  <ion-item style=\'background: none; color:#fff;\'>\n\n  	<ion-label style=\'color:#fff;\'>Distrito</ion-label>\n    <ion-select [(ngModel)]="_distrito" multiple="true"  cancelText="Cerrar" okText="Aceptar">\n      <ion-option *ngFor = \'let d of distrito\' value="{{d}}" >{{d}}</ion-option>\n     \n    </ion-select>\n\n\n  </ion-item>\n\n    <ion-item style=\'background: none; color:#fff;\'>\n\n  	<ion-label style=\'color:#fff;\'>Precio</ion-label>\n    <ion-select [(ngModel)]="_precio" multiple="true"  cancelText="Cerrar" okText="Aceptar">\n      <ion-option *ngFor = \'let p of precio\' value="{{p}}" >{{p}}</ion-option>\n     \n    </ion-select>\n\n    \n\n  </ion-item>\n\n</ion-list>\n</ion-content>\n\n\n<ion-footer>\n\n<ion-toolbar>\n\n<button ion-button round full color =\'secondary\' (click)=\'closeModal()\'>Aplicar</button>\n\n</ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"/home/andy/photo/src/pages/filtro/filtro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */]])
    ], FiltroPage);
    return FiltroPage;
}());

//# sourceMappingURL=filtro.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnuncioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AnuncioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnuncioPage = /** @class */ (function () {
    function AnuncioPage(http, navCtrl, navParams, view) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.anuncio = {};
        this.edad = ['18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'];
        this.distrito = ['San Juan de Miraflores', 'Lince', 'San Martin de Porras', 'Los Olivos', 'Miraflores', 'Surquillo'];
        this.precio = ['100', '200', '300', '400'];
        this.anuncio.imagen = [
            { 'id': 0, 'imagen': 'https://i.pinimg.com/originals/90/6e/8e/906e8ef7d483e5f134754b134184f457.jpg' },
            { 'id': 1, 'imagen': 'https://i.pinimg.com/originals/90/6e/8e/906e8ef7d483e5f134754b134184f457.jpg' },
            { 'id': 2, 'imagen': 'https://i.pinimg.com/originals/90/6e/8e/906e8ef7d483e5f134754b134184f457.jpg' },
            { 'id': 3, 'imagen': 'https://i.pinimg.com/originals/90/6e/8e/906e8ef7d483e5f134754b134184f457.jpg' },
            { 'id': 4, 'imagen': 'https://i.pinimg.com/originals/90/6e/8e/906e8ef7d483e5f134754b134184f457.jpg' },
            { 'id': 5, 'imagen': 'https://i.pinimg.com/originals/90/6e/8e/906e8ef7d483e5f134754b134184f457.jpg' }
        ];
    }
    AnuncioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AnuncioPage');
        this.anuncio.archivo = [];
    };
    AnuncioPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    AnuncioPage.prototype.guarda = function (data) {
        var _this = this;
        console.log(this.anuncio);
        var formData = new FormData();
        formData.append('edad', this.anuncio.edad);
        formData.append('distrito', this.anuncio.distrito);
        formData.append('precio', this.anuncio.precio);
        for (var i = 0; i < this.anuncio.archivo.length; i++) {
            formData.append('foto' + '_' + i, this.anuncio.archivo[i]);
        }
        this.http.post('http://142.93.202.255:2000/guardakine', formData).subscribe(function (res) {
            return console.log(res);
        }, function (err) {
            _this.view.dismiss();
        });
    };
    AnuncioPage.prototype.fileChange = function (event, data) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.anuncio.imagen[data]['imagen'] = event.target.result;
                console.log(_this.anuncio.imagen);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        var fileList = event.target.files;
        var file = fileList[0];
        this.anuncio.archivo[data] = fileList[0];
        console.log(file);
    };
    AnuncioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-anuncio',template:/*ion-inline-start:"/home/andy/photo/src/pages/anuncio/anuncio.html"*/'\n\n<ion-content padding class=\'fondo\'>\n\n	<ion-icon padding name="close" style=\'color:#fff; font-size:36px;\' (click)=\'closeModal()\' ></ion-icon>\n\n\n      <ion-item style=\'background: none; color:#fff;\'>\n    <ion-label style=\'color:#fff;\'>Edad</ion-label>\n    <ion-select [(ngModel)]="anuncio.edad"    cancelText="Cerrar" okText="Aceptar">\n      <ion-option *ngFor = \'let e of edad\' value="{{e}}" >{{e}}</ion-option>\n     \n    </ion-select>\n\n\n    \n  </ion-item>\n\n  <ion-item style=\'background: none; color:#fff;\'>\n\n  	<ion-label style=\'color:#fff;\'>Distrito</ion-label>\n    <ion-select [(ngModel)]="anuncio.distrito"   cancelText="Cerrar" okText="Aceptar">\n      <ion-option *ngFor = \'let d of distrito\' value="{{d}}" >{{d}}</ion-option>\n     \n    </ion-select>\n\n\n  </ion-item>\n\n    <ion-item style=\'background: none; color:#fff;\'>\n\n  	<ion-label style=\'color:#fff;\'>Precio</ion-label>\n    <ion-select [(ngModel)]="anuncio.precio"  cancelText="Cerrar" okText="Aceptar">\n      <ion-option *ngFor = \'let p of precio\' value="{{p}}" >{{p}}</ion-option>\n     \n    </ion-select>\n\n\n  </ion-item>\n\n\n    <ion-item style=\'background: none; color:#fff;\'>\n\n  	<ion-label style=\'color:#fff;\'>Telefono</ion-label>\n	<ion-input [(ngModel)]="anuncio.telefono"></ion-input>\n\n\n  </ion-item>\n\n\n  	<div padding style=\'text-align: center;\'>\n\n    <div class=\'upload\' *ngFor = \'let c of anuncio.imagen\' >\n\n		<img src="{{c.imagen}}"/>\n    \n		<input  id="custom-file-upload"   type="file" value="" for=\'custom-file-upload\'  (change)="fileChange($event,c.id)">\n	</div>\n\n\n	</div>\n\n\n\n     \n</ion-content>\n\n<ion-footer>\n<ion-toolbar>\n <button ion-button color=\'light\' (click)=\'guarda(anuncio)\' type="submit" block>Guardar</button>\n    \n</ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/andy/photo/src/pages/anuncio/anuncio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */]])
    ], AnuncioPage);
    return AnuncioPage;
}());

//# sourceMappingURL=anuncio.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/andy/photo/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/andy/photo/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/andy/photo/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/andy/photo/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_detallekine_detallekine__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_filtro_filtro__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_chat_chat__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_anuncio_anuncio__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_filter_filter__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_detallekine_detallekine__["a" /* DetallekinePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_filtro_filtro__["a" /* FiltroPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_anuncio_anuncio__["a" /* AnuncioPage */],
                __WEBPACK_IMPORTED_MODULE_12__pipes_filter_filter__["a" /* FilterPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/anuncio/anuncio.module#AnuncioPageModule', name: 'AnuncioPage', segment: 'anuncio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detallekine/detallekine.module#DetallekinePageModule', name: 'DetallekinePage', segment: 'detallekine', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filtro/filtro.module#FiltroPageModule', name: 'FiltroPage', segment: 'filtro', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_detallekine_detallekine__["a" /* DetallekinePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_filtro_filtro__["a" /* FiltroPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_anuncio_anuncio__["a" /* AnuncioPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_chat_chat__["a" /* ChatPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(http, platform, statusBar, splashScreen) {
        this.http = http;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        // If you wish to turn OFF background-tracking, call the #stop method.
        //this.backgroundGeolocation.stop();
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/andy/photo/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/andy/photo/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/andy/photo/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/andy/photo/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, filter) {
        if (!items || !filter) {
            return items;
        }
        console.log('sss', filter);
        // To search values only of "name" variable of your object(item)
        //return items.filter(item => item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
        // To search in values of every variable of your object(item)
        return items.filter(function (item) {
            return JSON.stringify(item.edad).toLowerCase().indexOf(filter.toLowerCase()) !== -1;
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());

//# sourceMappingURL=filter.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map