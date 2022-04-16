"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// $("").
//modal active
$(function () {
  $('#btn_giris').click(function () {
    $('#myUye').modal('show');
  });
  $('#deneme44').css('color', 'red').css('background', 'black');

  function onSubmitFunction() {
    alert('submitted value 44');
  }
}); //form validation

$(function () {
  //Submit  Tıklandığında
  $('#btnSubmit').click(function () {
    //input içeriği aldım
    var email, password;
    email = $('#user_email').val();
    password = $('#user_password').val(); //validation Email

    if (email == '') {
      $('#validation_email').html('email boş geçilemez....');
    } else if (validateEmail(email) == false) {
      $('#validation_email').html('email uygun formatta girmediniz....');
    } else {
      $('#validation_email').html('');
    } //validation Password


    if (password == '') {
      $('#validation_password').html('Şifre boş geçilemez....');
    } else {
      $('#validation_password').html('');
    }

    function validateEmail(email) {
      //email'in doğru şekilde yazılması için özel bileşenleri olan yapıdır.
      var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    }
  });
}); //  var root=document.getElementById("react_root");
//  Birden fazla html yapısı kullanmak istiyorsak div içinde yazılır
//  var template=(
//    <div>
//      <hr />
//      <h2>React DOM</h2>
//      <button className="btn btn-primary " style={{fontSize:"55px"}} >Gönder Dom</button>
//      <hr />
//    </div>
//  );
//  ReactDOM.render(template,root);
//    JS                      React
//   ------                  ---------
//    deneme                  {deneme}
//    onclick="deneme()"      onClick={deneme}
//    Bootstrap               React
//    ------                  ---------
//    class                   className
//    Css                     React
//    ------                  ---------
//    style                   style={{fontSize:25px;}}
//basket start

var counter = 0; //Artırmak

var counterPlus = function counterPlus() {
  counter++;
  againCall();
  console.log('Artırıldı');
}; //Azaltmak


var counterMinus = function counterMinus() {
  counter--;
  againCall();
  console.log('Azaltıldı');
}; //Event


function againCall() {
  var eventTuto = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/React.createElement("p", null, "Adet: ", counter)), /*#__PURE__*/React.createElement("div", {
    className: "col-md-2"
  }, ' ', /*#__PURE__*/React.createElement("button", {
    onClick: counterPlus,
    className: "btn btn-primary",
    style: {
      fontSize: '14px'
    },
    id: "plus_id"
  }, "+")), /*#__PURE__*/React.createElement("div", {
    className: "col-md-2"
  }, ' ', /*#__PURE__*/React.createElement("button", {
    onClick: counterMinus,
    className: "btn btn-danger",
    style: {
      fontSize: '14px'
    },
    id: "minus_id"
  }, "-")))));
  ReactDOM.render(eventTuto, document.getElementById('plus_minus'));
}

againCall(); //Timer

function timerClock() {
  var time = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, " ", new Date().toLocaleTimeString(), " ")));
  ReactDOM.render(time, document.getElementById('timer_id'));
} //bir metodu sürekli belirli aralıklarda çağırmak istersek


setInterval(timerClock, 1000); //TODO LIST
//variable

var listItemObject = {
  title: 'Todo List Uygulaması',
  listCounter: 'Liste Eleman sayısı',
  data: []
}; //LIST CLEAR

var clearList = function clearList() {
  listItemObject.data = [];
  formTutorial();
}; //onSubmit


function formOnSubmit(event) {
  //form bileşenin submit olmaması
  //Preventdefault kavramı ilgili elementin tarayıcı tarafından o an yaptığı varsayılan işlemi engellemeye yarar.
  event.preventDefault();
  var formInputData = event.target.elements.formInput.value; //console.log(formInputData);

  if (formInputData) {
    //gelen birşey var ise içeri girer
    listItemObject.data.push(formInputData);
    formTutorial();
    console.log('Eklendi: ' + formInputData);
    event.target.elements.formInput.value = '';
  }
}

function formTutorial() {
  var form = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "text-center44 text-uppercase mt-5"
  }, listItemObject.title), /*#__PURE__*/React.createElement("p", null, listItemObject.listCounter, " : ", listItemObject.data.length), /*#__PURE__*/React.createElement("ul", null, listItemObject.data.map(function (temp) {
    //toString: kendisine tanımlanan değişken değerini string olarak değiştirerek döndürür.
    return /*#__PURE__*/React.createElement("li", {
      key: temp.toString()
    }, " ", temp, " ");
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: formOnSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    name: "formInput"
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-warning mr-3",
    style: {
      fontSize: ".6rem"
    },
    type: "submit"
  }, "G\xF6nder"), /*#__PURE__*/React.createElement("button", {
    onClick: clearList,
    className: "btn btn-danger",
    style: {
      fontSize: ".6rem"
    }
  }, "temizle")))));
  ReactDOM.render(form, document.getElementById('todolistId'));
}

formTutorial(); ///////////////////////////////////////////////////////////////////
//object

var object = {}; //console.log(object); // => {}
//constructor(yapıcı)

var Student = function Student(adi, soyadi, yas) {
  this.adi = adi;
  this.soyadi = soyadi;
  this.yas = yas; //console.log(this);
}; //instance
//hasOwnPropert: Bu objede verilen özellikler var mı yok mu ?


var instanceData = new Student("Adi44", "Soyadi44", 37); //console.log(instanceData.hasOwnProperty("soyadi")); // => true
//Object Create: nesnemize yeni obje oluşturmak

var instanceData2 = Object.create(Student); //console.log(instanceData2);
//property
//prototype(kalıtımlamak): yapıcı fonksiyona yeni bir özellik veya fonksiyon eklemek.

Student.prototype.birthYear = function () {
  return new Date().getFullYear() - this.yas;
}; //console.log("Adı: "+instanceData.adi+"  Doğum Tarihi: "+instanceData.birthYear()); // => Adı: Adi44  Doğum Tarihi: 1985
//built-in-constructor: yeni özellikler eklemek
//string bir özellik ekledik


String.prototype.karesi = function (n) {
  return n * n;
}; //console.log("X ".karesi(5)); // => 25
//mutlak değerli kendi string function'nını oluşturma


String.prototype.mutlakDeger = function (n) {
  if (n > 0) return n;else return -n;
}; //console.log("Mutlak".mutlakDeger(-5)); // => 5
//Verilen iki sayının küçük olanını bulan bir function yazma


String.prototype.kucukSayi = function (sayi1, sayi2) {
  if (sayi1 > sayi2) return sayi2;else return sayi1;
}; //console.log("Küçük Sayi".kucukSayi(5,14)); // => 5
//dizi


var dizi = ["js", "jquery", "bootstrap"]; //console.log(dizi); // => (3) ['js', 'jquery', 'bootstrap']
//dizideki elemanları silme
//array ile dizi ekledik
//splice():özellik ekleme veya silme

Array.prototype.arrayIndexDelete = function (data) {
  //indexOf:arama yapar  
  var index = this.indexOf(data);

  if (index > -1) {
    this.splice(index, 1); // 1.parametre:indeks no 2.parametre:kaç tane silinecek
  }

  return this;
}; //console.log(dizi.arrayIndexDelete("js")); // => (2) ['jquery', 'bootstrap']
//repeat:tekrar yapma
//join:string birleştirme yapar
//console.log(new Array(4+1).join(1)); // => 1111 // +1 yazdık çünkü indeks no 0'dan başlıyor
//string tekrar eden
//dizi ile çalışmak gerekir


String.prototype.wordRepetition = function (m) {
  var repeat = new Array(m + 1).join(this); //m+1 yazdık çünkü index 0'dan başlar. 

  return repeat;
}; //array ile yeni dizi oluşturduk ve join ile içine nesneyi ekledik
//this objeyi ifade eder
//join : dizileri string birleştirme yapar
//concat ekleme yapar
//console.log("kelime".concat(" ").wordRepetition(2)); //=>kelime kelime
//Senkron: 
//Single threaded çalışır
//Senkron:aynı anda sadece 1 tane process çalışması
// console.log("senkron 1.satır")
// var deneme=function(){
//   console.log("senkron 2.satır")
// }
//deneme(); // => senkron 1.satır
//    senkron 2.satır
//console.log("senkron 3.satır"); // => senkron 1.satır
//senkron 2.satır
//senkron 3.satır
//Asenkron: 
//setTimeout() bir işlemin-fonksiyonun belli bir süre sonunda çalışmasını sağlar.
//console.log("asenkron 1.satır")


var asenkron = function asenkron() {
  setTimeout(function () {
    console.log("asenkron 2.satır");
  }, 4000); //bu kısım dört saniye sonra çalışır
}; //asenkron();
//console.log("asenkron 3.satır");
//asenkron 1.satır
//asenkron 3.satır
//asenkron 2.satır (4saniye sonra çalıştı)
//ES3:Javascript: 1995
//ES5:Ecma-262 Edition(2009)
//ES5 Özellikler
//1-) "use strict"; ES5 de kullanacağımız veriler, bu olmazsa olmaz.
//2-) built-in-constructor built-in-constructor
//3-) Array.isArray()
//4-) Array.forEach() ==> döngü
//5-) Array.filter()  ==> objeden istediklerimiz gelsin
//6-) Array.map()     ==> objelerdeki bütün datalara erişmek
//7-) Array.indexOf() ==> istenilen indekse erişmek
//8-) Array.lastOf()
//9-) JSON.parse()
//10-) JSON.stringifly()
//11-) Date.now()
//JS single-threaded yapıdadır. Daha verimli olmayı sağlar.
//Normal
// function normal(){}
//ES5 (anonymous function)
// var es5=function(){}
//ES6 Arrow function
// var es6=()=>{}
//synchronous  (Senkron)  ==> sıralı bir şekilde devam ediyor
//asynchronous (Asenkron) ==> aynı andan birden fazla process çalışması
//callback: bir fonksiyon çalışmasını tamamladıktan sonra başka bir fonksiyonun çalışmasını sağlayan fonksiyonlara denir.
//1.örnek
//1-Adım callback function yazılır.
//2.Adım içerdeki function yazılır


function birinci(x1, x2, callback) {
  var multiple = x1 * x2;
  callback(multiple);
}

function ikinci(deger) {
  console.log(deger);
} //birinci(4,5,ikinci); // => 20
//callback:
//2.örnek
//sıfır(0) başlasun kullanıcıdan alınan sayıya kadar döngüdeki sayılardan çift olanları ekranda gösteren callbackfunction yazalım ?


function evenNumberArray(callback) {
  var evenArray = [];
  var pro = Number(prompt("Lütfen bir sayı giriniz"));

  for (var i = 0; i <= pro; i++) {
    if (i % 2 == 0) {
      evenArray.push(i); //push:ekleme yapar
    }
  }

  callback(evenArray);
}

function showMessage(data) {
  console.log(data);
} //evenNumberArray(showMessage); // => (4) [0, 2, 4, 6]
//callback hell
//es5=> anonymous function kullanılır
//Anonymous Function


var es5Anonymous = function es5Anonymous() {
  console.log("ES5");
}; //DİZİ ==> Map , Filter ,forEach
//dizinin içinde nesneler oluşturduk


var product = [{
  productName: "Msi1",
  productPrice: 1000
}, {
  productName: "Msi2",
  productPrice: 2000
}, {
  productName: "Msi3",
  productPrice: 3000
}, {
  productName: "Msi4",
  productPrice: 4000
}]; //console.log(product); // => (4) [{…}, {…}, {…}, {…}]
//Map(eşleşme):her bir elemana erişim sağlar

var es5Map = product.map(function (temp) {
  return temp.productName;
}); //console.log(es5Map); // => (4) ['Msi1', 'Msi2', 'Msi3', 'Msi4']
//Filter

var es5Filter = product.filter(function (temp) {
  return temp.productPrice >= 3000; // productPrice'i 3000 ve 3000'den büyük olanları döndür
}); //console.log(es5Filter); // => (2) [{…}, {…}] // Msi3 ve Msi4 döner
//OBJECT ==> this , forEach

var person = {
  name: "Hamit",
  surname: "Mızrak",
  java: ["servlet", "Jsp", "JSF", "Spring MVC", "Spring Data", "Spring Security"],
  getJava: function getJava() {
    console.log("dışardan çağırdım " + this.name); //=> dışardan çağırdım Hamit
    //3.katmandan birinci katmana erişemediğimiz için tanımladık

    var mecbur = this; //forEach:döngü şeklinde elemanları listeler

    this.java.forEach(function (temp) {
      console.log(temp); // => servlet
      //    Jsp
      //    JSF
      //    Spring MVC
      //    Spring Data
      //    Security
      //3.katmandan birinci katmana erişemediğimiz için yukarda this tanımladık artık name'e erişebiliriz.
      //console.log(mecbur.name); // => Hamit
    });
  }
}; //person.getJava();
//ders14
//ES6
//ES6 ile var yerine artık let kullanılıyor
//template literal => ``
//ES6 ile arrow function geldi
//arrow function () => {}
//Immediate function (anonymous(){})()
//ES6(1) Variable
//(let-const)
//  var adi="Hamit";
//  let adi2="Hamit";
//  const adi4="Ankara";
//global scope

var adi = 'Hamit'; //Function(local) scope

function fullName() {
  var adi = 'Hamit444';
  var soyadi = 'Mızrak';
  console.log('function scope: ' + ' adi: ' + adi + ' soyadı: ' + soyadi);
} //fullName(); // => function scope:  adi: Hamit444 soyadı: Mızrak
//console.log("global Scope: adi ",adi); // => global Scope: adi  Hamit
//console.log("function Scope: soyadi ",soyadi); // => birşey dönmez hata verir, çünkü soyadi local tanımlandı, dışarda çağrılamaz.
//conditional Block(koşul bloğu)
// if(true){ // her zaman doğru olursa çalışır
//   let yas=37;
//   console.log(yas); // => 37
// }
//ES6 (2) Literal 
//Template Literal: BackTick ==> ``
//1-) Multi-line
//2-) Interpolation
//3-) Html Templates
//1-) Multi-Line


var deneme = 'Merhabalar\nNasılsınız'; //console.log(deneme); // => Merhabalar
//    Nasılsınız

var deneme2 = "Merhabalar\nNas\u0131ls\u0131n\u0131z\nJS Kursu\n"; //console.log(deneme2); //=> Merhabalar
//                         Nasılsınız
//                         JS Kursu
// 2.6 GHZ: Saniyede 2.6 Milyar toplama işlemi yapar
//2-) Interpolation

var firstName = "Malatya";
var lastName = "Battalgazi"; //console.log("İl: "+firstName+ " İlçe: "+lastName); //=>İl: Malatya İlçe: Battalgaz
//console.log(`İl: ${firstName} İlçe: ${lastName}`); //=>İl: Malatya İlçe: Battalgaz

var student = {
  name: "Hamit",
  surname: "Mızrak"
}; //console.log(student.surname); // => Mızrak
//console.log(`${student.surname}`); // => Mızrak
//ES6(3) Function
//(Parametresiz Function)
//Normal

function deneme11() {
  console.log('Normal Function');
} // deneme11(); //=>Normal Function
//ES5


var deneme22 = function deneme22() {
  console.log('Anonymous Function'); //=>Anonymous Function
}; // deneme22();
//ES6


var deneme33 = function deneme33() {
  console.log('Arrow Function'); //=>Arrow Function
}; // deneme33();
//(Parametreli Function)
//Normal Parametreli


function deneme44(adi) {
  console.log('Normal Parametreli Function', adi);
} //deneme44("Kayısı"); //=> Normal Parametreli Function Kayısı
//Anonymous Parametreli


var deneme55 = function deneme55(adi) {
  console.log('Anonymous Function ', adi);
}; // deneme55("Kayısı Reçeli"); //=>//=>Anonymous Function Kayısı Reçeli
//Arrow Function Parametre
//eğer curl brackets kullanmazsak return kullanmamıza gerek yok


var deneme66 = function deneme66(x, y) {
  return x + y;
};

var value66 = deneme66(6, 4); // console.log(value66); //=>10
//examples
//benim gönderdiğim veriyi büyük yazsın

var upperValue = function upperValue(data) {
  return data.toUpperCase();
}; //console.log(upperValue("Kızılay")); //=> KIZILAY
//eğer curl brackets yazarsam return kullanılmalı


var deneme77 = function deneme77(x, y) {
  return x + y;
};

var value77 = deneme77(6, 4); // console.log(value77); //=> 10
//Immedia Function = ()();
//Immedia çağırmadan kullanılan fonksiyondur.
//Self Invoking Function(Immedia Function) ==> kendi kendini çağıran functionlar
//Parametresiz
// (function deneme(){
//   console.log("Çağırmadan kullanacağım Normal Function"); //=>Çağırmadan kullanacağım Normal Function
// })(); 
// (function(){
//   console.log("Çağırmadan kullanacağım Anonymous Function"); //=>Çağırmadan kullanacağım Anonymous Function
// })();
// (()=>{
//   console.log("Çağırmadan kullanacağım Arrow Function"); //=>Çağırmadan kullanacağım Arrow Function
// })();
//Parametreli
// ((data)=>console.log(`Veri: ${data}`))("ES6"); //=>Veri: ES6
//Filter ES5,ES6

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //console.log(arr); //=>(9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let es5Filter=arr.filter();
//Filter ES5

var es5Filter44 = arr.filter(function (data) {
  return data % 2 == 1;
}); //console.log(es5Filter44); //=>(5) [1, 3, 5, 7, 9]
//Filter ES6

var filterEs6 = arr.filter(function (data) {
  return data % 2 == 0;
}); //console.log(filterEs6); //=>(4) [2, 4, 6, 8]

var product33 = [{
  proName: 'laptop-1',
  proPrice: 1000
}, {
  proName: 'laptop-2',
  proPrice: 2000
}, {
  proName: 'laptop-3',
  proPrice: 3000
}]; //ES6

var proPriceMap2 = product33.map(function (data) {
  return data.proPrice;
}); //console.log(proPriceMap2); //=>(3) [1000, 2000, 3000]
//argument: fonksiyona gelen dataların hepsini almak için kullanıyoruz

var argumentData = function argumentData() {
  console.log(arguments);
}; //argumentData(5,6,3,9,"Veri"); //=>Arguments(5) [5, 6, 3, 9, 'Veri', callee: (...), Symbol(Symbol.iterator): ƒ]
//ES5
//Class


var Stu = function Stu(adi, soyadi, yas) {
  //constructor
  this.adi = adi;
  this.soyadi = soyadi;
  this.yas = yas; //console.log(this);
};

var sonuc = new Stu("Hamit", "Mızrak", 37); //console.log(sonuc); //=>Stu {adi: 'Hamit', soyadi: 'Mızrak', yas: 37}
//ES6 
//class

var PersonEs6 = /*#__PURE__*/function () {
  //parametreli constructor
  //parametreler boş olursa verdiğimiz default değerler geri döner
  function PersonEs6() {
    var adi = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "adını girmediniz";
    var soyadi = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "soyadını girmediniz";
    var yas = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, PersonEs6);

    this.adi = adi;
    this.soyadi = soyadi;
    this.yas = yas; //console.log('constructor çalıştı');
  }

  _createClass(PersonEs6, [{
    key: "message",
    value: //metot
    function message(data) {
      return "message: ".concat(data, " : ad\u0131: ").concat(adi);
    }
  }]);

  return PersonEs6;
}(); // let sonuc2 = new classEs6()


var sonuc2 = new PersonEs6('Hamit', "Mızrak", 37); //console.log(sonuc2); //=>PersonEs6 {adi: 'Hamit', soyadi: 'Mızrak', yas: 37}
//console.log(sonuc2.message("Big Data 2556")); //=>message: Big Data 2556 : adı: Hamit
//extends:(tamamen super classtan gelen dataları kullanmak)

var Teacher = /*#__PURE__*/function (_PersonEs) {
  _inherits(Teacher, _PersonEs);

  var _super = _createSuper(Teacher);

  function Teacher() {
    _classCallCheck(this, Teacher);

    return _super.apply(this, arguments);
  }

  return _createClass(Teacher);
}(PersonEs6);

var sonuc3 = new Teacher('Teacher Name', 'Teacher Surname', 37); //console.log(sonuc3); //=>Teacher {adi: 'Teacher Name', soyadi: 'Teacher Surname', yas: 37}
//extends: anahtar kelime ile kalıtım alıyoruz (kendimize ait özellik ekleyelim)
//tekrardan constructor yazmalıyız
//super: bu metod kalıtım alınan sınıfın kurucusuna parametre geçirmek için kullanılır.
//Bir nesne sınıfında kalıtım alıyorsak super metodunu eklemek zorundayız.
//super anahtar kelimesini kullanarak kalıtım alınan nesneye ait metotlara ve özelliklere erişebiliriz.

var Teacher2 = /*#__PURE__*/function (_PersonEs2) {
  _inherits(Teacher2, _PersonEs2);

  var _super2 = _createSuper(Teacher2);

  //yeni özelliği constructor'a ekledik
  function Teacher2() {
    var _this;

    var adi = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "adını girmediniz";
    var soyadi = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "soyadını girmediniz";
    var yas = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var hescode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "hesCodes4521xc";

    _classCallCheck(this, Teacher2);

    _this = _super2.call(this, adi, soyadi, yas); //üst atadan gelen özellikler

    _this.hescode = hescode; // yeni edindiği özellik

    return _this;
  }

  _createClass(Teacher2, [{
    key: "dataChangeExtends",
    value: function dataChangeExtends(data) {
      return "data: ".concat(data, " Ad\u0131:").concat(this.adi, "  Soyad\u0131:").concat(this.soyadi, "  Ya\u015F:").concat(this.yas, "  HesCode:").concat(this.hescode, " ");
    }
  }]);

  return Teacher2;
}(PersonEs6);

var sonuc4 = new Teacher2('Teacher Name4', 'Teacher Surname4', 34, "HesCodeXYZ4"); //console.log(sonuc4);

console.log(sonuc4.dataChangeExtends("yeni")); //=>data: yeni Adı:Teacher Name4  Soyadı:Teacher Surname4  Yaş:34  HesCode:HesCodeXYZ4 
//callback()  ==> ES5
//promise()   ==> ES6
//async/await ==> ES7
//ders-15
//ES6
//class
// class Teacher{
//constructor
//   constructor(){}
//metot
//   deneme(){}
// }

var Teacher1 = /*#__PURE__*/function () {
  //constructor
  function Teacher1() {
    var adi = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "default adi";
    var soyadi = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "default soyadi";

    _classCallCheck(this, Teacher1);

    this.adi = adi;
    this.soyadi = soyadi; //console.log("ilk constructor çalıştı");
  } //metot


  _createClass(Teacher1, [{
    key: "fullName",
    value: function fullName(data) {
      return "adi: ".concat(this.adi, " soyadi: ").concat(this.adi);
    }
  }]);

  return Teacher1;
}(); //2.class


var TeacherRoom = /*#__PURE__*/function (_Teacher) {
  _inherits(TeacherRoom, _Teacher);

  var _super3 = _createSuper(TeacherRoom);

  function TeacherRoom() {
    _classCallCheck(this, TeacherRoom);

    return _super3.apply(this, arguments);
  }

  return _createClass(TeacherRoom);
}(Teacher1); //3.class


var TeacherSpecialRoom = /*#__PURE__*/function (_Teacher2) {
  _inherits(TeacherSpecialRoom, _Teacher2);

  var _super4 = _createSuper(TeacherSpecialRoom);

  function TeacherSpecialRoom() {
    var _this2;

    var adi = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "default adi";
    var soyadi = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "default soyadi";
    var okulKodu = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Xyx126558";

    _classCallCheck(this, TeacherSpecialRoom);

    //ata class'ın bileşenleri
    _this2 = _super4.call(this, adi, soyadi); //kalıtım alan class'ın yeni bileşeni

    _this2.okulKodu = okulKodu; // console.log("XYz>ilk constructor çalıştı");

    return _this2;
  }

  return _createClass(TeacherSpecialRoom);
}(Teacher1); // let teachInstance=new Teacher1(); //argüman vermezsek default değerler döner


var teachInstance = new Teacher1("Hamit", "Mızrak"); //console.log(teachInstance); //=> {adi: 'Hamit', soyadi: 'Mızrak'}

var teachRoomInstance = new TeacherRoom("Hamit", "Mızrak"); //ata class'dan kalıtımladık ama yeni özellik eklemedik
// console.log(teachRoomInstance); //=> {adi: 'Hamit', soyadi: 'Mızrak'}

var teachRoomSpecialInstance = new TeacherSpecialRoom("Hamit", "Mızrak", "mnp5263"); //ata class'dan kalıtımladık ve yeni özellikde ekledik
//console.log(teachRoomSpecialInstance); //=>{adi: 'Hamit', soyadi: 'Mızrak', okulKodu: 'mnp5263'}
//rest parameter: Dinamik bir dizidir.(Reactta yoktur)
//...degiskenAdi şeklinde yazılır.
//Parametre sınırı yoktur, kaç argüman verilirse onları işleme sokar.
//normal

function normalFunction(x, y) {
  return x + y;
} //console.log(normalFunction(1,2,3,4)); //=>3 (1+2)
//rest-1


function restFunction(x, y) {
  //console.log(data);
  console.log(x + y + (arguments.length <= 2 ? undefined : arguments[2]) + (arguments.length <= 3 ? undefined : arguments[3]) + (arguments.length <= 4 ? undefined : arguments[4]));
} //restFunction(1,2,3,4,5); //=>15
//rest-2


function restFunction2() {
  var sum = 0;

  for (var _len = arguments.length, data = new Array(_len), _key = 0; _key < _len; _key++) {
    data[_key] = arguments[_key];
  }

  for (var _i = 0, _data = data; _i < _data.length; _i++) {
    var temp = _data[_i];
    sum += temp;
  }

  return sum;
} //console.log(restFunction2(1,2,3,4,5,6,7,8,9,10)); //=>55
//destructuring(Var olan bir şeyin şeklini bozmak(iyi anlamda).) AMAÇ: daha okunabilir clean kodlar yazmak
//Gelen yapıları diziye atar.
//destructuring assigment ==> []=[];   ==> ({}={})
//normal


var x, y, z;
x = 1;
y = 2;
z = 3; //console.log(x,y,z); //=> 1 2 3
//1.YOL

x = 4;
y = 5;
z = 6;
var _x$y$z = {
  x: 7,
  y: 8,
  z: 9
};
x = _x$y$z.x;
y = _x$y$z.y;
z = _x$y$z.z;
//console.log(x,y,z); //=>7 8 9
//destructuring array ==> const []=diziAdi
var portData = ["8080", "5500", "3306", "5432"]; //1.YOL

var localhost = portData[0];
var liveServer = portData[1];
var mysql = portData[2];
var postgresql = portData[3]; // console.log(
//   `
//   localhost: ${localhost}  
//   live-server: ${liveServer}  
//   mysql: ${mysql}  
//   postgresql: ${postgresql}  
//   `
//   ); 
// çıktısı =>   localhost: 8080  
//              live-server: 5500  
//              mysql: 3306  
//              postgresql: 5432 
//2.YOL

var localhost2 = portData[0],
    liveServer2 = portData[1],
    mysql2 = portData[2],
    postgresql2 = portData[3]; // console.log(
//   `
//   localhost: ${localhost2}  
//   live-server: ${liveServer2}  
//   mysql: ${mysql2}  
//   postgresql: ${postgresql2}  
//   `
//   )
//destructuring object  ==> const {}=objectAdi
//normal

var person44 = {
  adi1: "Hamit",
  soyadi1: "Mızrak",
  meslek1: "BM"
}; //console.log(person44);
//console.log(person44.adi1);
//console.log(person44.soyadi1);
//console.log(person44.meslek1);

var adi1 = person44.adi1,
    soyadi1 = person44.soyadi1,
    meslek1 = person44.meslek1; //console.log(adi1+" "+soyadi1,meslek1); //=>Hamit Mızrak BM
