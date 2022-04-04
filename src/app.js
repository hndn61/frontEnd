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
        let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return regex.test(email)
      }
    })
  })
  
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
                id="plus_id"
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
  
  //+++++++++++++++++++++++++++++++
  //object
  var object={};
  console.log(object);
  
  //constructor
  let Student =function Student(adi,soyadi,yas){
    this.adi=adi;
    this.soyadi=soyadi;
    this.yas=yas;
    console.log(this)
  }
  
  //instance
  //hasOwnPropert: Bu objede var mı yok mu ?
  var instanceData=new Student("Adi44","Soyadi44",37);
  console.log(instanceData.hasOwnProperty("soyadi"));
  
  //Object Create
  var instanceData2=Object.create(Student);
  console.log(instanceData2)
  
  //property
  Student.prototype.birthYear=function(){
    return new Date().getFullYear()-this.yas;
  }
  console.log("Adı: "+instanceData.adi+"  Doğum Tarihi: "+instanceData.birthYear())


