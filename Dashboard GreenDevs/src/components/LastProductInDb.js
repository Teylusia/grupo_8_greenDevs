import React, {useState, useEffect} from 'react';

function LastProductInDb(){

    const [lastProduct, setLastProduct ] = useState('')
    useEffect( ( )=> {
        fetch('http://localhost:3000/api/product')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(products =>{
        let last = products.products[products.products.length - 1]
        setLastProduct(last)
        })
        .catch(error => console.log(error))
    }, [] ) 

    console.log(lastProduct)
    return (
        <>	
            <div className="card shadow w-50">
                            <div className="card-header py-2 bg-primary">

                                <h6 className="m-0 font-weight-bold">Último producto agregado</h6>
                            </div>
                            <div className="card-body ">
                                <h5 className='text-success'>{lastProduct.name}</h5> {' '}
                                <p>{lastProduct.description} </p>
                            </div>
                        </div>
        </>
    )
}
export default LastProductInDb;