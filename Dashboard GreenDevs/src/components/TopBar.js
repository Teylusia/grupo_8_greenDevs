import React from 'react';


function TopBar(){
    return(
        <React.Fragment>
				{/*<!-- Topbar -->*/}
				<nav className="navbar navbar-expand navbar-light topbar mb-4 static-top shadow">
					<ul className="navbar-nav ml-auto">
						<div className=""></div>
						{/*<!-- Nav Item - User Information -->*/}
						<li className="nav-item dropdown no-arrow">

								<span className="text-gray-600 small">¡Bienvenido!</span>
								
							
						</li>

					</ul>

				</nav>
				{/*<!-- End of Topbar -->*/}

        </React.Fragment>
    )
}
export default TopBar;