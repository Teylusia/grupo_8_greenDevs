let nameField = document.querySelector('#username');
const nameErrors = document.querySelector('#username-errors');

let emailField = document.querySelector('#email');
const emailErrors = document.querySelector('#email-errors');

let avatarField = document.querySelector('#upload-image');
const avatarErrors = document.querySelector('#avatar-errors');

let passwordField = document.querySelector('#password');
const passwordErrors = document.querySelector('#password-errors');

const submit = document.querySelector('#user-edit-form')

nameField.addEventListener('blur', function(event){
  if(event.target.value.length <= 2){
    nameField.classList.add('warning');
    nameField.classList.remove('success');
    if(nameErrors.innerHTML.length == 0){
      nameErrors.innerText += 'Debes ingresar un nombre de usuario con mas de 5 caracteres.'
    };
}else{
  nameField.classList.remove('warning');
  nameField.classList.add('success');
  nameErrors.innerText = ''  
}
});

emailField.addEventListener('blur', function(event){
  let validateEmail = emailField.value.indexOf('@')
  if(validateEmail == -1){
    emailField.classList.add('warning');
    emailField.classList.remove('success');
    if(emailErrors.innerText.length == 0){
      emailErrors.innerText = 'Tu email debe ser valido'
    }
  }else{
    emailField.classList.add('success')
    emailField.classList.remove('warning')
    emailErrors.innerText = ''
  }
});
avatarField.addEventListener('change', function(event){
  let allowedExt = ['jpg', 'jpeg', 'png', 'gif']
  let ext = avatarField.value.slice(-3)
  let goodFile = allowedExt.find(allExt => allExt == ext)

  if(goodFile == ext){
    avatarField.classList.add('success');
    avatarField.classList.remove('warning');
    avatarErrors.innerText = ''
  }else if(goodFile != ext){
    avatarField.classList.remove('success');
    avatarField.classList.add('warning');
    if(avatarErrors.innerText.length == 0){
        avatarErrors.innerText = 'Tu imagen debe tener un formato valido.'
    };
  }
});
passwordField.addEventListener('blur', function(event){
    if(passwordField.value.length < 8){
      passwordField.classList.remove('success');
      passwordField.classList.add('warning');
      if(passwordErrors.innerText.length == 0){
        passwordErrors.innerText = 'Tu contraseña debe tener un mínimo de 8 caracteres.'
      }
    }else{
      avatarField.classList.add('success');
      avatarField.classList.remove('warning');
      passwordErrors.innerText = ''
    }
});

submit.addEventListener('submit', event =>{
  let errorFields = [ passwordErrors, avatarErrors, nameErrors, emailErrors]
  let errors = 0
  errorFields.forEach( error =>{
    if(error.innerText.length > 0){
      errors += 1
    }
  })
  if(errors != 0){
    event.preventDefault()
    alert('tienes errores en tu formulario, porfavor corrijelos y luego envía la información.')
  }
})
