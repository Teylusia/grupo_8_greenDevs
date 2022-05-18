window.addEventListener('load', function(){
    let nameField = document.querySelector('#name');
    let priceField = document.querySelector('#price');
    let imageField = document.querySelector('#upload-image');
    let specsField = document.querySelector('#specs');
    let descriptionField = document.querySelector('#description');
    let ratingField = document.querySelector('#rating');
    let discountField = document.querySelector('#discount');

    nameField.addEventListener('blur', function(){
        if(nameField.value == ""){
            alert('Este campo es obligatorio')
        } else if(nameField.value.length < 5){
            alert('El nombre del producto debe contener al menos 5 caracteres')
        }
    });

    priceField.addEventListener('blur', function(){
        if(priceField.value <= 0){
            alert('Este precio no es valido :(')
        }
    });

    imageField.addEventListener('change', function(){
        let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
        if(!allowedExtensions.test(imageField.value)){
            alert('Este tipo de archivo no es valido :(');
            imageField.value = "";
            return false;
        } else {
            if(imageField.files && imageField.files[0]){
                let reader = new FileReader();
                reader.onload = function(element){
                    document.querySelector('#imagePreview').innerHTML += '<img src="'+element.target.result+'" height="90px" width="90px"/>';
                };
                reader.readAsDataURL(imageField.files[0]);
            }
        }
    });

    specsField.addEventListener('blur', function(){
        if(specsField.value.length < 20){
            alert('Un poco más de detalle estaría excelente ;)')
        }
    });

    descriptionField.addEventListener('blur', function(){
        if(descriptionField.value.length < 20){
            alert('A los usuarios les gustaría saber un poco más')
        }
    });

    ratingField.addEventListener('blur', function(){
        if(ratingField.value < 0 || ratingField.value > 10){
            alert('La escala de rating va entre 0 y 10')
        }
    });

    discountField.addEventListener('blur', function(){
        if(discountField.value < 0 || discountField.value > 100){
            alert('Ingresa un porcentaje de descuento valido')
        }
    });

});