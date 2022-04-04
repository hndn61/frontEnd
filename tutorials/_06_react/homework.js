//Callbackfunction
//Bir fonksiyon çalışmasını tamamladıktan sonra başka bir fonksiyonun 
//çalışmasını sağlayan fonksiyonlara callback fonksiyon denir. Şöyle 
//düşünün bir web sitesi yapıyorsunuz varsayın. Önce front end developerlar 
//çalışmasını bitirir ardından back end developerlar çalışmaya başlar. Bu bir callback işlemidir.
//Callback fonksiyonlar bir fonksiyona parametre olarak gönderilirler. Ve bu parametre bir değişkendir.

//promise
//Asenkron çalışma mantığı “callback” veya “promise” yapılarıyla yönetiliyor. Callback yapısında, 
//asenkron işi yapacak olan metod parametre olarak bir fonksiyon alıyor ve 
//iş bittiğinde bu fonksiyonu çalıştırarak işin bittiğini haber vermiş oluyor. 
//Promise ise biraz daha farklı bir soyutlama. Promise nesnesi, asenkron bir işin 
//bittiği zamanki halini içeriyor diyebiliriz. Mesela promise “resolve” edildiğinde, 
//eğer işlem başarılı bir şekilde tamamlandıysa, servisin cevabını içerecektir. 
//Bir başka deyişle, promise gelecekteki bir değeri temsil ediyor.

//call apply bind
//Call ve Apply fonksiyonları Function objemizin __proto__ objesinde bulunan iki adet fonksiyondur. 
//Bu fonksiyonların görevleri aynı olsa da kullanımları arasında ufak bir fark vardır.
//Call() fonksiyonu, verilen this anahtar değeriyle(obje) ve bağımsız olarak sağlanan bağımsız argümanlarla 
//bir fonksiyonu çağırır. Argümanlar fonksiyona tek tek gönderilir.
//Apply() fonksiyonu, verilen this anahtar değeriyle(obje) ve bağımsız olarak sağlanan değişkenlerle bir fonksiyonu çağırır. 
//Argümanlar fonksiyona argüman listesi şeklinde gönderilir. 
//Bind fonksiyonu da mantık olarak call ve apply fonksiyonlarına oldukça fazla benzer. Ancak kullanım olarak bu fonksiyonlardan farklıdır. 
//Bind() fonksiyonu, içine verilen objeye göre yeni bir fonksiyon kopyası yaratır. Oluşan bu kopya fonksiyonu daha sonradan argüman 
//listesi ile beraber gönderilen objeye kullanabiliriz.
//Bind fonksiyonundan, fonksiyonumuzu başka bir bağlamda daha sonradan 
//kullanabilmek adına yararlanabiliriz (örnek,Javascript Olayları — JS Events). Call ve Apply Fonksiyonlarını ise bir fonksiyonu hemen bir obje ile çağırmak için kullanabiliriz.

//prototype yapılarına bak
//prototype: yapıcı fonksiyona yeni bir özellik veya fonksiyon eklemek için kullanırız.

//interface
//React, kullanıcı arayüzü (UI) oluşturmak için kullanılan en popüler JavaScript kütüphanesidir. Web siteleri işlemek için kullanıcı çıktısına harika yanıt sunan bir yöntemi kullanır.
//Bu aracın bileşenleri Facebook tarafından geliştirilmiştir. 2013’de açık kaynaklı bir JavaScript olarak piyasaya sürülmüştür. 

//abstract
//Sınıflar arasında pek çok ortak özellik ve davranış bulunduğu durumlarda tasarlanan soyut sınıflardır. Kod tekrarını engelleyerek 
//hem daha derli toplu bir görüntü sağlar hem de hata yapma riskini azaltır. 
//Ortak bir şablon üzerinden ilerleme imkanı sunar ve bu sınıfların temel 
//amacı da budur. Dolayısıyla, Abstract sınıflardan nesne üretimi gerçekleştirilemez. 

//inheritance
//Kalıtım, bazı nesneler uygulama genelinde paylaşılabilen aynı sayıda özelliğe sahip olduğunda kodun 
//yeniden kullanılabilirliğini sağlamanın bir yoludur. Kalıtım, uygulamanın üst-alt bileşen arasındaki bağlantıyı 
//yapmasına ve alt bileşenlerinde durum değerleri ve işlev gibi özellikleri yeniden kullanmasına olanak tanır.

//TS data type: String, Number, Boolean,static,class 
//,Array, Enum, Tuple, generics'