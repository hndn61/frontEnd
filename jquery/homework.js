// Libraries ile Framework arasındaki farklar nelerdir ?
// Framework ve Library 'in  ortak noktası, birileri tarafından 
// yazılan ve başkaları tarafından kullanılabilen ortak kod 
// yapılarıdır. İkisinde de başkaları tarafından oluşturulmuş 
// kodların kullanımı söz konusudur.
// Library ile Framework'ün ayrıştığı nokta teknik kısımdır. 
// İki arasındaki temel teknik fark,  kodun nasıl çağrıldığıdır. 
// Library kullanırken, library size bazı özellikler vererek 
// kullanmanızı sağlar, bu şekilde almış olduğunuzu kodu kendi 
// sisteminize uygularken size kodu nerede ve ne zaman kullanacağınıza 
// karışmaz veya bir diğer deyişle dikte etmez.  Framework ise 
// Library'in tersine  kullanacağız özelliğe göre kodu nerede 
// ve ne zaman kullanacağınız söyler, kullanacağız bu işlev, 
// eğer Framework dokümanın belirtildiği gibi kullanılmaz ise 
// kullanım dışı kalır.
// Library'lerin ürünlerde ve programlarda kullanımı sırasında 
// uygulamaya oluşturan kişi, Library'in  özelliklerini kullanımında
// tamamen bağımsız hareket eder. Kodun herhangi bir yerinde ve 
// istediği zaman Library 'in vermiş olduğu kodları kullanabilir. 
// Frameworkte ise verilen araçların kullanımı her zaman olmasada 
// genellikle belli kurallara haizdir.  Mesela ben bu site içerisinde 
// bir JS Framework'ü olan React'ı kullanıyorum. Bu kullanım 
// sırasında React bana vermiş olduğu özellikler için belirli 
// sınırlamalar belirlemiş, eğer bu sınırların dışına çıkarsam 
// kodum çalışmaz. Buradan da anlayacağınız üzere, yazmış olduğum 
// kod React tarafından kontrol edilmekte, çağrılmakta ve buna göre 
// işlem yapılmakta.
// Library'ler de ise böyle bir zorunluluk mevcut değildir. Örneğin, 
// bir JS kütüphanesi olan JQuery, size şurada kodu yazın ve şundan 
// sonra bu işlemi yapın gibi bir direktif söylemez sadece elindeki 
// araçları gösterir şunu, bunu veya onu bu verdiğim özelliklerle 
// gerçekleştirebilirsiniz der. Siz, JQuery ile bir çalışma yaptığınız 
// zaman, kütüphaneden işinize yarar özellikleri alır ve kullanmaya 
// başlarsınız, JQuery burada herhangi bir kontrol yapmaz. Konunun 
// özeti, siz yazmış olduğunuz kod ile  library'i çağırırsınız, 
// framework ise sizi çağırır. 

// npm nedir?
// NPM(Node Package Manager veya Node Packaged Modules)
// NPM(Node Package Manager), JavaScript’in paket yöneticisidir.  
// JavaScript geliştiricilerin diğer geliştiricilerin paylaştığı 
// kodu tekrar tekrar kullanmasını kolaylaştırır. Yeni uygulamalara 
// kolayca uyarlama yapabilmeyi sağlar. Birisi kodunu revize 
// ettiğinde, uygulamanızı yeni geliştirilmiş kodu dahil edecek 
// şekilde kolayca güncelleyebilirsiniz.
// Geliştiriciler, bir sorunun üstesinden gelebilecek küçük bir kod 
// bloğu oluşturur ve kodu, npm kurallarına uyan bir dizine “paket” 
// halinde yerleştirir. Web için geliştiridiğiniz uygulamanız 
// onlarca ve ya yüzlerce küçük paketten oluşacaktır. Geliştiriciler, 
// daha büyük özel çözümler oluşturmak için bu paketleri kullanabilir.
// Ekibinizin daha iyi birlikte çalışmasına, geliştirici yeteneklerini 
// projelerde paylaşmasına yardımcı olmak için npm kullanabilirsiniz. 
// Birden çok kod sürümünü yönetmek için npm kullanılır.
// npm iki ana bölümden oluşur:
// 1-Paketleri yayınlamak ve indirmek için bir CLI (komut satırı arayüzü) aracı 
// 2-JavaScript paketlerini barındıran çevrimiçi bir depo
// NPM, Node.js için bir takım script’lerin otomatik 
// olarak indirilmesini, güncellenmesini, silinmesini sağlayan bir 
// paket yöneticisidir. Komut Satırı (Command Port) üzerinden çalışır.

// CLI nedir ?
// Konsol uygulamalarını kullanabilmemize olanak sağlayan komut satırı arayüzlerinde 
// yalnızca komutlar ile giriş yapılabilir. Konsol uygulamalarının 
// bize vermiş olduğu referans parametreleri kullanarak, sunulan 
// işlevlerin çalışmasını sağlarız.
// Konsol uygulamalarını Linux işletim sistemlerinde terminaller, 
// Windows’ta ise “Komut Satırı (cmd.exe)” aracılığıyla kullanabiliriz.

// Bower nedir ?
// Web uygulamaları geliştirirken jQuery, bootstrap, font-awesome gibi çeşitli 
// kütüphanelerden faydalanılır.
// Ancak her projede bu kütüphanelerin sitesine gidip indirilmesi, 
// sıkıştırılan dosyadan çıkarılması ve uygun dosyanın proje 
// eklenmesi zahmetli olabilmektedir.
// Bu durum bootstrap gibi jquery kütüphanesine bağımlı bir kütüphane 
// ise indirme işleminin önce bootstrap daha sonra jquery için 
// yapılması gerekir.
// Her kütüphanenin yeni sürümünü kontrol etmek, projede kullanılan 
// kütüphanelerin listesini kayıt altına almak ve proje başka bir 
// ortama taşındığında bu kütüphaneleri taşımadan kayıt altına 
// alınan liste üzerinden indirilmesi geliştirme sürecinde kolaylık 
// sağlar.
// Bower kısaca NPM aracının sadece web taraflı olanıdır diyebiliriz.
// Bir uygulama geliştirirken kullanılan kütüphaneleri indirmek, 
// güncellemek ve bağımlılıklarını kontrol etmek için kullanılır.
// Bower bir Node.js modülüdür. Bower kurulumu için bilgisayarınızda 
// Node.js, NPM ve Git aracının kurulu olması gerekir.

// WebPack nedir ?
// Webpack web uygulamalarında kullanılan JavaScript dosyalarını tek 
// parça haline getirmek için kullanılan modül paketleyicisidir.
// Kullanılan çoğu JavaScript uygulaması başka JavaScript dosyalarında 
// yer alan kütüphaneye ihtiyaç duyar.
// JavaScript dosyalarının artması beraberinde web sayfalarının yavaş 
// açılmasına neden olur.
// Bu yavaşlığın önüne geçebilmek için JavaScript dosyalarının 
// birleştirilmesi gerekir.
// JavaScript dosyalarını birleştirmek için Grunt, Gulp veya çeşitli 
// web araçları kullanılabilir.
// Ancak bu araçlar tüm JavaScript dosyalarını aralarındaki ilişkiyi 
// bakmadan sırayla birleştirir.
// Webpack birleştirme işini JavaScript dosyaları arasındaki ilişkiye 
// CommonJS, AMD, ES6 Module vb. kullanarak yapar.
// Webpack için geliştirilen loaders ve plugins kullanılarak SASS 
// derlemesi, TypeScript derlemesi vb. ön işleme işlemleri de yapılır.

// text()
// text() fonksiyonu ile seçtiğimiz Html öğesinin metnini alabilir 
// veya seçtiğimiz Html öğesine metin ekleyebiliriz.

// toggleClass()
// toggleClass() fonksiyonu ile seçtiğimiz Html öğesinin class attribute’undan 
// istediğimiz class isimlerini varsa silebilir yoksa ekleyebiliriz.

// attr()
// jQuery ile HTML elemanlarına ait öznitelik değerini almak veya değiştirmek 
// için attr metodu kullanılır.

// removeAttr()
// removeAttr() metodu ile seçmiş olduğumuz bir Html etiketinin niteliklerinden 
// istediğimiz birini silebiliriz.

// val()
// val() fonksiyonu ile seçtiğimiz Html öğesinin value attribute’unun 
// değerini alabilir veya seçtiğimiz Html öğesinin value attribute’una 
// bir değer atayabiliriz.

// hide()
// Bir Html öğesini gizlememizi sağlar. 3 farklı kullanım şekli vardır:
// 1-Herhangi bir parametre vermeden yani hide() şeklinde kullanırsak bu 
// fonksiyonu uyguladığımız Html öğesi bir efekt uygulanmadan çok hızlı 
// bir şekilde gizli durumuna geçer.
// 2-Milisaniye türünden parametre verebiliriz. Örneğin Html öğesinin 
// gizlenme süresinin 3 saniyede gerçekleşmesini istiyorsak parametre olarak 3000 değeri vermeliyiz.
// 3-Son olarak rakamsal değer vermek yerine “slow”, “normal”, “fast” 
// parametrelerinden birini vererek efektlerimizi yavaş, normal veya hızlı bir şekilde gerçekleştirebiliriz.

// show()
// Gizli durumda olan bir Html öğesini tekrardan görünür hale getirmemizi sağlar.

// fade()
// Elementlerin görünürlüklerini düzenleyebiliriz
// FadeIn fonksiyonu sayfada gizli olan elementi göstermek için kullanılır.
// FadeOut metodu ise görünen bir elementi gizlemek için kullanılır.
// FadeToggle metodu ise fadeIn ve fadeOut metotlarının birleşmiş halidir. 
// Eğer element gizli ise görünür, görünütr ise gizli yapar.
// FadeTo metodu ise nesnenin tamamen kaybolmasına izin vermez. 
// Belli bir opaklığa kadar soldurulmasına olanak sağlar.

// slide()
// Slide yani kaydırma efekti öğeleri yukarı aşağı kaydırmamıza yani yukarı 
// aşağı animasyonlu şekilde açılmasına olanak sağlar.

// animate()
// animate() metodu özel animasyonlar oluşturmak için kullanılır.

// stop()
// stop() metodu, bir animasyon ya da efekti tamamlanmadan önce durdurur. 

// toggle() : Html öğesi görünür durumdaysa gizlemeyi, 
// gizli durumdaysa görünür hale getirmemizi sağlar.