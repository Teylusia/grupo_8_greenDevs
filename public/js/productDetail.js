const $buttonAddToCart = document.querySelector("#carrito")
let product = res.locals.product
// const image
// const price

$buttonAddToCart.addEventListener("click", (event) => {
    event.preventDefault();
    localStorage.setItem("product", product)
}

)


//vaciar carrito 

let $cartDelete = document.querySelector(".boton-comprar#vaciar")
$cartDelete.addEventListener("click", ()=>{
localStorage.clear();
})

