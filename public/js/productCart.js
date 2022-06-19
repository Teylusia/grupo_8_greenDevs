const buyButton = document.querySelector('#buy')
const cartList = document.querySelector('#lista-de-productos')


  let cartInfo = localStorage
  let cartRaw= Object.keys(localStorage);
  let cartAmount = cartRaw.filter(key => key.includes('producto'));

  let cartString = cartRaw.filter(key => key.includes('producto')).reduce((obj,key) =>{ 
    obj[key] = cartInfo[key]
    return obj
  },{});

  let cart = []
  cartAmount.forEach( product =>{
    cart.push(JSON.parse(cartString[product]))
  })

  console.log(cart)

  cart.forEach(product =>{
    cartList.innerHTML += 
    `
    <article class='producto-unidad'>
          <div class='img-producto'>
            <img src='${product.imagen}' alt='imagen de producto' class='imagen-de-producto'>
            <div class="bloque-medio">
              <span>${product.nombre}</span>
              <div class="contador">
                <button class="boton-contador">-</button>
                <div class="contador-numero">
                  0
                </div>
                <button class="boton-contador">+</button>
              </div>
            </div>
          </div>
            <div class='descripcion-precio'>
              <i class="fa-solid fa-trash"></i>
              <p>Precio $ ${product.precio} </p>
            </div>
        </article>
    `
})
