/*
JQUERY
2006 yılında John Resig tarafından geliştirilmiştir.
Javascript kütüphanesidir.
Programlama dili değildir.
Az kod çok iş mantığına sahiptir.
Jquery'de Ajax yazmak kolaydır.
DOM manipülasyonları yazma maliyeti daha düşüktür.
*/

// $(document).ready(function(){}) : Bunu geliştirmişler artık kullanılmıyor.
// Document.ready
$(function(){
    //JS DOM
    //document.getElementById("jquery_id").innerHTML="<b>Jquery buradaydı</b>";

    //JQUERY
    //HTML ile işlem yapmak
    $("#jquery_id").html("<b><i>jquery buradaydı</i></b>");
    $("#jquery_id2").html("<b><i>jquery buradaydı</i></b>");

    //CSS ile işlem yapmak
    //.css ile işlemleri arttırabiliriz.
    $("#jquery_id").css("background-color","red")
    .css("color","blue").css("padding","25px").css("text-align","center");

    //Pseudo element
    //p=> paragraf tag'ı ,":" ise hepsi demektir.
    //contains(): içerisine verilen değerin, verilen tag'de aramaya başlar ve var ise css kısmını yapar.
    $("p:contains(html)").css("box-shadow","1px 1px 2px 5px rgba(2,2,2,.8)");

    //ul içindeki bütün li'lere erişir.
    //contains içindeki kısım hariç hepsine uygula
    $("ul li:not(':contains(css 3)')").css("color","blue").css("background-color","black");

    //CSS inline object
    //$("#deneme44").css().css().css();
    //Tırnaksız ==> backgroundColor
    //Tırnaklı ==> background-color
    $("#deneme44").css({color:"yellow", background:"green",padding:"25px",textAlign:"center"});

    //CSS Object: uzun uzun yazmamak için nesne oluşturup sonra nesneyi çağırabiliriz.
    let objectCss={
        fontSize: "30px",
        color: "brown",
        background: "orange",
        textAlign:"center"
    };
    $("#deneme33").css(objectCss);

    //attr(attributeAdi,attributeDegeri) : attribute'lere değer eklemek
    //img tag'inin attribute'lerine veriler ekleyebiliriz.
    $("img").attr("src","../blog_project/img/ts_amblem.jpg");

    //toggleClass(),attr(),removeAttr(),val(),hide(),show(),fade(),slide(),animate(),stop()
    
    //addClass: class eklemek
    //$("#addId").css("color","red");
    $("#addId").addClass("classJquery");
    //removeClass: class silmek
    //$("#addId").removeClass("classJquery");


})