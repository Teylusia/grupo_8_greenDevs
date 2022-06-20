const cartList = document.querySelector('#lista-de-productos');
  let cartInfo = localStorage;
  let cartRaw= Object.keys(localStorage);
  let cartAmount = cartRaw.filter(key => key.includes('producto'));

  let cartString = cartRaw.filter(key => key.includes('producto')).reduce((obj,key) =>{ 
    obj[key] = cartInfo[key]
    return obj
  },{});

  let cart = []
  cartAmount.forEach( product =>{
    cart.push(JSON.parse(cartString[product]));
  })

  console.log(cart);

  cart.forEach(product =>{
    cartList.innerHTML += 
    `
    <article class='producto-unidad'>
          <div class='img-producto'>
            <img src='${product.imagen}' alt='imagen de producto' class='imagen-de-producto'>
            <div class="bloque-medio">
              <span>${product.nombre}</span>
              
            </div>
          </div>
            <div class='descripcion-precio'>
              <button><i id-product="${product.id}" id="trash-item" class="fa-solid fa-trash"></i> </button>
              <p>Precio $${product.precio}</p>
            </div>
        </article>
    `
});

const cartDelete = document.querySelectorAll('#trash-item');

cartDelete.forEach(trash =>{
  let productDeleteId = trash.getAttribute('id-product');
  trash.addEventListener('click', event =>{
    localStorage.removeItem(`producto ${productDeleteId}`)
    location.reload()
  });
});


let initialValue = 0;

let finalAmount = cart.reduce((value,product) => parseInt(value) + parseInt(product.precio), initialValue);

const subTotal = document.querySelector('#subtotal-resumen');
const totalPrice = document.querySelector('#total-price');


totalPrice.innerText = `$${finalAmount + (finalAmount * 0.2)}`;
subTotal.innerText = `$${(finalAmount).toFixed(2)}`;
