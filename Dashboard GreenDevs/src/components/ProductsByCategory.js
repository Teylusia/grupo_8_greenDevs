import React, {useState, useEffect} from 'react';

function ProductsByCategory() { 
const [ProductsByCategory, setProducts ] = useState([])
useEffect( ( )=> {
    fetch('http://localhost:3000/api/product')
    .then(respuesta =>{
        return respuesta.json()
    })
    .then(ProductsByCategory =>{
    setProducts(ProductsByCategory.countByCategory)
    })
    .catch(error => console.log(error))
}, [] )

console.log('soy productsbycategory', ProductsByCategory)



        return (
            <React.Fragment>
                    {/*<!-- Categories in DB -->*/}
                    <div className="">					
                        <div className="card shadow mr-4">
                            <div className="card-header py-2 bg-primary ">
                                <h6 className="m-0 font-weight-bold">Productos por Categoría</h6>
                            </div>
                            <div className="card-body-category mh-100">
                                {ProductsByCategory.map((product, i) =>
                                    <li key={product.nombre + i}>{product.nombre} : {product.cantidad}</li>
                                )}
                                
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        )
    }

export default ProductsByCategory;