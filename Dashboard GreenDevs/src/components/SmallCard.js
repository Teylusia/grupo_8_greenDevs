import React from 'react';

function SmallCard(props){
    return(
        <React.Fragment>
            <div className="col-md-4 mb-2">
                <div className={`card border-left-${props.color} shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col">
                                <div className={`font-weight-bold text-${props.color} text-uppercase mb-1`}> {props.titulo}</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{(props.valor)}</div>
                            </div>
                            <div>
                                <i className={`fas ${props.icono} fa-2x text-gray-300`}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default SmallCard;