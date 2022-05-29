window.addEventListener('load', function(){
    let emailField = document.querySelector('#email');
    const emailErrors = document.querySelector('#email-errors');

    let  passwordField= document.querySelector('#password');
    const passwordErrors = document.querySelector('#password-errors');

    const submit = document.querySelector('#login-form')

    emailField.addEventListener('blur', function(){
        if(emailField.value == ""){
            emailField.classList.add('warning');
            emailField.classList.remove('success');
            emailErrors.innerText = 'Por favor, completa tu mail';
        }
    });

    emailField.addEventListener('change', function(){
        var expReg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        let check = expReg.test(emailField.value);
        if(check == false){
            emailField.classList.add('warning');
            emailField.classList.remove('success');
            emailErrors.innerText = 'Tu email debe ser valido';
        } else{
            emailField.classList.add('success')
            emailField.classList.remove('warning')
            emailErrors.innerText = ''
        }
    });

    passwordField.addEventListener('blur', function(){
        if(passwordField.value == ""){
            passwordField.classList.add('warning');
            passwordField.classList.remove('success');
            passwordErrors.innerText = 'Por favor, introduce tu contraseña';
        } else{
            passwordField.classList.add('success');
            passwordField.classList.remove('warning');
            passwordErrors.innerText = '';
        }
    });

    submit.addEventListener('submit', event =>{
        let errorFields = [ passwordErrors, emailErrors]
        let errors = 0
        errorFields.forEach( error =>{
          if(error.innerText.length > 0){
            errors += 1
          }
        })
        if(errors != 0){
          event.preventDefault()
          alert('Algo salio mal, por favor verifica tus datos')
        }
      });
});
