window.addEventListener('load', function(){
    let emailField = document.querySelector('#email');
    let  passwordField= document.querySelector('#password');

    emailField.addEventListener('blur', function(){
        
        var expReg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        let check = expReg.test(emailField.value);

        if(emailField.value == ""){
            alert('El campo de email debe estar completo');
        } else if(check == false){
            alert('Ingresá un email válido, eh');
        }
        
    });

    passwordField.addEventListener('blur', function(){
        if(passwordField.value == ""){
            alert('El campo de password debe estar completo');
        }
    })
})