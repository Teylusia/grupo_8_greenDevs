import React from 'react'


function UserList(props){
    return(
        <React.Fragment>
            <tbody>
											<tr>
												<td>{props.id}</td>
												<td>{props.name}</td>
												<td>{props.email}</td>
											</tr>
											
			</tbody>
            </React.Fragment> 
    )
}

export default UserList;