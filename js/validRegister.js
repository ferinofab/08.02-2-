let dataSpans = document.querySelectorAll("[data-span]");
for(let i = 0; i <= dataSpans.length; i++) {
}
let btnReg = document.getElementById("register");

btnReg.addEventListener('click', () => {
    validationReg();
})


function validationReg() {
    let name = document.getElementById('name').value;
    let middlename = document.getElementById('middlename').value;
    let lastname = document.getElementById('lastname').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    let repPass = document.getElementById("reppass").value;

    let arr = [
        name, middlename, lastname, phone, email, pass, repPass
    ];

    for (let i = 0; i <= arr.length; i++) {
      
         if(arr[i]) {
            dataSpans[i].textContent = "";
         }
         if(!arr[i]) {
        dataSpans[i].textContent = "Заполните поле";
        dataSpans[i].style.color = 'red';
        dataSpans[i].style.fontSize = '12px'
         }
    validateTel(phone, dataSpans[3]);
    validatePAss(pass, dataSpans[5]);
    confirmPass(pass, repPass, dataSpans[6])
      
    }
   
    // vallidStr(arr);



    // function vallidStr (arr) {
    //     for(let i = 0; i <= arr.length; i++) {
    //         if(!validateStr(arr[i])) {
    //             dataSpans[i].textContent = "Не вилодно";
    //             dataSpans[i].style.color = 'red';
    //             dataSpans[i].style.fontSize = '12px'
    //         }
    //     }
    // }
}
maskNumber();


  function validateTel (phone, span) {
    let a = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    if(!phone.match(a)) {
        span.textContent = "Введите коректный номер";
        
    }
  }

    function validatePAss(pass, span) {
    if(pass.length < 8) {
        span.textContent = "Не надежныйы пароль";
  }
}


function confirmPass(pass, repPass, span) {
    if(pass !== repPass) {
        span.textContent = "Пароли не совпадают";

    }
}

  function maskNumber() {
    const maskOptions = {
        mask: '+{7}(000)000-00-00'
      };
      let phone_mask = document.getElementById('phone')
      const mask = IMask(phone_mask, maskOptions);
  }


  const regex = /^[a-zA-Z\s\d]+$/;

  function validateStr(str) {
    return regex.test(str);
}