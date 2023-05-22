const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const phone=document.getElementById('phone');
function error(input, message) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(input) {
    input.className = 'form-control is-valid';
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if(re.test(input.value)){
        success(input);
   }
   else{
        error(input,'hatalı mail adresi');

   }
}
function check(input){
    console.log(input.value);

}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(username.value === '') {
        error(username, 'username gerekli');
    }else {
        success(username);
    }
 
    if(email.value === '') {
        error(email, 'email gerekli');
    }else if(!checkEmail(email.value)) {
        error(email, 'düzgün bir mail adresi giriniz');
    }    
    else {
        success(email);
    }

    if(password.value === '') {
        error(password, 'password gerekli');
    }else {
        success(password);
    }

    if(repassword.value === '') {
        error(repassword,'repassword gerekli' );
    }else {
        success(repassword);
    }
});

function checkRequired(inputs){
    inputs.forEach(function(input){
        if(input.value=== ''){

            error(input,`${input.id} is required`);
        }
        else{
                success(input);
        }
    });
}


form.addEventListener('submit',function(e)
{
    e.preventDefault();

    checkRequired([username ,email , password, repassword,phone]);
    checkEmail(email);
    checkLength(username,3,15);
    checkPasswords(password,repassword);ho
    checkPhone(phone);

});

function checkLength(input,min,max){
    if (input.value.length<min) {
        error(input,`${input.id} en az ${min} karakter olmalıdır`);

    }else if(input.value.length>max) {

        error(input,`${input.id} en fazla ${max} karakter olmalıdır`);

    }else{
        success(input);

    }

}

function checkPasswords(input1,input2){
    if(input1.value!=input2.value){

        error(input2,'Parola eşleşmiyor')
    }

}

function formatPhoneNumber(input) {
    var cleaned = ('' + input).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
  }

  function checkPhone(input){

    if(!formatPhoneNumber(input)){

        error(input,`Phone format isn t suitable  `);
    }

  }