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
// Karakter dizisini(stringi) belirtilen karakterden parçalara ayırarak bir dizi oluşturur.

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

///////////// ÖDEV3 /////////////////
// 1- S.O.L.I.D nedir?
//    Solid yapısı nedir?
//    Solid yapısı neden kullanılır?
//    Solid yapısına bir örnek verin.
// Her yazılımcının bilmesi gereken S.O.L.I.D. yazılım geliştirmenin
// temel prensipleri olarak kabul edilmektedir. SOLID yazılım prensipleri;
// geliştirilen yazılımın esnek, yeniden kullanılabilir, sürdürülebilir ve
// anlaşılır olmasını sağlayan, kod tekrarını önleyen ve Robert C. Martin 
// tarafından öne sürülen prensipler bütünüdür. Kısaltması Michael Feathers
// tarafından tanımlanan bu prensiplerin amacı;
// ► Geliştirdiğimiz yazılımın gelecekte gereksinimlere kolayca adapte olması,
// ► Yeni özellikleri kodda bir değişikliğe gerek kalmadan kolayca ekleyebileceğimiz,
// ► Yeni gereksinimlere karşın kodun üzerinde en az değişimi sağlaması,
// ► Kod üzerinde sürekli düzeltme hatta yeniden yazma gibi sorunların yol açtığı zaman
//   kaybını da minimuma indirmektir.
// Bu prensipler uygulanarak uygulamalarımızın büyürken, karmaşıklığın da büyümesinin
// önüne geçmiş oluruz. “İyi kod” yazmak için bu prensiplere uygun yazılım geliştirmelisiniz.
// S-Single-responsibility principle(Tek sorumluluk prensibi)
// O-Open-closed principle(Açık-kapalı prensibi)
// L-Liskov substitution principle(Liskov yer değiştirme prensibi)
// I-Interface segregation principle(Arayüz ayırma prensibi)
// D-Dependency Inversion Principle(Bağımlılığı tersine çevirme prensibi)

// S(Single-responsibility principle): Bir sınıf (nesne) yalnızca bir amaç uğruna 
// değiştirilebilir, o da o sınıfa yüklenen sorumluluktur, yani bir sınıfın(fonksiyona da
// indirgenebilir) yapması gereken yalnızca bir işi olması gerekir.
// https://gokhana.medium.com/single-responsibility-prensibi-nedir-kod-%C3%B6rne%C4%9Fiyle-soli%CC%87d-c8b1602be602

// O(Open-closed principle): Bir sınıf ya da fonksiyon halihazırda var olan özellikleri
// korumalı ve değişikliğe izin vermemelidir. Yani davranışını değiştirmiyor 
// olmalı ve yeni özellikler kazanabiliyor olmalıdır.
// https://gokhana.medium.com/open-closed-prensibi-nedir-kod-%C3%B6rne%C4%9Fiyle-soli%CC%87d-679619d5376a

// L(Liskov substitution principle): Kodlarımızda herhangi bir değişiklik yapmaya gerek 
// duymadan alt sınıfları, türedikleri(üst) sınıfların yerine kullanabilmeliyiz.
// https://gokhana.medium.com/liskov-substitution-prensibi-nedir-kod-%C3%B6rne%C4%9Fiyle-soli%CC%87d-3cfc1cd63c1a

//  I(Interface segregation principle): Sorumlulukların hepsini tek bir arayüze toplamak
// yerine daha özelleştirilmiş birden fazla arayüz oluşturmalıyız. Yani her farklı sorumluluğun
// kendine özgü bir arayüzü olması gerekmektedir. Böylece interface’i kullanan kişide sadece
// ihtiyacı olanlarla ilgilenmiş olur.
// https://gokhana.medium.com/interface-segregation-prensibi-nedir-kod-%C3%B6rne%C4%9Fiyle-soli%CC%87d-ac0fd6812ecf

// D(Dependency Inversion Principle): Sınıflar arası bağımlılıklar olabildiğince az olmalıdır 
// özellikle üst seviye sınıflar alt seviye sınıflara bağımlı olmamalıdır. Bir sınıfın, metodun
// ya da özelliğin, onu kullanan diğer sınıflara karşı olan bağımlılığı en aza indirgenmelidir.
// Bir alt sınıfta yapılan değişiklikler üst sınıfları etkilememelidir. Yüksek seviye sınıflarda
// bir davranış değiştiğinde, alt seviye davranışların bu değişime uyum sağlaması gerekir. Ancak,
// düşük seviye sınıflarda bir davranış değiştiğinde, üst seviye sınıfların davranışında bir
// bozulma meydana gelmemelidir. Dependency Inversion, yani üst sınıflar, alt seviyeli sınıflara
// bağlı olmamalı, çözüm ise her ikisi de soyut kavramlar üzerinden yönetilebilmelidir. Yüksek
// seviye ve düşük seviye sınıflar arasında bir soyutlama katmanı oluşturabiliriz.
// Üst Seviye Sınıflar -> Soyutlama Katmanı -> Düşük Seviye Sınıfları
// https://gokhana.medium.com/dependency-inversion-prensibi-nedir-kod-%C3%B6rne%C4%9Fiyle-soli%CC%87d-b61296523565

// 2- D : bu kısmı slayt yap.

// 3- Design Pattern(Tasarım Modeli) nedir?
// Design Pattern, yazılım geliştiricilerinin yazılım geliştirirken karşılaştıkları sorunların
// genel çözümleridir. Yazılım tasarımında ortaya çıkan yaygın sorunlara karşı en basit ve en
// efektif biçimde yeniden kullanılabilir çözümler sağlar.
// Temelleri 1970 yılında ilk olarak mimarlar tarafından atılan, 1994 senesinde Dörtlü Çete
// (Gang of Four) tarafından yayınlanan kitap ile popülarite kazanarak design patterns 
// yazılımda kullanılmasında dönüm noktası olmuştur. Dörtlü Çete kitaplarında da 23 adet
// Design Patterns’i konu almıştır.
// Ancak bu sayı günümüzde çok daha fazladır. Proje geliştirirken kendi design patternizi
// oluşturabilir ve kendi çözümünüzü bulabilirsiniz. Ancak var olan çözümleri bilip uygun
// olan yerde kullanmak sizin için en doğrusu olacaktır. Tasarım yaparken bir problem ortaya
// çıkarsa, hangi yolu kullanarak çözebilirim diye düşünülmeli, ve uygun pattern(kalıp) bulunmalıdır.
// ► Bilinen problemler için genel bir çözümdür ancak ihtiyaçlarınıza göre uyarlanmıştır. Belirli bir
// soruna bağlı olmayan bir biçimde belgelenmiş genel çözümler sağlar.
// ► Kanıtlanmış çözümlerdir.
// ► Etkileyicidirler ve işlerin bakımını kolaylaştırırlar.
// ► Birçok geliştirici Design Patterns'a aşina olduğu için bunun bir tür geliştirme standardı olduğunu
// söyleyebiliriz.
// ► Design patterns, genelde Nesne Tabanlı Programlama (Object Oriented Programming) için kullanıldığı
// düşünülüyor olsa da dilden ve programlama paradigmalarından bağımsızdır. 
// Yani farklı bir paradigma için de çözümler üretilebilir. Belirli bir tasarımı
// projede kullanmak istediğiniz dilde kolaylıkla uygulayabilirsiniz.
// Design patterns, doğrudan koda dönüştürülebilen bitmiş bir tasarım değildir. 
// Birçok farklı durumda kullanılabilecek bir sorunun nasıl çözüleceğine ilişkin
// bir açıklama veya şablondur. 
// Design Pattern'e Neden İhtiyaç Duyarız?
// -Design Patterns, test edilmiş, kanıtlanmış geliştirme paradigmaları
// sağlayarak geliştirme sürecini hızlandırabilir.
// -Kodunuzu, daha basit tutmak gerektiğinde kodu daha anlamlı ve daha
// az karmaşık hale getirmeye yardımcı olurlar. 
// -Büyük sorunlara neden olabilecek ince sorunları önlemeye yardımcı
// olur ve ayrıca kod okunabilirliğini artırır.
// -Ortak bir programlama sorununa karşı standart bir çözüm işlemi,
// yazılımın büyük ölçekte yeniden kullanılmasını sağlar.
// Design Pattern Kategorileri:
// Creational Patterns (Yaratımsal Kalıplar): Nesnelerin oluşturulmasında ve yönetilmesinde
// kullanılan bir desendir. Bu program akışında hangi nesneye ihtiyaç varsa onu oluşturmada 
// esneklik ve kolaylık sağlar.
// Structural Patterns (Yapısal Kalıplar): Birden fazla sınıfın bir işi yerine getirirken
// nasıl davranacağını belirlemek için kullanılan desenlerdir. 
// Behavioral Patterns (Davranışsal Kalıplar): Nesnelerin birbirleri ile ilişkisini 
// düzenleyen desendir.
// https://www.argenova.com.tr/design-pattern-tasarim-kaliplari-nedir#:~:text=Design%20Pattern%2C%20yaz%C4%B1l%C4%B1m%20geli%C5%9Ftiricilerinin%20yaz%C4%B1l%C4%B1m,bi%C3%A7imde%20yeniden%20kullan%C4%B1labilir%20%C3%A7%C3%B6z%C3%BCmler%20sa%C4%9Flar.

// 4- UML(Unified Modeling Language(Birleşik Modelleme Dili)) Diyagramı nedir?
// UML, bir sistemin tasarımını görselleştirmek için yazılım mühendisliği alanında
// genel amaçlı modelleme dilidir. Yazılı bir dil değildir. Farklı amaçlar için kategorilere
// ayrılmış olsa da, genel itibariyle modelleme için kullanılır. 1995 yılında, yazılımlarda
// bir standart yaklaşım oluşturmak için geliştirilmiştir. Yani UML diyagramları ile önceden
// modellediğiniz bir yazılım projesini, modele uygun olacak şekilde herhangi bir dil ile
// geliştirebiliyorsunuz. Bu da yazılım mühendisleri arasında ortak bir dil oluşturuyor. 
// İlk çıktığı zamandan beri sürekli geliştirme göstererek, birçok farklı dala ayrılmıştır.
// Neden UML?
// Hataların kolaylıkla fark edilip en düşük seviyeye indirgenmesi.(Risk, zaman, maliyet)
// Kodlama kolaylığı sağlar.
// Kullanılan tekrar kod sayısı ayırt edilebilir bu sayede verim sağlanır.
// Mantıksal hataların minimum seviyeye düşürülmesini sağlar.
// Geliştirme maliyetinin düşmesini sağlar.
// Resmin tamamının görülmesini sağlar.
// UML diyagramları ile yazılım tamamını görebileceğimiz için verimli bellek kullanımı sağlanabilir.
// Karmaşık sistemlerde değişiklik yapmayı kolaylaştırır.
// UML ile dokümanlandırılmış kodları düzenlemek daha az zaman alacaktır
// UML diyagramlarını kullanan yazılımcılar aynı dili konuşacaklarından kolay iletişim sağlanır.

// 5- Heap memory, Stack memory nedir?
// Stack Memory, işlemcilerin register bilgilerinin tutulduğu yerdir. Burada programınızla ilgili bilgiler
// (örneğin; lokal değişkenler, referans değişkenler vs) yer almaktadır. Bu memory, geliştirici tarafından
// değil, compiler tarafından yönetilir. Stack’teki bilgiler kodunuzun derleme aşamasında, direk bellek
// içine yerleştirildiği için erişimi oldukça hızlıdır.
// Heap Memory, bellek üzerinde yer tahsisi yapılan belli bir bölümdür. Bu yer, bellek üzerinde “malloc”
// fonksiyonu aracılığıyla tahsis edilir ve heap üzerinde allocate edilen(yer tahsisi yapılan) bellek “free”
// lenerek tekrar kullanım için serbest bırakılır. Heap’teki bellek kullanımı compiler tarafından değil,
// geliştiriciler tarafından kontrol edilir. Karmaşık programlar oluştururken, genellikle büyük bir bellek
// alanına ihtiyaç duyarız. Bu durumda Heap Memory kullanırız. Heap üzerinde allocate ettiğimiz bellek
// operasyonuna “dynamic memory allocation” adı verilir.
// İkisi arasındaki en temel fark; Stack Memory’deki değerler son giren ilk 
// çıkar mantığına göre tutulurken, Heap Memory’de bu durum rastgeledir(random).
// Programlarımızda bu iki belleği birbirinden olabildiğince ayırırız.
// Stack bellekten statik olarak yer tahsisi için kullanılırken, Heap dinamik 
// olarak yer tahsisi etmeyi sağlar. Her ikisi de Ram bölgesinde bulunur. Stack'te yer alan veriler
// direk bellek içine yerleştirilir dolayısıyla erişimi çok hızlıdır. Heap ise runtime (çalışma zamanı)
// anında kullanılırlar ve dağınık bir bellek göz yapısı olduğu için erişimi stack kadar kolay olmaz 
// dolayısıyla yavaş çalışır. Stack bellekteki veri hemen silinirken Heap bellekteki verinin silinmesi
// Garbage Collector’a (Çöp toplama mekanizmasına) bağlıdır. Stack alanı sınırlı olduğundan çok büyük
// sayıda ve büyük tiplerde veri atanması belleğin dolmasına sebep olabilir.
// Stack veri yapısına üst üste dizili tabaklar örnek verilebilir. Alttaki bir tabağı almak istediğinizde
// nasıl ki üstündeki tabakları da indirmeniz gerekiyorsa, stack veri yapısında da aradaki bir veriyi
// alabilmek için öncelikle üsttekileri çekmek gerekiyor.
// Kullanacağınız yerin boyutunu tam olarak biliyorsanız Stack, ihtiyacınız olan boyutu tam olarak
// bilmiyorsanız Heap kullanımı daha mantıklı bir tercih olacaktır.

// 6- Debug nedir, debug nasıl atılır?
// Bug, donanım veya yazılımla ilgili beklenmeyen herhangi bir sorunu tanımlamak için kullanılan
// genel bir terimdir. Bug’lar göz ardı edilebilecek küçük sorunlardan yazılımın kullanılmasını
// imkansız hale getirecek büyük sorunlara kadar ürün performansı üzerinde kapsamlı bir etkiye
// sahip olabilir. Her iki durumda da, kullanıcı deneyimini iyileştirmek için bug’lar detaylı
// şekilde ele alınarak düzeltilmelidir. Çünkü birçok bug, bir ürünün performansını ve 
// işlevselliğini etkileyerek kullanıcı deneyimini aşağılara çekebilir. Özellikle çökme gibi
// en yaygın bug türlerinden biri gerçekleşirse, yazılım beklenilen gibi çalışmayı bırakır ve
// muhtemelen bir eylemin ortasında kapanarak çökme meydana gelir. 
// Debug yazılımdaki bug‘ların yani hataların kodlar üzerinden adım adım gidilerek bulunması ve 
// giderilmesi işlemine denir.

// ÖRNEKLER:
// Örnek1: 1.dereceden 2 bilinmeyenli denklem.
// Kullanıcıdan aldığımız 2 değişkeni hesaplattıralım.
// y=3x+5k; x ve k kullanıcıdan alınan sayılara göre hesaplama yapılacaktır.(Arrow function)
// let birDerDenk= () => {
//     let birinciB= Number(prompt("Birinci bilinmeyen değeri giriniz:"));
//     let ikinciB= Number(prompt("İkinci bilinmeyen değeri giriniz:"));
//     let y=3*birinciB+5*ikinciB;
//     console.log("y = "+y);
// }
// birDerDenk();

// Örnek2: Dereceyi fahrenhayta çeviren function. (Anonymous function)
// Kullanıcıdan alınan dereceyi Fahrenhayta çeviren function. (Arrow Function)
// Formül: (dereceSayi * 9 / 5) + 32;
// let fahrenhayt= () => {
//     let derece= Number(prompt("Derece giriniz:"));
//     let fah= (derece*9/5)+32;
//     console.log(derece+" derece: "+fah+" fahrenhayttır.");
// }
// fahrenhayt();

// Örnek3: Dört işlem
// 4+3*2(3:3-1*6+9:1+(3:3))
// let dortIslem= () => {
//     let sonuc= 4+3*2*(3/3-1*6+9/1+(3/3));
//     console.log(sonuc);
// }
// dortIslem();

// Örnek4: password-repassword function (Normal Function) ternary
// function password(){

// }

// Örnek5: Kullanıcının girdiği sayının Negatif mi, Pozitif mi olduğunu bulan function.(anonymous)
// let pozitifNegatif= function () {
//     let sayi;
//     sayi=Number(prompt("Bir sayı giriniz:"));
//     if(sayi>=0)
//         console.log("Girilen sayı pozitiftir.");
//     else
//         console.log("Girilen sayi negatiftir.");
// }
// pozitifNegatif();

// Örnek6: 1'den 10'a kadar sayıların toplamı ancak 5'e bölünebilen sayılar hariç.
// continue
// let sonuc= () => {
//     let toplam=0;
//     for(let i=1; i<=10; i++){
//         if(i%5===0)
//             continue;
//         toplam+=i;
//     }
//     console.log(toplam);
// }
// sonuc();

// Örnek7: Kullanıcıdan alınan sayıya göre random sayılar oluştursun.
// 0-) ilk ve son sayının toplamı ?
// 1-) Toplamları
// 2-) Ortalaması
// 3-) Tek sayı toplamları
// 4-) Kaç tane Tek sayı 
// 5-) Çift sayı toplamları
// 6-) Kaç tane çift sayı
// let randomFonksiyon= () => {
//     let sayi,randomSayi,toplam=0,ortalama,tekSayi=0,ciftSayi=0,tekSayiToplam=0,ciftSayiToplam=0,ilkSonToplam;
//     let dizi=[];
//     sayi=Number(prompt("Lütfen bir sayı giriniz:"));
//     for(let i=0; i<sayi; i++){
//         randomSayi= Number(Math.round(Math.random()*9+1));
//         dizi[i]= randomSayi;
//     }
//     console.log(dizi);
//     ilkSonToplam=dizi[0]+(dizi[dizi.length-1]);
//     console.log(ilkSonToplam);
//     for(let j=0;j<dizi.length; j++){
//         toplam+=dizi[j];
//         ortalama=toplam/dizi.length;
//         if(dizi[j]%2===0){
//             ciftSayi+=1;
//             ciftSayiToplam+=dizi[j];
//         }
//         else{
//             tekSayi+=1;
//             tekSayiToplam+=dizi[j];
//         }
//     }
//     console.log(toplam);
//     console.log(ortalama);
//     console.log(tekSayiToplam);
//     console.log(ciftSayiToplam);
//     console.log(tekSayi);
//     console.log(ciftSayi);
// }
// randomFonksiyon();

// Örnek8: Kullanıcının Girdiği Sayının Faktöriyelini hesaplama.
// let faktoriyelHesaplama= () => {
//     let sayi,fak=1;
//     sayi=Number(prompt("Bir sayı giriniz:"));
//     for(let i=1; i<=sayi; i++){
//         fak*=i;
//     }
//     console.log(sayi+" sayısının faktoriyeli: "+fak);
// }
// faktoriyelHesaplama();


// Örnek9: Kullanıcıdan aldığımız kelimeyi tersine çeviren program.
// exam: bardak  ==> kadrab
// let tersineCevirme= () => {
//     let kelime;
//     kelime=prompt("Bir kelime giriniz:");
//     let tersKelime= kelime.split('').reverse().join('');
//     console.log(tersKelime);
// }
// tersineCevirme();

// Örnek10: kullanıcı tarafından başlangıç,bitiş sayıları al ve bir döngüde devam etsin.
// s1-)  başlangıç, bitiş sayıların toplamı
// s2-)  başlangıç, bitiş çift sayıların toplamı
// s2-)  başlangıç, bitiş tek sayıların toplamı
// s3-)  başlangıç, bitiş sayıların toplamı ancak 5'e bölünebilen sayılar hariç
// let startEndFunction= () => {
//     let baslangicSayisi= Number(prompt("Başlangıç sayısı giriniz:"));
//     let bitisSayisi= Number(prompt("Bitiş sayısı giriniz:"));
//     let toplam=0,dizi=[],ciftSayiToplam=0,tekSayiToplam=0;
//     for(let i=baslangicSayisi; i<=bitisSayisi; i++){
//         dizi[i]=i;
//         toplam+=dizi[i];
//         if(i%2===0)
//             ciftSayiToplam+=i;
//         else
//             tekSayiToplam+=i;
//     }
//     console.log(dizi);
//     console.log(toplam);
//     console.log(ciftSayiToplam);
//     console.log(tekSayiToplam);
//     let result=0;
//     for(let j=baslangicSayisi; j<=bitisSayisi; j++){
//         if(j%5===0)
//             continue;
//         result+=dizi[j];
//     }
//     console.log(result);
// }
// startEndFunction();

///////////// ÖDEV4 /////////////////
//Object CV 
//adi
//soyadi
//yas
//diller[]
//meslek{}
//emeklilik=function(age){return 2022-age} ==> yaş<18 yaş>=150 (validation)
//String toUppercase vs.