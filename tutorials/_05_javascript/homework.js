////////////// ÖDEV1 ///////////////
// Kullanıcıdan Alınan (prompt) 2 sayı için Hesap makine uygulaması yapalım çıktıyı console.log ile yazdıralım.
// Hesap Makinesi
/*var birinciSayi=Number(prompt("Lütfen 1. sayıyı giriniz:"));
var ikinciSayi=Number(prompt("Lütfen 2. sayıyı giriniz:"));

console.log(birinciSayi+ikinciSayi);
console.log(birinciSayi-ikinciSayi);
console.log(birinciSayi*ikinciSayi);
console.log(birinciSayi/ikinciSayi);
console.log(Math.sqrt(birinciSayi));
console.log(Math.abs(birinciSayi));
console.log(Math.pow(birinciSayi,ikinciSayi));*/

/* Hesap Makinesi2
var birinciSayi=Number(prompt("Lütfen 1. sayıyı giriniz:"));
var ikinciSayi=Number(prompt("Lütfen 2. sayıyı giriniz:"));
var istenilenIslem=prompt("Lütfen istenilen işlemi giriniz:");

if(istenilenIslem=="toplama"){
    console.log(birinciSayi+ikinciSayi);
}
else if (istenilenIslem=="çıkarma") {
    console.log(birinciSayi-ikinciSayi);
}
else if (istenilenIslem=="çarpma") {
    console.log(birinciSayi*ikinciSayi);
}
else if (istenilenIslem=="bölme") {
    console.log(birinciSayi/ikinciSayi);
}
else if (istenilenIslem=="mutlak") {
    console.log(Math.abs(birinciSayi));
}
else if (istenilenIslem=="karakök") {
    console.log(Math.sqrt(birinciSayi));
}
else if (istenilenIslem=="üssü") {
    console.log(Math.pow(birinciSayi,ikinciSayi));
}
*/

// search ile indexOf arasındaki fark nedir ?
/* indexof() metodu ikinci parametre olarak aramanın başlanmak istediği indeks numarasını alabilir.
search() metodu ise, indexof() metodunda olduğu gibi aramaya başlanacak olan indeks numarasını almaz.
indexof() metodu regular expression ifadelerini([^]?@*)de almaz. 
console.log(kelime.indexOf("css3",6)); */

// JS'te exception handling(Hata yakalama)
/* Exception runtime da yani uygulama çalışırken meydana gelen hatalardır. 
Bu hataların bir kısmı tolere edilebilirken bir kısmı ise uygulamanın 
tamamen durmasına neden olur. Amacımız bu hataları yakalamak ve mümkünse tolere
edip uygulamanın çalışmaya devam etmesini sağlamaktır. 
try(), catch(),finally(), throw()
try() bloğu içerisine hata oluşturabilecek kodlar yazılır. catch() bloğu içerisine ise hata 
olduğu durumda çalıştırılacak kodlar yazılır. finally() bloğu hata olsa da olmasa da çalışmasını
istediğimiz kodları yazmak için kullanılır. throw() hata oluşturabilecek kodlarda istisnai durumlar 
için kullanılır. try() blogu içine yazılır. Hata yakalanırsa throw'un altndaki kodlar çalışmaz.
*/

// debugger(Hata ayıklayıcı) nedir?
/* Her yeni kod yazıldığında işin doğası gereği bazı hatalar meydana gelebilir. Bu hatalar
genellikle iki başlık altında toplanır. Bunlar: söz dizimi hataları, mantıksal hatalar,
Bu hataların birçoğunun bulunması zordur. Çünkü, genellikle yazdığımız programlarda oluşan hataların 
birçoğunda herhangi bir hata mesajı almayız. Bu yüzden hatanın nereden kaynaklandığını bulmak da o 
ölçüde zorlaşıyor. Ama artık tüm modern tarayıcılarda yerleşik bir JavaScript hata ayıklayıcı vardır.
JavaScript’te bulunan debugger anahtar kelimesi ile kodlarımızın içerisinde kesme noktaları oluşturabilir
ve tarayıcılarda bulunan yerleşik hata ayıklayıcılar ile kodlarımızı adım adım inceleyebiliriz. Böylece 
oluşan hataları nokta atışı tespit edebiliriz.
*/

// JS String metotlara çalışmak 

// JS split() nedir? ne için kullanıyoruz?
// Karakter dizisini belirtilen karakterden parçalara ayırarak bir dizi oluşturur.

// console.log(kelime.join()) ?
/* Join() metodu bir array içerisinde yer alan bütün elemanları birleştirerek string bir
ifade olarak geri döndürür. Varsayılan olarak dizi öğeleri string ile ayrılır.
*/

// console.log(kelime.replace()) ?
// replace() metodu ile belirtilen bir string bilgiyi başka bir string bilgi ile güncelleyebiliriz.
// replace() metodu bulduğu ilk karakteri istenen karakter ile günceller.
// replace(degisecekBilgi, yerineGelenBilgi)

// console.log(kelime.slice()) ?
// Parçalama metodlarındandır. 
// Başlangıç ve bitiş indeksi vererek aralıktaki karakter dizisini alabiliriz.
// Başlangıç ve bitiş indekslerini negatif olarak da verebiliriz. En sağdaki karakter -1 ile başlar.
// slice() metoduna bitiş indeksini vermezsek sona kadar alır.
// slice() metodu ile substring() metodunun farkı; substring()'da negatif indeks kullanamıyoruz.

// console.log(kelime.repeat()) ?
// String elemanını verilen sayı kadar tekrarlar.

///////////// ÖDEV2 /////////////////
// Kullanıcının girdiği sayıya göre haftanın günlerini gösteren algoritma yaz.
// switch-case kullan.
// let haftaGün= () => {
//     let sayi=Number(prompt("Sayi giriniz:"));
//     switch(sayi){
//         case 1:
//             console.log("Bugün günlerden Pazartesi.");
//             break;
//         case 2:
//             console.log("Bugün günlerden Salı.");
//             break;
//         case 3:
//             console.log("Bugün günlerden Çarşamba.");
//             break;
//         case 4:
//             console.log("Bugün günlerden Perşembe.");
//             break;
//         case 5:
//             console.log("Bugün günlerden Cuma.");
//             break;
//         case 6:
//             console.log("Bugün günlerden Cumartesi.");
//             break;
//         case 7:
//             console.log("Bugün günlerden Pazar.");
//             break;
//         default:
//             console.log("Lütfen 1<=x<=7 arasında bir sayı giriniz.");
//             break;
//     }
// }
// haftaGün();

// Vize-Final notu hesaplama programı yaz.(arrow function kullan.)
// vize%40 final%60 1-55:FF 56-60:CC 61-80:BB 81-100:AA
// let notHesaplama= () => {
//     let vizeNotu=Number(prompt("Vize notunuzu giriniz:"));
//     let finalNotu=Number(prompt("Final notunuzu giriniz:"));
//     let notOrtalama=(vizeNotu*(40/100)) + (finalNotu*(60/100));
//     if(notOrtalama >= 1 && notOrtalama <= 55){
//         console.log("Notunuz: FF");
//     } 
//     else if (notOrtalama >= 56 && notOrtalama <= 60) {
//         console.log("Notunuz: CC");
//     } 
//     else if (notOrtalama >= 61 && notOrtalama <= 80) {
//         console.log("Notunuz: BB");
//     } 
//     else if (notOrtalama >= 81 && notOrtalama <= 100){
//         console.log("Notunuz: AA");
//     }
//     else {
//         console.log("Yanlış vize-final notu girdiniz.");
//     }
// }
// notHesaplama();


// For ile while döngüsü arasındaki fark nedir?
// For döngüsü, programcının belirli sayıda yürütmesi gereken bir 
// döngüyü verimli bir şekilde yazmasına olanak tanıyan bir tekrar kontrol yapısıdır.
// For döngüsü, yineleme sayısı bilindiğinde kullanılabilir.
// Başlatma, döngüde bir kez gerçekleşir.
// While döngüsü, verilen koşul doğru olduğu sürece hedef ifadeleri yürüten 
// bir tekrar kontrol yapısıdır.
// While döngüsü, yineleme sayısı bilinmediğinde kullanılabilir.
// While döngüsünde, başlatma ifadesi döngünün içindeyse, döngü her yinelendiğinde 
// başlatma yapılır.

// 1-99 sayılar dahil 1<=x<=99 bu sayılardan içerde kaç tane tek sayı kaç tane çift sayı 
// olduğunu söyleyen programı yaz.
// let tekCift= () => {
//     let tekSayi=0;
//     let ciftSayi=0;
//     for(let i=1; i<100; i++){
//         if(i % 2 === 0){
//             ciftSayi+=1;
//         }
//         else{
//             tekSayi+=1;
//         }
//     }
//     console.log(tekSayi+" tane tek sayı vardır.");
//     console.log(ciftSayi+" tane çift sayı vardır.");
// }
// tekCift();
// İlk ve son değeri manuel alan kod.
// let tekCift= () => {
//     let ilkDeger= Number(prompt("Başlangıç değerini giriniz:"));
//     let sonDeger= Number(prompt("Bitiş değerini giriniz:"));
//     let tekSayi=0;
//     let ciftSayi=0;
//     for(let i=ilkDeger; i<(sonDeger+1); i++){ // ilk ve son değer dahil
//         if(i % 2 === 0){
//             ciftSayi+=1;
//         }
//         else{
//             tekSayi+=1;
//         }
//     }
//     console.log(tekSayi+" tane tek sayı vardır.");
//     console.log(ciftSayi+" tane çift sayı vardır.");
// }
// tekCift();



