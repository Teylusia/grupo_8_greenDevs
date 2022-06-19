let productPrice = document.querySelector('#price-product').textContent
const productImg = document.querySelector('#image-product').src;
const productName = document.querySelector('#product-name').textContent;
const productId = document.querySelector('#product-name').getAttribute('id-product');

const cartButton = document.querySelector('#carrito')

const cartText = document.querySelector('#texto-carrito')


cartButton.addEventListener('click', function(event){
    let productoRaw = {nombre: productName, precio: productPrice, id: productId, imagen: productImg}

    console.log(localStorage)

    let producto = JSON.stringify(productoRaw)
    localStorage.setItem(`producto ${productId}`, producto)
    cartText.innerText = 'Agregado al carrito!'
})
