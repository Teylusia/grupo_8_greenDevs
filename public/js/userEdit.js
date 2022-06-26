let nameField = document.querySelector('#username');
const nameErrors = document.querySelector('#username-errors');

let emailField = document.querySelector('#email');
const emailErrors = document.querySelector('#email-errors');

let avatarField = document.querySelector('#upload-image');
const avatarErrors = document.querySelector('#avatar-errors');


const submit = document.querySelector('#user-edit-form')

nameField.addEventListener('blur', function(event){
  if(event.target.value.length <= 2){
    nameField.classList.add('warning');
    nameField.classList.remove('success');
    if(nameErrors.innerHTML.length == 0){
      nameErrors.innerText += 'Debes ingresar un nombre de usuario con mas de 2  caracteres.'
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

submit.addEventListener('submit', event =>{
  let errorFields = [ avatarErrors, nameErrors, emailErrors]
  let errors = 0
  errorFields.forEach( error =>{
    if(error.innerText.length > 0){
      errors += 1
    }
  })
  if(errors != 0){
    event.preventDefault()
    alert('tienes errores en tu formulario, porfavor corrígelos y luego envía la información.')
  }
});
