import React, { useState, useEffect } from 'react';
import SmallCard from './SmallCard';


function ContentRowTop(){

    const [products, setProducts ] = useState('')
    useEffect( ( )=> {
        fetch('http://localhost:3000/api/product')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(products =>{
        setProducts(products.count)})
        .catch(error => console.log(error))
    } )

    console.log(products)

    const [users, setUsers ] = useState('')
    useEffect( ( )=> {
        fetch('http://localhost:3000/api/users')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(users =>{
        console.log(users)
        setUsers(users.count)
        })
        .catch(error => console.log(error))
    } )

    const [categories, setCategories ] = useState('')
    useEffect( ( )=> {
        fetch('http://localhost:3000/api/product')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(categories =>{
        console.log(categories)
        setCategories(categories.CAT)
        })
        .catch(error => console.log(error))
    } )

    let productInDataBase = {
        color:   "success",
        titulo: "Total Productos",
        valor: products,
        icono: "fas fa-fw fa-chart-area",
    }
    
    let user = {
        color:   "success",
        titulo: "Total Usuarios",
        valor: users,
        icono: "fas fa-user",
    }
    
    let amount ={
        color:   "success",
        titulo: "Total Categorías",
        valor: categories,
        icono: "fas fa-fw fa-table",
    }
    

    let cardProps = [productInDataBase,user, amount];
 

    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
} 
export default ContentRowTop;