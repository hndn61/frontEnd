// $("").

//modal active
$(function () {
  $('#btn_giris').click(function () {
    $('#myUye').modal('show')
  })

  $('#deneme44').css('color', 'red').css('background', 'black')

  function onSubmitFunction() {
    alert('submitted value 44')
  }
})

//form validation
$(function () {
  //Submit  Tıklandığında
  $('#btnSubmit').click(function () {
    //input içeriği aldım
    let email, password
    email = $('#user_email').val()
    password = $('#user_password').val()

    //validation Email
    if (email == '') {
      $('#validation_email').html('email boş geçilemez....')
    } else if (validateEmail(email) == false) {
      $('#validation_email').html('email uygun formatta girmediniz....')
    } else {
      $('#validation_email').html('')
    }
    //validation Password
    if (password == '') {
      $('#validation_password').html('Şifre boş geçilemez....')
    } else {
      $('#validation_password').html('')
    }

    function validateEmail(email) {
      //email'in doğru şekilde yazılması için özel bileşenleri olan yapıdır.
      let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regex.test(email)
    }
  })
})

//  var root=document.getElementById("react_root");
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
var counter = 0
//Artırmak
let counterPlus = function () {
  counter++
  againCall()
  console.log('Artırıldı')
}

//Azaltmak
let counterMinus = function () {
  counter--
  againCall()
  console.log('Azaltıldı')
}

//Event
function againCall() {
  var eventTuto = (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <p>Adet: {counter}</p>
          </div>
          <div className="col-md-2">
            {' '}
            <button
              onClick={counterPlus}
              className="btn btn-primary"
              style={{ fontSize: '14px' }}
              id="plus_id"
            >
              +
            </button>
          </div>
          <div className="col-md-2">
            {' '}
            <button
              onClick={counterMinus}
              className="btn btn-danger"
              style={{ fontSize: '14px' }}
              id="minus_id"
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  )
  ReactDOM.render(eventTuto, document.getElementById('plus_minus'))
}
againCall()

//Timer
function timerClock() {
  var time = (
    <div>
      <p>
        <b> {new Date().toLocaleTimeString()} </b>
      </p>
    </div>
  )
  ReactDOM.render(time, document.getElementById('timer_id'))
}
//bir metodu sürekli belirli aralıklarda çağırmak istersek
setInterval(timerClock, 1000)

//TODO LIST
//variable
var listItemObject = {
  title: 'Todo List Uygulaması',
  listCounter: 'Liste Eleman sayısı',
  data: [],
}

//LIST CLEAR
let clearList=function(){
  listItemObject.data=[];
  formTutorial();
}

//onSubmit
function formOnSubmit(event) {
  //form bileşenin submit olmaması
  //Preventdefault kavramı ilgili elementin tarayıcı tarafından o an yaptığı varsayılan işlemi engellemeye yarar.
  event.preventDefault()
  var formInputData = event.target.elements.formInput.value
  //console.log(formInputData);
  if (formInputData) {
    //gelen birşey var ise içeri girer
    listItemObject.data.push(formInputData)
    formTutorial()
    console.log('Eklendi: ' + formInputData)
    event.target.elements.formInput.value='';
  }
}

function formTutorial() {
  var form = (
    <div>
      <h5 className="text-center44 text-uppercase mt-5">
        {listItemObject.title}
      </h5>
      <p>
        {listItemObject.listCounter} : {listItemObject.data.length}
      </p>

      {
        <ul>
          {listItemObject.data.map((temp) => {
            //toString: kendisine tanımlanan değişken değerini string olarak değiştirerek döndürür.
            return <li key={temp.toString()} > {temp} </li>
          })}
        </ul>
      }

      <form onSubmit={formOnSubmit}>
        <div className="row">

          <div className="col-md-6">
            <input type="text" className="form-control" name="formInput" />
          </div>

          <div className="col-md-6">
            <button className="btn btn-warning mr-3" style={{fontSize:".6rem"}} type="submit">
              Gönder
            </button>
            <button onClick={clearList} className="btn btn-danger" style={{fontSize:".6rem"}}>
              temizle
            </button>
          </div>
        </div>
      </form>
    </div>
  )
  ReactDOM.render(form, document.getElementById('todolistId'))
}

formTutorial()
///////////////////////////////////////////////////////////////////

//object
var object={};
//console.log(object); // => {}

//constructor(yapıcı)
let Student =function Student(adi,soyadi,yas){
  this.adi=adi;
  this.soyadi=soyadi;
  this.yas=yas;
  //console.log(this);
}

//instance
//hasOwnPropert: Bu objede verilen özellikler var mı yok mu ?
var instanceData=new Student("Adi44","Soyadi44",37);
//console.log(instanceData.hasOwnProperty("soyadi")); // => true

//Object Create: nesnemize yeni obje oluşturmak
var instanceData2=Object.create(Student);
//console.log(instanceData2);

//property
//prototype(kalıtımlamak): yapıcı fonksiyona yeni bir özellik veya fonksiyon eklemek.
Student.prototype.birthYear=function(){
  return new Date().getFullYear()-this.yas;
}
//console.log("Adı: "+instanceData.adi+"  Doğum Tarihi: "+instanceData.birthYear()); // => Adı: Adi44  Doğum Tarihi: 1985

//built-in-constructor: yeni özellikler eklemek
//string bir özellik ekledik
String.prototype.karesi=function(n){
  return n*n;
}
//console.log("X ".karesi(5)); // => 25

//mutlak değerli kendi string function'nını oluşturma
String.prototype.mutlakDeger=function (n){
  if(n>0) return n;
  else return -n;
}
//console.log("Mutlak".mutlakDeger(-5)); // => 5

//Verilen iki sayının küçük olanını bulan bir function yazma
String.prototype.kucukSayi=function(sayi1,sayi2){
  if(sayi1>sayi2) return sayi2;
  else return sayi1;
}
//console.log("Küçük Sayi".kucukSayi(5,14)); // => 5

//dizi
let dizi= ["js","jquery","bootstrap"];
//console.log(dizi); // => (3) ['js', 'jquery', 'bootstrap']

//dizideki elemanları silme
//array ile dizi ekledik
//splice():özellik ekleme veya silme
Array.prototype.arrayIndexDelete=function(data){
//indexOf:arama yapar  
let index = this.indexOf(data);
  if(index > -1){
      this.splice(index,1)// 1.parametre:indeks no 2.parametre:kaç tane silinecek
  }
  return this;
}
//console.log(dizi.arrayIndexDelete("js")); // => (2) ['jquery', 'bootstrap']

//repeat:tekrar yapma
//join:string birleştirme yapar
//console.log(new Array(4+1).join(1)); // => 1111 // +1 yazdık çünkü indeks no 0'dan başlıyor

//string tekrar eden
//dizi ile çalışmak gerekir
String.prototype.wordRepetition=function(m){
  let repeat=new Array(m+1).join(this); //m+1 yazdık çünkü index 0'dan başlar. 
  return repeat;
}
//array ile yeni dizi oluşturduk ve join ile içine nesneyi ekledik
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
const asenkron=()=>{
setTimeout(()=>{
  console.log("asenkron 2.satır");
},4000) //bu kısım dört saniye sonra çalışır
}
//asenkron();
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
function birinci(x1,x2,callback){
var multiple=x1*x2;
callback(multiple);
}

function ikinci(deger){
console.log(deger);
}
//birinci(4,5,ikinci); // => 20

//callback:
//2.örnek
//sıfır(0) başlasun kullanıcıdan alınan sayıya kadar döngüdeki sayılardan çift olanları ekranda gösteren callbackfunction yazalım ?
function evenNumberArray(callback){
var evenArray=[];
var pro =Number(prompt("Lütfen bir sayı giriniz"));
for(var i=0; i<=pro; i++){
if(i%2==0){
  evenArray.push(i); //push:ekleme yapar
}
}
callback(evenArray)
}

function showMessage(data){
console.log(data)
}

//evenNumberArray(showMessage); // => (4) [0, 2, 4, 6]
//callback hell

//es5=> anonymous function kullanılır
//Anonymous Function
var es5Anonymous=function(){
console.log("ES5");
};

//DİZİ ==> Map , Filter ,forEach
//dizinin içinde nesneler oluşturduk
var product=[
{productName:"Msi1",productPrice:1000},
{productName:"Msi2",productPrice:2000},
{productName:"Msi3",productPrice:3000},
{productName:"Msi4",productPrice:4000}
];
//console.log(product); // => (4) [{…}, {…}, {…}, {…}]

//Map(eşleşme):her bir elemana erişim sağlar
var es5Map=product.map(function(temp){ 
return   temp.productName;
});
//console.log(es5Map); // => (4) ['Msi1', 'Msi2', 'Msi3', 'Msi4']

//Filter
var es5Filter=product.filter(function(temp){
return temp.productPrice>=3000; // productPrice'i 3000 ve 3000'den büyük olanları döndür
});
//console.log(es5Filter); // => (2) [{…}, {…}] // Msi3 ve Msi4 döner

//OBJECT ==> this , forEach
var person={
name:"Hamit",
surname:"Mızrak",
java:["servlet","Jsp","JSF","Spring MVC","Spring Data","Spring Security"],
getJava:function(){
  console.log("dışardan çağırdım "+this.name); //=> dışardan çağırdım Hamit
  //3.katmandan birinci katmana erişemediğimiz için tanımladık
  var mecbur=this;
  //forEach:döngü şeklinde elemanları listeler
  this.java.forEach(function (temp){
    console.log(temp); // => servlet
                       //    Jsp
                       //    JSF
                       //    Spring MVC
                       //    Spring Data
                       //    Security
    //3.katmandan birinci katmana erişemediğimiz için yukarda this tanımladık artık name'e erişebiliriz.
    //console.log(mecbur.name); // => Hamit
  })
}
}
//person.getJava();

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
let adi = 'Hamit';

//Function(local) scope
function fullName() {
let adi = 'Hamit444';
let soyadi = 'Mızrak';
console.log('function scope: ' + ' adi: ' + adi + ' soyadı: ' + soyadi);
}
//fullName(); // => function scope:  adi: Hamit444 soyadı: Mızrak

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
let deneme = 'Merhabalar\nNasılsınız'
//console.log(deneme); // => Merhabalar
                   //    Nasılsınız

let deneme2 = `Merhabalar\nNasılsınız
JS Kursu
`
//console.log(deneme2); //=> Merhabalar
//                         Nasılsınız
//                         JS Kursu

// 2.6 GHZ: Saniyede 2.6 Milyar toplama işlemi yapar

//2-) Interpolation
let firstName=`Malatya`;
let lastName=`Battalgazi`;
//console.log("İl: "+firstName+ " İlçe: "+lastName); //=>İl: Malatya İlçe: Battalgaz
//console.log(`İl: ${firstName} İlçe: ${lastName}`); //=>İl: Malatya İlçe: Battalgaz

let student={
name:"Hamit",
surname:"Mızrak"
};
//console.log(student.surname); // => Mızrak
//console.log(`${student.surname}`); // => Mızrak

//ES6(3) Function
//(Parametresiz Function)
//Normal
function deneme11() {
console.log('Normal Function');
}
// deneme11(); //=>Normal Function

//ES5
var deneme22 = function () {
console.log('Anonymous Function'); //=>Anonymous Function
}
// deneme22();

//ES6
var deneme33 = () => {
console.log('Arrow Function'); //=>Arrow Function
}
// deneme33();

//(Parametreli Function)
//Normal Parametreli
function deneme44(adi) {
console.log('Normal Parametreli Function', adi);
}
//deneme44("Kayısı"); //=> Normal Parametreli Function Kayısı

//Anonymous Parametreli
var deneme55 = function (adi) {
console.log('Anonymous Function ', adi); 
}
// deneme55("Kayısı Reçeli"); //=>//=>Anonymous Function Kayısı Reçeli

//Arrow Function Parametre
//eğer curl brackets kullanmazsak return kullanmamıza gerek yok
let deneme66 = (x, y) => x + y
let value66=deneme66(6, 4);
// console.log(value66); //=>10

//examples
//benim gönderdiğim veriyi büyük yazsın
let upperValue = (data) => data.toUpperCase()
//console.log(upperValue("Kızılay")); //=> KIZILAY

//eğer curl brackets yazarsam return kullanılmalı
let deneme77 = (x, y) => {
return x + y;
}
let value77 = deneme77(6, 4);
// console.log(value77); //=> 10

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
let arr = [1,2,3,4,5,6,7,8,9];
//console.log(arr); //=>(9) [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let es5Filter=arr.filter();

//Filter ES5
var es5Filter44 = arr.filter(function(data) {
  return data%2 == 1;
})
//console.log(es5Filter44); //=>(5) [1, 3, 5, 7, 9]

//Filter ES6
let filterEs6 = arr.filter((data) => data % 2 == 0);
//console.log(filterEs6); //=>(4) [2, 4, 6, 8]

let product33 = [
  { proName: 'laptop-1', proPrice: 1000 },
  { proName: 'laptop-2', proPrice: 2000 },
  { proName: 'laptop-3', proPrice: 3000 },
];

//ES6
let proPriceMap2 = product33.map((data) => data.proPrice);
//console.log(proPriceMap2); //=>(3) [1000, 2000, 3000]

//argument: fonksiyona gelen dataların hepsini almak için kullanıyoruz
const argumentData = function () {
  console.log(arguments)
}
//argumentData(5,6,3,9,"Veri"); //=>Arguments(5) [5, 6, 3, 9, 'Veri', callee: (...), Symbol(Symbol.iterator): ƒ]

//ES5
//Class
var Stu=function (adi,soyadi,yas){
  //constructor
  this.adi=adi;
  this.soyadi=soyadi;
  this.yas=yas;
  //console.log(this);
}
var sonuc=new Stu("Hamit","Mızrak",37);
//console.log(sonuc); //=>Stu {adi: 'Hamit', soyadi: 'Mızrak', yas: 37}

//ES6 
//class
class PersonEs6 {
  //parametreli constructor
  //parametreler boş olursa verdiğimiz default değerler geri döner
  constructor(adi="adını girmediniz", soyadi="soyadını girmediniz", yas=0) {
    this.adi = adi;
    this.soyadi = soyadi;
    this.yas = yas;
    //console.log('constructor çalıştı');
  };
  //metot
  message(data){
    return `message: ${data} : adı: ${adi}`;
  }
}
// let sonuc2 = new classEs6()
let sonuc2 = new PersonEs6('Hamit',"Mızrak",37);
//console.log(sonuc2); //=>PersonEs6 {adi: 'Hamit', soyadi: 'Mızrak', yas: 37}
//console.log(sonuc2.message("Big Data 2556")); //=>message: Big Data 2556 : adı: Hamit

//extends:(tamamen super classtan gelen dataları kullanmak)
class Teacher extends PersonEs6{}
let sonuc3= new Teacher('Teacher Name', 'Teacher Surname', 37);
//console.log(sonuc3); //=>Teacher {adi: 'Teacher Name', soyadi: 'Teacher Surname', yas: 37}

//extends: anahtar kelime ile kalıtım alıyoruz (kendimize ait özellik ekleyelim)
//tekrardan constructor yazmalıyız
//super: bu metod kalıtım alınan sınıfın kurucusuna parametre geçirmek için kullanılır.
//Bir nesne sınıfında kalıtım alıyorsak super metodunu eklemek zorundayız.
//super anahtar kelimesini kullanarak kalıtım alınan nesneye ait metotlara ve özelliklere erişebiliriz.
class Teacher2 extends PersonEs6{
  //yeni özelliği constructor'a ekledik
  constructor(adi="adını girmediniz", soyadi="soyadını girmediniz", yas=0,hescode="hesCodes4521xc"){
    super(adi,soyadi,yas);//üst atadan gelen özellikler
    this.hescode=hescode; // yeni edindiği özellik
  }

  dataChangeExtends(data){
    return `data: ${data} Adı:${this.adi}  Soyadı:${this.soyadi}  Yaş:${this.yas}  HesCode:${this.hescode} `
  }
}
let sonuc4= new Teacher2('Teacher Name4', 'Teacher Surname4', 34,"HesCodeXYZ4");
//console.log(sonuc4);
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

class Teacher1{
  //constructor
  constructor(adi="default adi",soyadi="default soyadi"){
    this.adi=adi;
    this.soyadi=soyadi;
    //console.log("ilk constructor çalıştı");
  }

  //metot
  fullName(data){
    return `adi: ${this.adi} soyadi: ${this.adi }`
  }
}

//2.class
class TeacherRoom extends Teacher1 {}

//3.class
class TeacherSpecialRoom extends Teacher1 {
  constructor(adi="default adi",soyadi="default soyadi",okulKodu="Xyx126558"){
    //ata class'ın bileşenleri
    super(adi,soyadi);
    //kalıtım alan class'ın yeni bileşeni
    this.okulKodu=okulKodu;
   // console.log("XYz>ilk constructor çalıştı");
  }
}
// let teachInstance=new Teacher1(); //argüman vermezsek default değerler döner
let teachInstance=new Teacher1("Hamit","Mızrak");
//console.log(teachInstance); //=> {adi: 'Hamit', soyadi: 'Mızrak'}

let teachRoomInstance=new TeacherRoom("Hamit","Mızrak"); //ata class'dan kalıtımladık ama yeni özellik eklemedik
// console.log(teachRoomInstance); //=> {adi: 'Hamit', soyadi: 'Mızrak'}

let teachRoomSpecialInstance=new TeacherSpecialRoom("Hamit","Mızrak","mnp5263"); //ata class'dan kalıtımladık ve yeni özellikde ekledik
//console.log(teachRoomSpecialInstance); //=>{adi: 'Hamit', soyadi: 'Mızrak', okulKodu: 'mnp5263'}

//rest parameter: Dinamik bir dizidir.(Reactta yoktur)
//...degiskenAdi şeklinde yazılır.
//Parametre sınırı yoktur, kaç argüman verilirse onları işleme sokar.

//normal
function normalFunction(x,y){
  return x+y;
}
//console.log(normalFunction(1,2,3,4)); //=>3 (1+2)

//rest-1
function restFunction(x,y,...data){
  //console.log(data);
  console.log(x+y+data[0]+data[1]+data[2]);
}
//restFunction(1,2,3,4,5); //=>15

//rest-2
function restFunction2(...data){
  let sum=0;
  for(let temp of data){
    sum+=temp;
  }
  return sum;
}
//console.log(restFunction2(1,2,3,4,5,6,7,8,9,10)); //=>55

//destructuring(Var olan bir şeyin şeklini bozmak(iyi anlamda).) AMAÇ: daha okunabilir clean kodlar yazmak
//Gelen yapıları diziye atar.
//destructuring assigment ==> []=[];   ==> ({}={})
//normal
let x,y,z;
x=1;
y=2;
z=3;
//console.log(x,y,z); //=> 1 2 3

//1.YOL
[x,y,z]=[4,5,6];
//console.log(x,y,z); //=>4 5 6

//2.YOL
({x,y,z}={x:7,y:8,z:9})
//console.log(x,y,z); //=>7 8 9

//destructuring array ==> const []=diziAdi
const portData=["8080","5500","3306","5432"];

//1.YOL
const localhost=portData[0]; 
const liveServer=portData[1];
const mysql=portData[2];
const postgresql=portData[3];

// console.log(
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
const [localhost2,liveServer2,mysql2,postgresql2]=portData;
// console.log(
//   `
//   localhost: ${localhost2}  
//   live-server: ${liveServer2}  
//   mysql: ${mysql2}  
//   postgresql: ${postgresql2}  
//   `
//   )

//destructuring object  ==> const {}=objectAdi
//normal
let person44={
  adi1:"Hamit",
  soyadi1:"Mızrak",
  meslek1:"BM"
};
//console.log(person44);
//console.log(person44.adi1);
//console.log(person44.soyadi1);
//console.log(person44.meslek1);

const {adi1,soyadi1,meslek1}=person44;
//console.log(adi1+" "+soyadi1,meslek1); //=>Hamit Mızrak BM





