import React, {Component} from 'react';
import Products  from './Products';


class ProductsInDb extends Component{
    constructor(){
        super()
        this.state={
            productsList: []
        }   
    }


    componentDidMount()
    {

        fetch('http://localhost:3000/api/product')
        .then(respuesta =>{
            console.log(respuesta)
        return respuesta.json()
        
        })
        .then(products =>{
        console.log(products)
        this.setState({productsList: products.products})
        console.log(products.count)
        })
        .catch(error => console.log(error))
    }


    render(){
        return (
            <React.Fragment>
                    {/*<!-- Categories in DB -->*/}
                    <div>					
                        <div className="card shadow mb-4">
                            <div className="card-header py-2 bg-primary ">
                                <h6 className="m-0 font-weight-bold">Lista de Productos</h6>
                            </div>
                            <div>
                                <div className="row hover-shadow">
                                    {
                                        this.state.productsList.map((product,index)=>{
                                            return  <Products  {...product}  key={index} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
               
            </React.Fragment>
        )
    }
    

}
export default ProductsInDb;