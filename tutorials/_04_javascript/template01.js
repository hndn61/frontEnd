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

// for-in yapısı: index kısmı verir
// for(let temp in dizi){
//     console.log(temp+"==>"+dizi[temp]);
// }
// Çıktısı: 0==>html5
//          1==>css3
//          2==>js

// for-of yapısı: elemanları verir
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

// join(): array içerisindeki bütün verileri birleştirerek string değer döndürür.
// Indeks vermezsek default değer olarak virgül atanır.
// dizi.join("logo");
// console.log(dizi); => html5logocss3logojs

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

// // Ders-8
// Dizi fonksiyonlarına devam

// join(): Array(dizi) içerisindeki bütün verileri birleştirerek string değer geri döndürür.
// Default olarak virgül değeri atanır.
// let joinTutorials= () => {
//        let dizi = ["java","html","css","js"];
//        console.log(dizi); // => ['java', 'html', 'css', 'js']

//        let kelime = dizi.join();
//        console.log(kelime); // => java,html,css,js

//        console.log(typeof kelime); // => string // typeof ile kelimenin tipine baktık

//        kelime = dizi.join("");
//        console.log(kelime); // => javahtmlcssjs

//        kelime = dizi.join("&");
//        console.log(kelime); // => java&html&css&js
// }
// joinTutorials();

// concat(): Birleştirme yapar. "+" işlemine göre daha performanslıdır.
// String ve dizi düzeyinde birleştirme yapar.
// function concatTutorials(){
//        let kelime1 = "Merhabalar";
//        let kelime2 = "Nasılsınız";

//        let birlestir1 = kelime1 + kelime2;
//        console.log("1. + ile birleştirme: "+birlestir1); // => 1. + ile birleştirme: MerhabalarNasılsınız

//        let birlestir2 = kelime1.concat(kelime2);
//        console.log("2. concat birleştirme: " + birlestir2); // => 2. concat birleştirme: MerhabalarNasılsınız

          //dizi birleştirmek
//        const dizi1 = ["1","2","3"];
//        const dizi2 = ["4", "5", "6"];

//        let diziBirlestirme1 = dizi1 + dizi2;
//        console.log(diziBirlestirme1); // => 1,2,34,5,6 (iki diziyi direk string olarak birleştirdi)

//        let diziBirlestirme2 = dizi1.concat(dizi2);
//        console.log(diziBirlestirme2); // => ['1', '2', '3', '4', '5', '6'] (iki diziyi dizi olarak birleştirdi)
// }
// concatTutorials();

// Dizilerde toplu ekleme veya çıkarma
// splice(): ekle veya sil
// splice(para1,para2,para3): 1.parametre => indeksi belirler
//                            2.parametre => kaç tane eleman silineceğini belirler
//                            3.parametre => eklenecek veriyi gösterir
// function spliceTutorials() {
//        let dizi4 = [1,2,3,4,5,6,7];
//        console.log(dizi4);

          // dizi4.splice(2,3); // 2.indeksten başlayarak 3 tane eleman siler
          // console.group(dizi4); // => [1, 2, 6, 7]

//        dizi4.splice(1,2,"eklenen1","eklenen2"); // 1.indeksten başlayarak 2 eleman siler ve verilen iki değeri ekler.
//        console.log(dizi4); // => [1, 'eklenen1', 'eklenen2', 4, 5, 6, 7] // 2 ve 3'ü sildi
// }
// spliceTutorials();

// slice(): Parçalama metodlarındandır. 
// Başlangıç ve bitiş indeksi vererek aralıktaki karakter dizisini alabiliriz.
// Başlangıç ve bitiş indekslerini negatif olarak da verebiliriz. En sağdaki karakter -1 ile başlar.
// slice() metoduna bitiş indeksini vermezsek sona kadar alır.
// slice() metodu ile substring() metodunun farkı; substring()'da negatif indeks kullanamıyoruz.
// function sliceTutorials(){
//        let eskiDizi = [1,2,3,4,5,6,7];
//        console.log(eskiDizi);

//        let yeniDizi = eskiDizi.slice(4); // verilen indeks ve sonrasını alır. Birinci parametre başlangıç indeksidir.
//        console.log(yeniDizi); // => [5, 6, 7]

//        let yeniDizi2 = eskiDizi.slice(1,4); // birinci parametre başlangıç(dahil), ikinci parametre bitiştir(dahil değil). İçinde kalan değerleri döndürdü.
//        console.log(yeniDizi2); // => [2, 3, 4]
// }
// sliceTutorials();

// Debug nedir?(Hata Ayıklama)
// Debug nasıl atılır?
// F5: debug konsolu kısayolu
// let sayi11=11;
// let sayi22=22;
// let sonuc=sayi11+sayi22;
// console.log(sonuc);

// Diziye parametre göndermek ve almak
// function diziBaslangic(){
          // let dizi = [1,2,3]; // okunabilirliği,hız açısından iyidir
//        let dizi= new Array(1,2,3);
//        return dizi;
// }
// function diziVeriAl(temp){
//        console.log(temp);
// }
// diziVeriAl(diziBaslangic());

// Date(zaman): yıl/ay/gün
// let dateTutorials=() => {
//        let tarih = new Date();
//        console.log(tarih); // => Thu Mar 24 2022 16:38:58 GMT+0300 (GMT+03:00)

         //get: bir şeyi çağırmayı sağlar.
         //console.log(tarih.getDate()); // => 24
         //console.log(tarih.getHours()); // => 16
         //console.log(tarih.getFullYear()); // => 2022

         //set: veriyi kendimize göre değiştirebiliriz.
         //console.log(new Date('2015-1-1')); // => Thu Jan 01 2015 00:00:00 GMT+0200 (GMT+03:00)
         //console.log(new Date(1000000000)); // => Mon Jan 12 1970 15:46:40 GMT+0200 (GMT+03:00)
         //tarih.setHours(22); // saati kendimize göre değiştirdik
         //console.log(tarih);
// }
// dateTutorials();

// let dateShow= () => {
          // let tarih = new Date();
          // let saat = tarih.getHours();
          // console.log(saat); // => 16(şuanki saati gösterir)

//        console.log(new Date().getHours()); // Bu da şuanki saati gösterir. Direk console içinde tanımladık ve çağırdık.
          // o anki zaman 20'den sonra ise az kaldı, 20'den önce ise çok zaman var yanıtını döndürür.
//        let ternary = (new Date().getHours() >= 20) ? "az kaldı" : "çok zaman var" ;
//        console.log(ternary); // => çok zaman var (20'den önceydi saat)
// }
// dateShow();

// OBJECT(NESNE)
// Bir varlığa verilen tüm özelliklerinin toplamıdır.
// Literal Object
// arrow function 
// let object= () => {
          //let array1=[];
//        let array1= new Array();
//        console.log(array1); // => [] // boş dizi oluşturduk.

          //let obj1={};
//        let obj1= new Object();
//        console.log(obj1); // => {} // boş bir nesne oluşturduk.

// }
// object();

// let object2= () => {
//        let person={};

          //objemize değerler verelim
//        person.firstName="Handan";
//        person.surName="Günaydın";
//        person.job="Computer Engineer";
//        person.middleName="Göbek adı";

//        console.log(person); // => {firstName: 'Handan', surName: 'Günaydın', job: 'Computer Engineer', middleName: 'Göbek adı'}
//        console.log(person.middleName.toUpperCase()); // => GÖBEK ADI
//        console.log(person.firstName.endsWith("n")); // => true
// }
// object2();

// objemize, değerleri içinde de verebilir(daha çok kullanılır)
// let object2= () => {
//        let person={
//               firstName:"handan",
//               lastName:"günaydın",
//               job:"computer engineer",
//               middleName:"göbek adı"
//        };
//        console.log(person); // => {firstName: 'handan', lastName: 'günaydın', job: 'computer engineer', middleName: 'göbek adı'}
          //Object'e yeni attributes ekleyebiliriz
//        person.yas=27; // yeni obje olarak yaş bilgisi ekler
//        console.log(person); // => {firstName: 'handan', lastName: 'günaydın', job: 'computer engineer', middleName: 'göbek adı', yas: 27}
//        console.log(person.lastName.toLowerCase()); // => günaydın
          //Object içinde verilen attributes içeriğinide değiştirebiliriz.
//        person.firstName="melek";
//        console.log(person.firstName); // => melek 
// }
// object2();

// Object Function: objenin içindeki özelliklere fonksiyon ekleyebiliriz.
// let object3= () => {
//        let person={
//               firstName:"handan",
//               lastName:"günaydın",
//               job:"computer engineer",
//               hesaplama: function(sayi1,sayi2){
//                      return sayi1+sayi2;
//               }
//        };
//        console.log(person.hesaplama(2,5)); // => 7 // (2+5)
// }
// object3();

// Nestned Object : obje içinde object
// Object Function-1
// let object3= () => {
//        let person={
//               firstName:"handan",
//               lastName:"günaydın",
//               yas:27,
//               job:"computer engineer",
//               hesaplama: function(sayi1,sayi2){
//                      return sayi1*sayi2;
//               },
//               damar:{
//                      damarAdi:"toplardamar",
//                      damarTuru:"tür 1452"
//               }
//        };
//        console.log(person); // => {firstName: 'handan', lastName: 'günaydın', yas: 27, job: 'computer engineer', hesaplama: ƒ, …}
//        console.log(person.damar.damarAdi); // => toplardamar
// }
// object3();

// Object Function-2
// let object3= () => {
//        let person={
//               firstName:"handan",
//               lastName:"günaydın",
//               yas:27,
//               job:"computer engineer",
//               hesaplama: function(sayi1,sayi2){
//                      return sayi1*sayi2;
//               },
//               damar:{
//                      damarAdi:"toplardamar",
//                      damarTuru:"tür 1452"
//               }
//        };
//        console.log(person); // => {firstName: 'handan', lastName: 'günaydın', yas: 27, job: 'computer engineer', hesaplama: ƒ, …}
//        console.log(person["damar"]["damarAdi"]); // => toplardamar // bu çağırma şekli pek tercih edilmez.
// }
// object3();

// // Ders-9
//Object Diziler
// let objectArray= () => {
//        let person={
                 //attributes
//               firstname: "Hamit",
//               job: "Computer Engineer",
//               middleName: "Göbek Adı",
//               lastName: "Mızrak",
//               hesaplama: function(sayi1,sayi2){
//                      return sayi1+sayi2;
//               },
                 //Object
//               damar: {
//                      damarAdi: "toplardamar",
//                      damarTuru: "tur 4521"
//               },
                 //Dizi
//               diller:['javascript','java','c#','python'],
//               dillerOzellikleri: {
//                      roles: "asd",
//               }
//        };
//        console.log(person);
//        console.log(person.diller[0]); // => javascript // diller dizisinin 0. indeksini döndürür
//        console.log(person.dillerOzellikleri.roles); // => asd
//        console.log(person.diller.join("")); // => javascriptjavac#python
// }
// objectArray();

// Template Literal ES6: Daha kolay işlem yapmamıza olanak sağlar.
// 1-MultiLine Literal
// 2-Interpolation Literal

// let templateLiteralTutorials= () => {
//        let normalString="Merhabalar çift tırnak";
//        console.log(normalString); // => Merhabalar çift tırnak

//        let normalString2='Merhabalar tek tırnak';
//        console.log(normalString2); // => Merhabalar tek tırnak

          //ES6(Ecma Script 6): Daha kolay işlem yapmamıza olanak sağlar.(altgr+96 backtick kısayolu)
//        let templateString=`Merhabalar backtick`;
//        console.log(templateString); // => Merhabalar backtick
// }
// templateLiteralTutorials();

// 1- Multi Line Template Literal
// let templateLiteralTutorials= () => {
          //escape characters: \n : yazıyı alt satıra yazar.
//        let normalString = 'Merhabalar nasılsınız\nAlt satır';
//        console.log(normalString); // => Merhabalar nasılsınız
          //                               Alt satır

          //ES6: backtick ile direk alt satıra yazmamız yeterlidir.
//        let templateString = `Merhabalar nasılsınız
// Alt satır`;
//        console.log(templateString); // => Merhabalar nasılsınız
          //                                 Alt satır
// }
// templateLiteralTutorials();

// 2- Interpolation: değişken çağırmak için => `${}`
// let templateLiteralInterpolation = () => {
//        let adi = 'Hamit', soyadi = "Mızrak";
//        console.log('Adı: '+adi+' Soyadi: '+soyadi); // => Adı: Hamit Soyadi: Mızrak

//        console.log(`Adı: ${adi} Soyadı: ${soyadi}`);// => Adı: Hamit Soyadı: Mızrak
// }
// templateLiteralInterpolation();

// 3- HTML Template
// templateLiteralHtmlTemplate = () => {
//        let adi = "Hamit",soyadi = "Mızrak";
       //Çalışmadı bu kod!
       // let html=`
       // "<ul>"+
       //        "<li>"+adi+"</li>"+
       //        "<li>"+soyadi+"</li>"+
       // "</ul>"
       // `

       //Çalışmadı bu kod!
//        let html=`
//        <ul>
//               <li>${adi}</li>
//               <li>${soyadi}</li>
//        </ul>
//        `

//        document.body.innerHTML()=html;
// }
// templateLiteralHtmlTemplate();

// Constructor-1
// function student(adi, soyadi, meslek,dogumTarihi){
       //this: Bu yapı demektir. Çalıştıracağımız şey ne ise onu çağırır.
       //Bulunduğumuz objeyi çağırmak veya root dizini çağırmak
//        this.adi = adi; //sağ taraftaki değerler functiondan gelen parametrelerdir.
//        this.soyadi = soyadi;
//        this.meslek = meslek;
//        this.dogumTarihi = dogumTarihi;
//        console.log(this); // student {adi: 'handan', soyadi: 'günaydın', meslek: 'mühendis', dogumTarihi: 1995}
//        this.yas = function (){
              //static tanımladık
              //return 2022-dogumTarihi;
              //dinamık çağırma
//               return new Date().getFullYear() - dogumTarihi;
//        }
// }
// let sonuc= new student("handan","günaydın","mühendis",1995);
// console.log(sonuc); // => student {adi: 'handan', soyadi: 'günaydın', meslek: 'mühendis', dogumTarihi: 1995, yas: ƒ}
// console.log(sonuc.yas()); // => 27

// let thisTutorials= () => {
       //this: bulunduğu function yapısını gösterir.
//        console.log(this); //windows yapısını çağırır.(Bulunduğumuz pencere)
//        let sayi= this;
//        alert(sayi); // => [object Window]
       // return this;
// }      
// thisTutorials();

// let thisFunctionTutorials = () => {
//        let person={
//               adi: "handan",
//               soyadi: "günaydın",
//               adSoyad: function(){
//                      return this.adi+" "+this.soyadi;
//               }
//        };
//        console.log(person); // => {adi: 'handan', soyadi: 'günaydın', adSoyad: ƒ}
//        console.log(person.adSoyad()); // => handan günaydın
// }
// thisFunctionTutorials();

//Event: bir olaydan sonra meydana gelebilecek başka olaylar.

function toplama(){
       alert("onclick Alert");
}
//toplama();

// let personTutorials = () => {
//        let person = {
//               adi: "Handan", 
//               soyadi: "Günaydın",
//               yas: 27,
//               meslek: "Mühendis"
//        };
//        console.log(person);
// }
// personTutorials();

//onmouse
//onkey
//onchange
//addEventListener

// DOM Nesneleri(document object model)
// Tarayıcı bir Web sayfasını yüklendiğinde DOM nesnesini de oluşturur. Yüklenen DOM, belge için bir dizi düğüm ve nesne sunmaktadır. Düğümler ile ayrıca olaylar ve tetikleyiciler eklenebilir. Özetle programlama dilini WEB sayfasına bağlamak için kullanılır.
// Dom: Javascript ile html veya css yapılarını yönetmeye denir.
// Dom yapılarını çağırırken document sayfasında çalışıyoruz.
// document: çalıştığımız html web sayfasıdır.

// Html etiketleri üzerinde düzenleme yapmak için kullanılan bazı document metodları:
// document.getElementById(id): id niteliği ile eşleşen ilk kaydı getirir.
// document.getElementsByName(name): name niteliği ile eşleşen tüm kayıtları dizi olarak  getirir.
// document.getElementsByTagName(etiketadı):etiket adı ile eşleşen tüm kayıtları dizi olarak getirir.
// document.getElementsByClassName(classAdı):class niteliği ile eşleşen tüm kayıtları dizi olarak getirir.
// document.querySelector(seçici): seçici ile eşleşen ilk kaydı getirir.
// document.querySelectorAll(seçici): seçici ile eşleşen tüm kayıtları dizi olarak getir.

// Document özellikleri ile de HTML nesnelerine liste olarak erişebilirsiniz. HTML belgesindeki nesneleri dizi listesi olarak çeker.
// document.anchors  ⇨ Sayfadaki tüm bağlantıları erişmek için kullanılır.
// document.body  ⇨Body nesnesine ulaşmak için kullanılır
// document.documentElement ⇨HTML kökünden itibaren tüm dökümana ulaşmak için kullanılır.
// document.embeds ⇨ eklentilere ulaşmak için kullanılır.
// document.forms ⇨ Sayfadaki formlara ulaşmak için kullanılır.
// document.head ⇨ head etiketine ulaşmak için kullanılır.
// document.images ⇨Sayfadaki resimlere ulaşmak için
// document.links ⇨ Sayfadaki linklere ulaşmak için kullanılır.(a href olan nesneler)
// document.scripts ⇨ Sayfada yüklenen Script dosyalarına ulaşmak için kullanılır.
// document.title ⇨ Sayfa başlığına ulaşmak için kullanılır.
// Not: body, head, documentElement, title tek bir nesneyi döndürür. 
// Diğerleri nesnelerden oluşan bir dizi döndürür.

// function changeParagraf(){
//        alert("onclick alert");

       //HTML
       //ID'ye göre çağırma
       //document.getElementById("paragraf_id").innerHTML="<b>Ben Dom'dan geldim</b>"; // => Ben Dom'dan geldim // html tag'ı olan b'yi görür ve paragrafı kalın yazar.
       //document.getElementById("paragraf_id").innerText="<b>Ben Dom'dan geldim</b>"; // => <b>Ben Dom'dan geldim</b> // html tag'ını görmez,düz metinlerde kullanılır.
       //document.getElementById("paragraf_id").innerHTML=Date(); // => Mon Mar 28 2022 01:43:51 GMT+0300 (GMT+03:00)

       //NAME'e göre çağırma. [0]: bunu unutma! id dışında, diğerleri birden fazla olabilir o yüzden burda belirtmemiz gerekir.(elements: s takısı olanlarda vardır)
       //document.getElementsByName("paragraf_name")[0].innerHTML="<b>Ben Dom'dan geldim</b>" // => Ben Dom'dan geldim

       //CLASS'a göre çağırma
       //document.getElementsByClassName("paragraf_class")[0].innerHTML="<b>Ben Dom'dan geldim</b>"; //=> Ben Dom'dan geldim

       //Tag'e göre çağırma
       //document.getElementsByTagName("p")[0].innerHTML="<b>Ben Dom'dan geldim</b>"; //=> Ben Dom'dan geldim
// }

// function changeParagraf(){
        //id
//        let valueParagraf=document.getElementById("paragraf_id");

        //HTML bileşenleri ile değiştirme
//        valueParagraf.innerHTML="<i>HTML</i>"

        //CSS bileşenler ile değiştirme
//        valueParagraf.style.color="blue";
//        valueParagraf.style.fontSize="25px";
//        valueParagraf.style.border="2px solid rgba(25,55,2,.8)";
// }

// Bunu .html dosyasında da yazabiliriz.(script içinde)
// function changeDiv() {
//        let valueParagraf = document.getElementById("div_dom");
//        valueParagraf.classList.add("cssAllDom"); // classList: sınıf ekleme,silme veya geçiş efekti ekleyebilir. // add: ekleme
//        valueParagraf.classList.add("cssAllDomHover"); // hover özelliği ekledim
// }

//DOM attributes
// getAttribute() metodu: html öğesinin bir niteliğinin değerini alabiliriz.
// çalışmadı bu kısım!
//let sonuc=document.getElementsByTagName("a")[0].getAttribute("href");
// querySelector: getElementsById'nin farklı bir yöntemidir. Ama class ile çalışacaksak başına ".", id ile çalışacaksak "#" koymalıyız.
// let sonuc=document.querySelector("#a_id").getAttribute("href");

// setAttributes() metodu: Html öğesine yeni bir nitelik ekleyebilir ve bu niteliğe istediğimiz değeri verebiliriz. 
// çalışmadı bu kısım!
// let sonuc=document.querySelector("#a_id").setAttribute("src","deneme.png");
//alert(sonuc);
// alert("deneme");

//Bunlara bak!

//callBackFunction

//promise

//listener

