import React,{Component} from 'react';

import UserList from './User';

class UsersInDb extends Component{

	constructor(){
        super()
        this.state={
            usersList: []
        }   
    }

	componentDidMount()
    {

        fetch('http://localhost:3000/api/users')
        .then(respuesta =>{
            console.log(respuesta)
        return respuesta.json()
        
        })
        .then(users =>{
        console.log(users)
        this.setState({usersList: users.users})
        })
        .catch(error => console.log(error))
    }


	render(){

		return(
			<React.Fragment>
						{/*<!-- PRODUCTS LIST -->*/}

						<div className="card shadow mb-4">
            
							<div className="">
								<div className="table-responsive">
									<div className="card-header py-2 bg-primary ">
                                		<h6 className="m-0 font-weight-bold">Lista de Usuarios</h6>
                            		</div>
									
									<table className="table" id="dataTable" cellSpacing="0">
										<thead>
											<tr>
												<th>ID</th>
												<th>Usuario</th>
												<th>Email</th>
											</tr>
										</thead>
										{
                                        this.state.usersList.map((user,index)=>{
                                            return <UserList  {...user}  key={index} />
                                        })
                        				}   
										
									</table>
								</div>
							</div>
						</div>  
						 
			</React.Fragment>
		)

	}
    
}
export default UsersInDb;