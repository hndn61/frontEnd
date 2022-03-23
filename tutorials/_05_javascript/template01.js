// // Ders-5
// single commit
/* multiple commit */

// alert("Merhabalar external js");

// alert/windosw.alert: Web sitesinin mesajını gösterir.
// alert("popup1");

// windows.alert("popup2");

// Yazılan kod satırının çalışıp çalışmadığını gösterir.
// console.log("loglama");

// document: Bulunduğumuz sayfanın dökumanını gösterir.

// Ekrana yazı yazdırır.
// document.write("Javascript diline giriş yaptınız...")

// Variables(Değişkenler)
// var variablesName;

/* Camel case yapısı : ilk harfi küçük sonrasında gelen kelime harfi büyük yazılır, değişken ismi sayı ile başlayamaz, "-" ile ayrılamaz, "$" ile başlayabilir, "_" ile başlayabilir. */

// "" : string yapıdır, içinde kelimeleri barındırır.
// var personName61="Handan";
// console.log(personName61);

// var x1;
// var x2;
// var x3;
// x1=15;
// x2=25;
// x3=x1+x2; 
// console.log(x3); // ==> 40

// boolean: true/false
// var isLogin=true;
// console.log(isLogin); // ==> true

// Number: sayı
// String: kelime

// Matematikte kullanılan "," , javascript'de "." ya karşılık gelir.
// var x1=25.2;
// console.log(x1); // ==> 25.2

// dynamic type(global,local,sabit)

// Global: projenin her yerinde çalışır.
// var globalType=66;
// globalType=15;
// console.log(globalType); // ==> 15

// Local(ES6(2015)): sınırlı yerlerde çalışsın istiyorsak kullanırız.
// let localType=44;
// localType=14;
// console.log(localType); // ==> 14

// Conts(ES6(2015)): sabitler için çalışır.
// const sabit=3.14;
// console.log(sabit); // ==> 3.14

// Operators

// Logis Operators &&:ve ||:veya

// Mathematics Operators + - * / %(bölümünden kalan)
// var x1=9,x2=5;
// console.log((x1+x2)); // ==> 14
// console.log((x1-x2)); // ==> 4
// console.log((x1*x2)); // ==> 45
// console.log((x1/x2)); // ==> 1.8
// console.log((x1**x2)); // ==> 590449
// console.log((x1%x2)); // ==> 4

// Comparison Operators
// var x1=6,x2=3;
// =: atama
// ==: eşitlik
// ===: hem türüne bak hem eşitliğe
// >: büyük
// <: küçük
// >=: büyük eşitlik
// <=: küçük eşitlik
// ?: ternary operator
// console.log(x1=x2); // burada x2 değerini, x1 değerine atar ve x1 değerini çıktı alır=>3

// increment-deincrement operators

// increment
// var x1=10;
// console.log(x1++); // ++: arttırma işlemi yapar ama burada içerik aynı gelir ==>10.
// console.log(x1); // arttırdığını burada gösterir ==>11.

// deincrement
// var x1=12;
// console.log(x1--); // --: azaltma işlemi yapar. ==>12
// console.log(x1); // ==>11

// Postfix increment-deincrement operators
// var x1=10;
// console.log(++x1); // ==>11
// console.log(x1); // ==>11

// var x1=10;
// console.log(--x1); // ==>9
// console.log(x1); // ==>9

// 1byte= 8 bit (0 ve/veya 1 bit) 
// binary(ikilik)

// console.log(10+20); // ==> 30
// console.log("10"+"20"); // ==> 1020

// prompt: Kullanıcıdan girdi ister ve bu girdi string gelir.
// var x1=prompt("Lütfen 1.sayıyı giriniz:");
// var x1=prompt("Lütfen 2.sayıyı giriniz:");

// cast: Dönüştürme işlemi
// Number(): sayı yapar.
// String(): string yapar.
// var x1=Number(prompt("Lütfen 1.sayıyı giriniz:"));
// var x2=Number(prompt("Lütfen 2.sayıyı giriniz:"));
// var x3=x1+x2;
// console.log(x3);

// typeof: değişkenin türünü belirtir.
// var x1=10;
// console.log(typeof x1); // ==> number

// undefined: değişkene türünü vermeyince alınan hata
// var x1;
// console.log(x1); // ==> undefined

// NaN: Not A Number(sayı değil hatası verir)
// var x1=(prompt("Lütfen bir sayı giriniz");
// var x2=x1**x1;
// console.log(x2); ==> NaN

// Infinity
// var x1=5/0; //Sonsuz 
// console.log(x1) // ==> Infinity

// Math Fonctions: içinde matematik fonksiyonlarını barındırır.
// console.log(Math.PI); // pi sayısı ==> 3.141592653589793
// console.log(Math.E); // e değeri ==> 2.718281828459045
// console.log(Math.sqrt(16)); // karekök ==> 4
// console.log(Math.min(5,6,2,5,2525,-555)); // minimum sayı ==> -555
// console.log(Math.max(5,6,2,5,2525,-555)); // maksimum sayı ==> 2525
// console.log(Math.abs(-16)); // mutlak değer ==> 16
// console.log(Math.pow(2,5)); // üslü sayılar ==> 32
// console.log(Math.random()*4+1); // rastgele sayı ==> 2.3181837942589754
// console.log(Math.ceil(4.1)); // yukarı yuvarlamak ==> 5
// console.log(Math.floor(4.9)); // aşağı yuvarlamak ==> 4
// console.log(Math.round(4.4)); // .5 ve üstü yukarı, .5 altı aşağıya yuvarlar ==> 4

// Number

// hexadecimal: 16'lık taban(0124356789ABCDEF)
// var hexadecimal=0xFA;
// console.log(hexadecimal); // 10'luk tabanda karşılığı ==> 250

// binary: 2'lik taban(0-1)
// var binary=0b11;
// console.log(binary); // ==> 3 nasıl oldu?

// bilimsel gösterim
// var bilimsel=10e+5; // 5 birim sağa kaydırır
// console.log(bilimsel); // ==> 1000000
// e- : 5 birim sola kaydırır
// var bilimsel=10e-5;
// console.log(bilimsel); // ==> 0.0001

//Number
// var x1=Number("16");
// console.log(x1); // ==> 16

// toString: 10'luk sayıyı istenilen tabanalara çevirir
// var sayi=32;
// console.log(sayi.toString(2)); // ==> 100000
// console.log(sayi.toString(8)); // ==> 40
// console.log(sayi.toString(10)); // ==> 32
// console.log(sayi.toString(16)); // ==> 20

// !: true ise false, false ise true yapar.
// var sonuc=true; 
// console.log(!sonuc); // ==> false 

// isNaN: sayı değil mi?
// var isSayi=16/16;
// console.log(isNaN(isSayi)); // ==> false

// STRİNG
//let kelime=" html5 css3 js bootsrapt5";

// length: karakter uzunluğunu verir.
// console.log(kelime.length); // ==> 24 (Boşlukta bir karakterdir.)

// trim(): başındaki ve sonundaki boşlukları alır.
//console.log(kelime.trim()); // ==> html5 css3 js bootsrapt5 (başındaki boşluk yok)

// toUpperCase(): bütün karakterleri büyük yazar.
// console.log(kelime.toUpperCase()); // ==> HTML5 CSS3 JS BOOTSRAPT5
// kelime=kelime.toUpperCase();
// console.log(kelime); // ==> HTML5 CSS3 JS BOOTSRAPT5

// toLowerCase(): bütük karakterleri küçük yazar.
//console.log(kelime.toLowerCase()); // ==> html5 css3 js bootsrapt5

//native code: parantez yazmaksak

// charAt(): biz sayı veririz bize o sayıya karşılık gelen karakteri verir.
// console.log(kelime.charAt(7)); // ==> c

// substring(): string'i parçalar. Verilen değerden sonrasını alır.
// console.log(kelime.substring(6)); // ==> css3 js bootsrapt5
// console.log(kelime.substring(0,5)); // 0 ile 5 arasındaki indeksin karakterlerini getirir. 0 dahil, 5 dahil değildir. ==> html

// concat(): sonuna ekleme yapar.
// console.log(kelime.concat(" sonradan eklendim")); // ==>  html5 css3 js bootsrapt5 sonradan eklendim

// startsWith(): ne ile başladığını sorar. Doğru ise true, yanlış ise false yanıtını döndürür.
// console.log(kelime.startsWith(' ')); // ==> true (boşluk ile başlıyor doğru)

// endsWith(): ne ile bittiğini sorar. Doğru ise true, yanlış ise false yanıtını döndürür.
//console.log(kelime.endsWith('5')); // ==> true (5 ile bitiyor doğru)

// indexOf(): kaçıncı indekste olduğunu söyler. Soldan başlar aramaya.
// console.log(kelime.indexOf('css3')); // ==> 7

// lastIndexOf(): kaçıncı indekste olduğunu söyler. Sağdan başlar aramaya.
//let kelime=" html5 css3 js bootsrapt5 js";
//console.log(kelime.lastIndexOf('js')); // ==> 26

// search(): 
// console.log(kelime.search('css3')); // ==> 7

// // Ders-6
// escape characters
// back slash (\) : özel simgeleri yazmak için kullanırız.
// console.log("deneme"); // => deneme
// console.log("\" deneme"); // => " deneme

// Validation
// exception handling: hata yakalama mekanizması, istisnaları yakalar

//throw "sayıyı sıfıra bölemezsin";
// bilerek istisna gelmesini istersek

// try {
       //hata oluşturabilecek kodlar
//     let sayi=0/3; //mantıksal hata
//     console.log(sayi);
// } catch(error){
       //hata olursa burası devreye girer
//     console.log(error.message);
//     console.log(error.name);
// } finally{
       //hata olsada olmasada çalışır
//     console.log("Burası kesin çalışacak");
//     db.close();
//     socket.close();
// }

// try {
//     merhabalar
//     console.log("2.alan");
//     throw "referans yoktur";
// } catch (error) {
//     alert(error.message);
//     alert(error.name);
// }

// Function Yapıları

// 1.Function: parametresiz
// function deneme() {
//     let number1,number2;
//     number1=Math.round(Number(prompt("1.sayı")));
//     number2=Math.round(Number(prompt("2.sayı")));
//     console.log((number1+number2));
//     console.log((number1-number2));
//     console.log((number1*number2));
//     console.log((number1/number2));
// }
// İşlemleri yapması için çağırmamız gerekiyor. 
// deneme(); // => 16 8 48 3

// 2.Function: parametreli
// function deneme1(number1,number2) //parametre 
// { 
//     console.log((number1+number2));
//     console.log((number1-number2));
//     console.log((number1*number2));
//     console.log((number1/number2));
// }
// argüman ile fonksiyon çağrılır.
// deneme1(8,4); // => 12 4 32 2

// 3.Function: return
// Eğer bir değişkende kullanılmak istenirse return ile yazılır.
// function deneme3(number1){
//     let result=number1**number1;
//     return result;
// }
// let deger=deneme3(4);
// console.log(deger); // => 256 (4**4)

// 4.Function 
// anonymous function: isimsiz fonksiyon
// function (){
       //kodlar
// }

// 5.Function
// arrow function: function yapısınıda kullanmaz
// () => {
        //kodlar
// }

// 6.Function
// immediate function: hemen çalışmasını istersek yazarız.
// ()()

// function deneme4(){
//     console.log("Merhabalar normal fonksiyon");
// }
// deneme4(); // => Merhabalar normal fonksiyon

// let result2= function (){
//     console.log("Merhabalar anonymous fonksiyon");
// }
// result2(); // => Merhabalar anonymous fonksiyon

// let result3 = () => {
//     console.log("Merhabalar arrow fonksiyon");
// }
// result3(); // => Merhabalar arrow fonksiyon

// (function deneme5(){
//     console.log("Merhabalar immediate fonksiyon");
// })() // => Merhabalar immediate fonksiyon

// let sayi="1";
// console.log(typeof sayi); // => string

// Conditional(Şartlı yapılar)

// if/else yapısı
//let sayi=Number(prompt("Bir sayi giriniz:"));
// if(sayi===1){
//     console.log("Sayı 1'e eşittir.");
// }
// else{
//     console.log("Sayı 1'e eşit değildir.");
// }

// 7.Function
// Ternary Function: () ? : ;
// let ter= (sayi===1) ? "Sayı 1'e eşittir." : "Sayı 1'e eşit değildir." ; console.log(ter);

// if/else if/else yapısı
// let result4= () => {
//     let sayi=Number(prompt("Bir sayi giriniz:"));
//     if(sayi===1){
//         console.log("Sayı 1'e eşittir.");
//     }
//     else if (sayi===2) {
//         console.log("Sayı 2'ye eşittir.");
//     }
//     else if (sayi===3) {
//         console.log("Sayı 3'e eşittir.");
//     }
//     else if (sayi===4) {
//         console.log("Sayı 4'e eşittir.");
//     }
//     else if (sayi===5) {
//         console.log("Sayı 5'e eşittir.");
//     }
//     else if (sayi===6) {
//         console.log("Sayı 6'ya eşittir.");
//     }
//     else if (sayi===7) {
//         console.log("Sayı 7'ye eşittir.");
//     }
//     else if (sayi===8) {
//         console.log("Sayı 8'e eşittir.");
//     }
//     else if (sayi===9) {
//         console.log("Sayı 9'a eşittir.");
//     }
//     else if (sayi===10) {
//         console.log("Sayı 10'a eşittir.");
//     }else{
//         console.log("Sayı 1<=x<=10 dışındadır.");
//     }
// }
// result4();

// Kullanıcıdan bir sayı al, bu sayı negatif mi pozitif mi bulan fonksiyonu yaz.(arrow-ternary function kullan)
// let positifNegatif= () => {
//     let number1=Number(prompt("Lütfen sayı giriniz:"));
//     let result5= (number1<0) ? "negatif" : "pozitif" ; console.log(result5);
// }
// positifNegatif();

// Kullanıcının girdiği sayı tek mi çift mi bulan fonksiyon yaz.(anonymous function kullan)
// let even= function(){
//     let number=Number(prompt("Lütfen bir sayı giriniz:"));
//     if(number % 2 === 0){
//         console.log("Girilen sayı çifttir.");
//     } else{
//         console.log("Girilen sayı tektir.");
//     }
// }
// even();

// switch-case yapısı
// function result6(){
//     let sayi1 = Number(prompt("Lütfen bir sayı giriniz:"));
//     switch(sayi1){
//         case 1:
//             console.log("Sayı 1'e eşittir.");
//             break;
//         case 2:
//             console.log("Sayı 2'ye eşittir.");
//             break;
//         case 3:
//             console.log("Sayı 3'e eşittir.");
//             break;
//         case 4:
//             console.log("Sayı 4'e eşittir.");
//             break;
//         case 5:
//             console.log("Sayı 5'e eşittir.");
//             break;
//         case 6:
//             console.log("Sayı 6'ya eşittir.");
//             break;
//         case 7:
//             console.log("Sayı 7'ye eşittir.");
//             break;
//         case 8:
//             console.log("Sayı 8'e eşittir.");
//             break; 
//         case 9:
//             console.log("Sayı 9'a eşittir.");
//             break;
//         case 10:
//             console.log("Sayı 10'a eşittir.");
//             break;
//         default:
//             console.log('sayı 1<=x<=10 dışındadır');
//             break;        
//     }
// }
// result6();

// LOOP(Döngüler)
// Tekrar eden yapılar için kullanılır.

// For Döngüsü
// başlangıç: i=1
// bitiş: i<=10
// i++: arttırma
// i=i+1: arttırma
// i+=1: arttırma
// for(let i=1; i<=10; i+=2){
//     let sayi=Number(prompt(i+". sayı"));
//     console.log(sayi);
// }

// 1-10 arasında sayılar toplamını bulan döngüyü yaz.
// Bu sayılar arasındaki 4 sayısını dahil etmesin.
// arrow function ile yaz.
// let toplam= () => {
//     let sum=0; //başlangıç değeri
    // for(let i=1; i<=10; i++){
    //     if(i === 4){
    //         continue; //verilen değeri es geçer
//         }
//         if(i>10){
//             break; //döngüyü kırar
//         }
//         sum=sum+i;
//     }
//     console.log("Toplamları:" + sum);
// }
// toplam(); // => 51

// While Döngüsü
// let i=1;
// while(i<=5){
//     let sayi=Number(prompt(i+".sayı"));
//     console.log(sayi);
//     i+=1; //bunu yazmazsak döngü kısır döngüye girer
// } 

// Do/While Döngüsü
// let i=1;
// do {
    //ister şart sağlansın ister sağlanmasın kesinlikle 1 kere çalışır
//    console.log(i + " kere çalıştı.");
//    i++;
// } while(i<2); // => 1 kere çalıştı.

// // Ders-7
// Array(Diziler)
// let dizi1= []; //boş dizi oluşturma
// let dizi= ["html5","css3","js"];

// dizi.push() : Sona bir eleman eklemek
// dizi.unshift() : Başa bir eleman eklemek
// dizi.pop() : Sondan 1 eleman çıkarmak
// dizi.shift() : Baştan 1 eleman çıkarmak
// delete dizi[0] : İstenilen indis numarasındaki dizi elemanını silmek
// dizi.sort() : Küçükten büyüğe doğru sıralamak
// dizi.reverse() : Büyükten küçüğe doğru sıralamak

// console.log(dizi);
// console.log(dizi[8]); // => undefined
// console.log(dizi[2]); // => js
// console.log(dizi[dizi.length-1]); // => js (length: dizi uzunluğunu verir.)

// iterative for
// for(let i=0; i<dizi.length; i+=1){
//     console.log((i+1)+' '+dizi[i]); 
// } 
// Çıktısı: 1 html5
//          2 css3
//          3 js

// for-in yapısı
// for(let temp in dizi){
//     console.log(temp+"==>"+dizi[temp]);
// }
// Çıktısı: 0==>html5
//          1==>css3
//          2==>js

// for(temp of dizi){
//     console.log(temp);
// }
// Çıktısı: html5
//          css3
//          js

// Dizi Fonksiyonları

// EKLEME
// push(): sona bir eleman eklemek için kullanılır.
// dizi.push("javascript");
// for(temp of dizi){
//     console.log(temp);
// }
// Çıktısı: html5
//          css3
//          js
//          javascript

// unshift(): başa bir eleman eklemek için kullanılır.
// dizi.unshift("python");
// for(temp of dizi){
//     console.log(temp);
// }
// Çıktısı: python
//          html5
//          css3
//          js

// ÇIKARMA
// pop(): sondan bir eleman çıkarmak için kullanılır.
// dizi.pop();
// for (temp of dizi) {
//   console.log(temp);
// }
// Çıktısı: html5
//          css3

// shift(): baştan bir eleman çıkarmak için kullanılır.
// dizi.shift();
// for (temp of dizi) {
//   console.log(temp);
// }
// Çıktısı: css3
//          js

// Delete: istediğim indis numarasındaki dizi elemanını siler.
// delete dizi[1];
// for(temp of dizi){
//     console.log(temp);
// }
// Çıktısı: html5
//          undefined // bu değeri sildi ama geride kalıntı bırakır.
//          js

// sort(): küçükten büyüğe doğru sıralama yapar.
//let dizi1=[1,2,5,-8,2];
// dizi1.sort();
// for(temp of dizi1){
//     console.log(temp);
// }
// Çıktısı: -8
//          1
//          2
//          2
//          5

// reverse(): diziyi tersten yazar.
// dizi1.reverse();
// for(temp of dizi1){
//     console.log(temp);
// }
// Çıktısı: 2
//          -8
//          5
//          2
//          1

// dizi1.reverse();
// console.log(dizi1); // => [2,-8,5,2,1]

// join(): dizideki her bir elemana eklemek için(verilen değer aralarına koyup bende string hale geliyor)
// dizi.join("logo");
// console.log(dizi);
// bu kısım bende çalışmadı neden sor?

// ÖRNEKLER:

// Örnek1: 1.dereceden 2 bilinmeyenli denklem.
// Kullanıcıdan aldığımız 2 değişkeni hesaplattıralım.
// y=3x+5k; x ve k kullanıcıdan alınan sayılara göre hesaplama yapılacaktır.(Arrow function)
// let equationWithUnKnow=()=>{
//     let number1,number2,result;
//     number1=Number(prompt("1.sayı"));
//     number2=Number(prompt("2.sayı"));
//     result=3*number1+5*number2;
//     console.log(result);
// }
//equationWithUnKnow();

// Örnek2: Dereceyi fahrenhaya çeviren function. (Anonymous function)
// Kullanıcıdan alınan dereceyi Fahrenhata çeviren function. (Arrow Function)
// Formül: (dereceSayi * 9 / 5) + 32;
// let toFahrenhayt=function(){
//     let degree,result;
//     degree=Number(prompt("Lütfen dereceyi giriniz"));
//     result=(degree*9/5)+32;
//     console.log(result);
// }
// toFahrenhayt();

// Örnek3: Dört işlem
// 4+3*2(3:3-1*6+9:1+(3:3))

// Örnek4: password-repassword function (Normal Function) ternary

// Örnek5: Kullanıcının Girdiği Sayının Negatif mi, Pozitif mi Olduğunu Bulan function.(anonymous)

// Örnek6: 1'den 10'a kadar sayıların toplamı ancak 5'e bölünebilen sayılar hariç.
// continue
// let totalfiveExcluded=()=>{
//     let sum=0;//başlangıç bir değer: sıfır etkisiz toplama
//     for (let i = 1; i <= 10; i=i+1) {
//         if(i%5===0)
//             continue; // bu işlemi sadece atlar
//         sum+=i;
//     }
//     console.log("toplam: "+sum);
// }
// totalfiveExcluded();

// Örnek7: Kullanıcıdan alınan sayıya göre random sayılar oluştursun.
// 0-) ilk ve son sayının toplamı ?
// 1-) Toplamları
// 2-) Ortalaması
// 3-) Tek sayı toplamları
// 4-) Kaç tane Tek sayı 
// 5-) Çift sayı toplamları
// 6-) Kaç tane çift sayı
//Random
// let rndArray=()=>{
       //değişkenleri(variable)
//     let rndNumber,firstEndSum=0,number,array=[];
//     number=Number(prompt("Lütfen bir sayı giriniz"));
       //döngüde rastgele sayı oluşturmak
//     for (let i=0; i<number; i++){
//         rndNumber=Number(Math.round(Math.random()*9+1));
//         array[i]=rndNumber;
//     }
//     console.log(array);
//     firstEndSum=array[0]+array[array.length-1];
//     console.log(firstEndSum)
// }

//sonarQube
// rndArray();

// Örnek8: Kullanıcının Girdiği Sayının Faktöriyel hesaplama.

// Örnek9: Kullanıcıdan aldığımız kelimeyi tersine çeviren program.
// exam: bardak  ==> kadrab

// Örnek10: kullanıcı tarafından başlangıç,bitiş sayıları al ve bir döngüde devam etsin.
// s1-)  başlangıç, bitiş sayıların toplamı
// s2-)  başlangıç, bitiş çift sayıların toplamı
// s2-)  başlangıç, bitiş tek sayıların toplamı
// s3-)  başlangıç, bitiş sayıların toplamı ancak 5'e bölünebilen sayılar hariç































































































































