window.addEventListener('load', function(){
    let oldPasswordField = document.querySelector('#oldpassword');
    let newPasswordField = document.querySelector('#newpassword');
    let confirmPasswordField = document.querySelector('#confirmpassword');

    oldPasswordField.addEventListener('blur', function(){
        if(oldPasswordField.value == ""){
            alert('Por favor, introduce tu contraseña actual');
        }
    });

    newPasswordField.addEventListener('blur', function(){
        if(newPasswordField.value == ""){
            alert('Este campo es obligatorio');
        }
    });

    confirmPasswordField.addEventListener('blur', function(){
        if(confirmPasswordField.value == ""){
            alert('Este campo es obligatorio');
        }
    });

    newPasswordField.addEventListener('change', function(){
        if(newPasswordField.value.length < 8){
            alert('La nueva contraseña debe tener al menos 8 caracteres');
        }
    });

    confirmPasswordField.addEventListener('change', function(){
        if(confirmPasswordField.value.length < 8){
            alert('La nueva contraseña debe tener al menos 8 caracteres');
        }
    });

});