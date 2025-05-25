let spanPhone = document.getElementById("SPAN_PHOE");
let spanPass= document.getElementById("SPAN_PASS");
let spans = [
    spanPhone,
    spanPass
];




maskNumber();

let btnLog = document.getElementById('signIn');

btnLog.addEventListener('click', () => {
    validationLog();
});



function validationLog() {
    let tel = document.getElementById('tel_log').value;
    let pass = document.getElementById('pass_log').value;

    let arr = [
        tel,
        pass
    ];
    
    
    for (let i = 0; i <= arr.length; i++) {
      console.log(arr[i]);
        if(!arr[i]) {
            spans[i].textContent = "Заполните поле";
            spans[i].style.color = 'red';
            spans[i].style.fontSize = '12px'
        }
        else {
          spans[i].textContent = "";
            spans[i].style.color = 'red';
            spans[i].style.fontSize = '20px'
        }
        
    }
}


  function maskNumber() {
    const maskOptions = {
        mask: '+{7}(000)000-00-00'
      };
      let phone_mask = document.getElementById('tel_log')
      const mask = IMask(phone_mask, maskOptions);
  }
