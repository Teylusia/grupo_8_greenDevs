const username = document.querySelector('#username');
const usernameErrors = document.querySelector('#username-errors');

const image = document.querySelector('#image');
const imageErrors = document.querySelector('#image-errors');
const myImg = document.querySelector('#myImg')

const price = document.querySelector('#price');
const priceErrors = document.querySelector('#price-errors');

const discount = document.querySelector('#discount');
const discountErrors = document.querySelector('#discount-errors');

const description = document.querySelector('#description');
const descriptionErrors = document.querySelector('#description-errors');

const specs = document.querySelector('#specs');
const specsErrors = document.querySelector('#specs-errors');

const submit = document.querySelector('#product-edit-form')

username.addEventListener('blur', event =>{
  if(event.target.value.length <= 5){
      
      username.classList.add('warning')
      username.classList.remove('success')
      if(usernameErrors.innerHTML.length == 0){
        usernameErrors.innerText = 'Debes ingresar un nombre de usuario con mas de 5 caracteres.'
      }
  }else{
    username.classList.remove('warning')
    username.classList.add('success')
    usernameErrors.innerText = ''  
  }
})

price.addEventListener('blur', event =>{
  console.log(event.target.value.length)
  if(event.target.value <= 0){
      
      price.classList.add('warning')
      price.classList.remove('success')
      if(priceErrors.innerHTML.length == 0){
        priceErrors.innerText = 'Debes ingresar un precio valido.'
      }
  }else{
    price.classList.remove('warning')
    price.classList.add('success')
    priceErrors.innerText = ''  
  }
})

image.addEventListener('change', event =>{
  let allowedExt = ['jpg', 'jpeg', 'png', 'gif']
  let ext = image.value.slice(-3)
  let goodFile = allowedExt.find(allExt => allExt == ext)
  console.log(image.value)
  if(goodFile == ext){
    myImg.classList.add('success');
    myImg.classList.remove('warning');
    imageErrors.innerText = ''
  }else if(goodFile != ext){
    myImg.classList.remove('success');
    myImg.classList.add('warning');
    if(imageErrors.innerText.length == 0){
        imageErrors.innerText = 'Tu imagen debe tener un formato valido.'
    }
  }
})

discount.addEventListener('blur', event =>{
  if(discount.value < 0 || discount.value > 100){
    discount.classList.add('warning')
    discount.classList.remove('success')
    if(discountErrors.innerText.length == 0){
      discountErrors.innerText = 'Tu descuento debe ser aplicado entre un 0% y un 100%.'
    }
  }else{
    discount.classList.add('success')
    discount.classList.remove('warning')
    discountErrors.innerText = ''
  }
})

description.addEventListener('blur', event =>{
  if(description.value.length < 20){
    description.classList.add('warning')
    description.classList.remove('success')
    if(descriptionErrors.innerText.length == 0){
      descriptionErrors.innerText = 'tu descripción debe tener un mínimo de 20 caracteres.'
    }
  }else{
    description.classList.add('success')
    description.classList.remove('warning')
    descriptionErrors.innerText = ''
  }
})


specs.addEventListener('blur', event =>{
  if(specs.value.length < 20){
    specs.classList.add('warning')
    specs.classList.remove('success')
    if(specsErrors.innerText.length == 0){
      specsErrors.innerText = 'tus requisitos deben tener un mínimo de 20 caracteres.'
    }
  }else{
    specs.classList.add('success')
    specs.classList.remove('warning')
    specsErrors.innerText = ''
  }
})

submit.addEventListener('submit', event =>{
  let errorFields = [ specsErrors, descriptionErrors, discountErrors, imageErrors, usernameErrors, priceErrors]
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




