window.addEventListener('load', function(){
    let nameField = document.querySelector('#name');
    const nameErrors = document.querySelector('#name-errors');

    let priceField = document.querySelector('#price');
    const priceErrors = document.querySelector('#price-errors');

    let imageField = document.querySelector('#upload-image');
    const imageErrors = document.querySelector('#image-errors');

    let specsField = document.querySelector('#specs');
    const specsErrors = document.querySelector('#specs-errors');

    let descriptionField = document.querySelector('#description');
    const descriptionErrors = document.querySelector('#description-errors');
    
    let ratingField = document.querySelector('#rating');
    const ratingErrors = document.querySelector('#rating-errors');

    let discountField = document.querySelector('#discount');
    const discountErrors = document.querySelector('#discount-errors');

    const submit = document.querySelector('#product-add-form');

    nameField.addEventListener('blur', function(){
        if(nameField.value == ""){
            nameField.classList.add('warning');
            nameField.classList.remove('success');          
            nameErrors.innerText = 'Este campo es obligatorio'
        }
    });

    nameField.addEventListener('change', function(){
        if(nameField.value.length < 5){
            nameField.classList.add('warning');
            nameField.classList.remove('success'); 
            nameErrors.innerText = 'El nombre del producto debe contener al menos 5 caracteres';
        } else{
            nameField.classList.remove('warning');
            nameField.classList.add('success');
            nameErrors.innerText = ''  
        }
    });

    priceField.addEventListener('blur', function(){
        if(priceField.value == ""){
            priceField.classList.add('warning');
            priceField.classList.remove('success');          
            priceErrors.innerText = 'Por favor, ingresa el precio'
        }
    });

    priceField.addEventListener('change', function(){
        if(priceField.value <= 0){
            priceField.classList.add('warning');
            priceField.classList.remove('success');
            priceErrors.innerText = 'Valor inválido'
        } else{
            priceField.classList.remove('warning');
            priceField.classList.add('success');
            priceErrors.innerText = ''  
        }
    });

    imageField.addEventListener('change', function(){
        let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
        if(!allowedExtensions.test(imageField.value)){
            imageField.classList.add('warning');
            imageField.classList.remove('success');
            imageErrors.innerText = 'Este tipo de archivo no es valido :(';
            imageField.value = "";
            return false;
        } else {
            if(imageField.files && imageField.files[0]){

                let reader = new FileReader();
                reader.onload = function(element){
                    imageField.classList.remove('warning')
                    imageErrors.innerText = ''

                    document.querySelector('#imagePreview').innerHTML += '<img src="'+element.target.result+'" height="90px" width="90px"/>';
                    document.querySelector('img').style.borderRadius = '50px';
                    document.querySelector('img').style.border = 'solid #03c959 2px';
                };
                reader.readAsDataURL(imageField.files[0]);
            }
        }
    });

    specsField.addEventListener('change', function(){
        if(specsField.value.length < 20){
            specsField.classList.add('warning');
            specsField.classList.remove('success');
            specsErrors.innerText = 'Un poco más de detalle estaría excelente ;)';
        } else{
            specsField.classList.add('success');
            specsField.classList.remove('warning');
            specsErrors.innerText = ''
        }
    });

    descriptionField.addEventListener('change', function(){
        if(descriptionField.value.length < 20){
            descriptionField.classList.add('warning');
            descriptionField.classList.remove('success');
            descriptionErrors.innerText = 'A los usuarios les gustaría saber un poco más';
        } else{
            descriptionField.classList.add('success');
            descriptionField.classList.remove('warning');
            descriptionErrors.innerText = ''
        }
    });

    ratingField.addEventListener('change', function(){
        if(ratingField.value < 0 || ratingField.value > 10){
            ratingField.classList.add('warning');
            ratingField.classList.remove('success');
            ratingErrors.innerText = 'La escala de rating va entre 0 y 10';
        }else {
            ratingField.classList.add('success');
            ratingField.classList.remove('warning');
        }
    });

    discountField.addEventListener('change', function(){
        if(discountField.value < 0 || discountField.value > 100){
            discountField.classList.add('warning');
            discountField.classList.remove('success');
            discountErrors.innerText = 'Por favor, ingresa un porcentaje de descuento valido';
        } else{
            discountField.classList.add('success');
            discountField.classList.remove('warning');
            discountErrors.innerText = '';
        }
    });

    submit.addEventListener('submit', event =>{
        let errorFields = [ nameErrors, priceErrors, imageErrors, specsErrors, descriptionErrors, ratingErrors, discountErrors ]
        let errors = 0
        errorFields.forEach( error =>{
          if(error.innerText.length > 0){
            errors += 1
          }
        })
        if(errors != 0){
          event.preventDefault()
          alert('Algo salio mal, por favor verifica los datos')
        }
      });

});

