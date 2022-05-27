window.addEventListener('load', function(){

    let nameField = document.querySelector('#username');
    let emailField = document.querySelector('#email');
    let avatarField = document.querySelector('#upload-image');
    let passwordField = document.querySelector('#password');


    nameField.addEventListener('blur', function(){
        if(nameField.value == ""){
            alert('Este campo es obligatorio');
        }
    });

    nameField.addEventListener('change', function(){
        if(nameField.value.length < 2){
            alert('El nombre debe contener al menos 2 caracteres');
        }
    });

    emailField.addEventListener('blur', function(){
        if(emailField.value == ""){
            alert('El campo de email debe estar completo');
        }
    });

    emailField.addEventListener('change', function(){
        var expReg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        let check = expReg.test(emailField.value);
        
        if(check == false){
            alert('Ingresá un email válido, eh');
        }
    });

    avatarField.addEventListener('change', function(){
        let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
        if(!allowedExtensions.test(avatarField.value)){
            alert('Este tipo de archivo no es valido :(');
            avatarField.value = "";
            return false;
        } else {
            if(avatarField.files && avatarField.files[0]){
                let reader = new FileReader();
                reader.onload = function(element){
                    document.querySelector('#imagePreview').innerHTML = '<img src="'+element.target.result+'" height="90px" width="90px"/>';
                    document.querySelector('img').style.borderRadius = '50px';
                    document.querySelector('img').style.border = 'solid #03c959 2px';
                };
                reader.readAsDataURL(avatarField.files[0]);
            }
        }
    });

    passwordField.addEventListener('blur', function(){
        if(passwordField.value == ""){
            alert('El campo de password debe estar completo');
        }
    });

    passwordField.addEventListener('change', function(){
        if(passwordField.value.length < 8){
            alert('La contraseña debe tener al menos 8 caracteres');
        }
    });
})