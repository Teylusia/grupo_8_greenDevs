
import React from 'react';

function Products(props){
    return(
        <React.Fragment>
            <div className="col-lg-3 mb-2">
                <div className="card ml-1 mr-1">
                    <div className="ml-2">
                     {props.id} {' - '} {props.name} 
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Products;