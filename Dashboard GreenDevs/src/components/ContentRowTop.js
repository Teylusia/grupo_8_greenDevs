import React from 'react';
import UsersInDb from './UsersInDb';
import ContentRowProducts from './ContentRowProducts';
import ProductsInDb from './ProductsInDb';
import CategoriesInDb from './CategoriesInDb';
import LastProductInDb from './LastProductInDb';
import ProductsByCategory from './ProductsByCategory';
function ContentRowTop(){
    return(
        <React.Fragment>
			<div className='mainContent mw-100 mh-100'>
				{/*<!-- Content Row Top -->*/}
				
					{/*<!-- Content Row Products Totals-->*/}
					<ContentRowProducts />
					{/*<!-- End Content Row Products Totals-->*/}
					
					<div className='mainContentTop'>
					{/*<!-- Content Row Categories Totals-->*/}
					<CategoriesInDb/>
					<ProductsByCategory/>
					<LastProductInDb />

					</div>
					{/*<!-- Content Row Categories Totals-->*/}

					<div>
					<ProductsInDb />
					</div>
					
					<div className=''>
					<UsersInDb />
					</div>

				{/*<!--End Content Row Top-->*/}
				</div>
        </React.Fragment>
    )

}
export default ContentRowTop;