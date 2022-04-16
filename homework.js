//class
//JavaScript, oldukça dinamik bir yapıya sahiptir. 
//EcmaScript 6 öncesinde JavaScript’te Nesne Tabanlı Programlama yönelimi ile 
//programlama yapmak biraz zahmetli bir işti. Aslında direkt olarak NYP (OOP) 
//desteklemez, fakat Class yerine Object’ler oluşturmak ve bunları prototipleyerek 
//kullanarak bir şekilde işimizi görüyorduk. Microsoft tarafında geliştirilen 
//TypeScript ile de nesne yönelimli programlama daha güçlü bir hale gelmişti.
//Bir Class oluşturmak için class clasIsmi {} yapısını kullanırız. 
//Yazım kuralı olarak Class isimleri mutlaka büyük harfle başlar. 
//Aslında programatik bir zorunluluk değildir, ancak değişken isimleriyle karışmaması ve ilk bakışta bunun 
//bir Class olduğu anlaşılması adına büyük harfle başlar.
//Class içinde constructor metodu kullandık. Bu zorunlu değildir ve eğer kullanılacaksa bir 
//Class’ta sadece bir tane constructor (yapılandırıcı) metot kullanılır. Constructor, metoda gelen parametreleri karşılar.

//destructuring
//Elimizde var olan nesne veya dizi gibi yapı(lar)dan(bu yapılar çok büyük olabilir); küçük parça(lar) 
//ayırmak için kullanılır. Destructuring assignment işlemi değer atama işlemi gibi yapılır. Kaynak nesne 
//veya diziden alınmak istenen değer(ler) eşitliğin sol tarafına yazılır.

//callback() => ES5
//Bir fonksiyon çalışmasını tamamladıktan sonra başka bir fonksiyonun 
//çalışmasını sağlayan fonksiyonlara callback fonksiyon denir. Şöyle 
//düşünün bir web sitesi yapıyorsunuz varsayın. Önce front end developerlar 
//çalışmasını bitirir ardından back end developerlar çalışmaya başlar. Bu bir callback işlemidir.
//Callback fonksiyonlar bir fonksiyona parametre olarak gönderilirler. Ve bu parametre bir değişkendir.

//promise() => ES6
//promise
//Asenkron çalışma mantığı “callback” veya “promise” yapılarıyla yönetiliyor. Callback yapısında, 
//asenkron işi yapacak olan metod parametre olarak bir fonksiyon alıyor ve 
//iş bittiğinde bu fonksiyonu çalıştırarak işin bittiğini haber vermiş oluyor. 
//Promise ise biraz daha farklı bir soyutlama. Promise nesnesi, asenkron bir işin 
//bittiği zamanki halini içeriyor diyebiliriz. Mesela promise “resolve” edildiğinde, 
//eğer işlem başarılı bir şekilde tamamlandıysa, servisin cevabını içerecektir. 
//Bir başka deyişle, promise gelecekteki bir değeri temsil ediyor.

//Callbacks
//Callback fonksiyonları bağımsız bir değişken olarak başka bir fonksiyona geçirilen ve ilk 
//fonksiyonun işlemi tamamlandıktan sonra diger fonksiyonun işlevini başlatan fonksiyonlardır. Callbackler genellikle asynchronous işlemler tamamlandıktan sonra kod yürütülmesine devam etmek için kullanılır.
//Promiseler, ‘Callback Hell’ durumundan kaçınmak için ve beklenmeyen durumla karşılaşıldığında hata kontrolünün daha rahat yapılabilmesi için geliştirilmiş ES6 olarak 
//bilinen ECMAScript 2015 ile bize sunulan asynchronous bir yapıdır.
//Pending: Bu başlangıç aşamasıdır. Bu aşamada bir şey gerçekleşmez. Bu aşama için şöyle düşünebiliriz, müşteri sana bir sipariş verecektir. Ama henüz bir şey sipariş etmemiştir.
//Resolved: Bu aşama ise işlemin sonuçlandığı ve başarılı olduğu aşamadır. Yani müşteri siparişini almış ve memnun kalmıştır.
//Rejected: Bu aşama ise hata ile sonuçlanan aşamadır. İstenen sipariş gelmemiş ve müşteri restoranı terk etmişti.

//async/await => ES7
//Temel olarak; çalıştırılan fonksiyonun işi tamamen bitene kadar bir sonraki kodun çalışmasını engelleyen yapıdır. 


//browser sessionscope
//browser localstorage
//localStorage ve sessionStorage nesneleri, web depolama araçlarının bir parçası olarak [anahtar, değer] çiftlerini 
//kaydetmek için kullanılan iki büyük araçtır. Kullanım durumuna göre localStorage ve sessionStorage çerezlere birer 
//alternatiftir ve bazı avantajları vardır:
//Veriler yalnızca yerel olarak kaydedilir ve sunucu tarafından okunmaz, bu da tanımlama bilgilerinin sunduğunu 
//güvenlik sorununu ortadan kaldırır.
//Çok daha fazla verinin kaydedilmesine izin verir (Tarayıcı farklılığına göre ortalama 10mb).
//Söz dizimi ve kullanımı oldukça basittir.
//Ayrıca modern tüm tarayıcılarda da desteklenir. Böylece sorunsuz bir şekilde kullanabilirsiniz. Çerezler, 
//özellikle kimlik doğrulama söz konusu olduğunda oldukça faydalıdır, ancak kullanıldığında localStorage ve 
//sessionStorage ‘ın daha iyi bir alternatif olabileceği durumlar vardır.
//localStorage ve sessionStorage neredeyse aynı API’ye sahiptir. Aralarındaki fark, sessionStorage verilerin yalnızca 
//pencere ve sekme kapatılana kadar kalıcı olmasıdır. localStorage ise kullanıcı tarayıcı önbelleğini elle temizleme 
//veya web uygulamanız verileri temizlenene kadar kalıcıdır. 
//Söz dizimi olarak ikisi de aynı sözdizimine sahiptir.
//localStorage ve sessionStorage için girdiler oluşturabilir, güncelleyebilir veya silebilir. 
//Ayrıca JSON.stringify yöntemi ile de dizi verilerini de saklayabiliriz.