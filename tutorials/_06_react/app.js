//root
var root = document.getElementById("root");
//document.getElementById("root");

//hoisting: değişkeni sona yazıyoruz
// deneme="merhabalar";
// let deneme;

//global scope
//Program içerisinde fonksiyonların dışında tanımlanan 
//ve her yerden erişilebilen scope tipidir.
//Global Scope’da tanımlı bir değişkene dosya içerisinde her 
//yerden erişilebilir. Bu değişkenlere de global değişken adı verilir. 
// var globalScope="global değişken";
// let globalFunction=(p1)=>{
//   p1+=globalScope
//   console.log(p1);
// }
//local scope (FunctionScope)
//Değişken bir fonksiyon içerisinde tanımlanmışsa bunun kapsamına Local 
//Scope adı verilir. Tanımlanan değişken de bir local değişkendir. 
// let functionScope=(p1)=>{
//   var localScope="local değişken";
//   p1+=localScope;
//   console.log(p1)
// }
// functionScope("nasılsın "); //=> nasılsın local değişken
// console.log(localScope); // local scope olduğu için fonksiyon dışında erişemeyiz hata verdi.

//var,let,const
//var:aynı değişken isminde farklı bir değişken yazabiliriz.
//let:aynı değişken isminde farklı bir değişken yazamayız.

//Template literal
// let number1="number1";
// let templateLiterallMultiLine=`template literal
// multi-line`;
// console.log(templateLiterallMultiLine);
// let templateLiteralInterpolation=`Adım : ${number1}`;


//WWW(WORD WİDE WEB)
//ESMASCIPT:ECMA international tarafından standartlaştırılmış bir betik dilidir.
//Js standart olması için kuruldu.
//TypeScript: Microsoft geliştiriyor, açık kaynaklı JavaScript'in bir üst kümesidir.
//JavaScript'in tüm özelliklerini içerir.
//Typescript uzantılıdır.
//Typescript'in hata denetimi vardır.
//Sınıf tabanlı objeler oluşturabiliriz.

// var variable1,variable2,variable3,variable4;
// var variable1="Html5";
// variable2="Css3";
// variable3="Js";
// variable4="React";

// var object={
//     variable1:"Html5",
//     variable2:"Css3",
//     variable3:"Js",
//     variable4:"React"
// };
//console.log(object);

//react yorumlama satırı {}
//react class => className

//template
//birden fazla tag kullanmak istersek div içinde yazmalıyız
//class=>className artık
// var template =
// (
//     <div>
//         <h1>Başlık</h1>
//         <p className="text-danger">Lorem ipsum dolor sit amet.</p>
//         <ul className="list-group">
//             {/* JSX Expression */}
//             <li className="list-group-item active">{object.variable1}</li>
//             <li className="list-group-item">{object.variable2}</li>
//             <li className="list-group-item">{object.variable3}</li>
//             <li className="list-group-item">{object.variable4}</li>
//         </ul>
//     </div>
// );

//ReactDOM
//Sınıf içinde render() fonsiyonu özel bir fonksiyondur. Sınıfın çağrıldığı yerde return içerisinde bulunan veriyi döner. 
//Bunun dışında ki bir yerden ekrana herhangi bir veri döndürülmez. Aslında bu sınıf bizim için aynı zamanda bir komponenttir.
//React client-side ve server-side olmak üzere iki tür render işlemini destekler. 
//ReactDOM.render() ilettiğiniz konteyner elemanının içeriğini kontrol eder. 
//İlk çağrıldığında, içerisindeki bütün DOM elemanları değiştirilir. Daha sonra yapılan çağrılar, etkili güncellemeler için React'in DOM fark bulma algoritmasını kullanır.
//ReactDOM.render(template,root);

//Object
//var deneme55={};
//console.log(deneme55);

//Constructor
//let Student=function StudentFunction(adi,soyadi,yas){
  // this.adi=adi;
  // this.soyadi=soyadi;
  // this.yas=yas;
  //console.log(this);
//}

//instance(new)
// var instanceValue=new Student("handan","günaydın",27);
// console.log(instanceValue); // => StudentFunction {adi: 'handan', soyadi: 'günaydın', yas: 27}

//hasOwnProperty(): hasOwnProperty metodunun anlamı adından da anlaşılacağı üzere objemde o özelliğin olup olmadığını kontrol edip boolean bir değer döndürmektedir.
//console.log(instanceValue.hasOwnProperty("soyadi")); // => true

//prototype(kalıtımlamak)
//prototype: yapıcı fonksiyona yeni bir özellik veya fonksiyon eklemek için kullanırız.
// Student.prototype.birtDay=function(){
//   return 2022-this.yas;
// }
// console.log("Doğum tarihi: "+instanceValue.birtDay()); // => Doğum tarihi: 1995

//object create: nesnemize yeni obje oluşturduk 
// var instanceValue2=Object.create(Student);
// console.log(instanceValue2);
// instanceValue2.meslek="mühendis";
// console.log(instanceValue2); // => Function {meslek: 'mühendis'}

//built-in constructor: yeni özellikler ekleme
// String.prototype.kendiFunctionimKare=function(data){
  //alert(Math.pow(data,2));
//   return Math.pow(data,2); 
// }
// console.log("deneme".kendiFunctionimKare(4)); //=>16

//Callbackfunction
//promise
//call aply bind

