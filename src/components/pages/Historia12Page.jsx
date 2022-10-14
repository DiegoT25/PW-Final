import Layout1 from '../layout/Layout1';
import Historia12 from '../Historia12';
import {CartProvider} from 'react-use-cart';

const Historia12Page =() =>{
    return(
        <>
        <Layout1
            main={
            <CartProvider>
            <Historia12 />
            </CartProvider>
            }>
                
            </Layout1>
        </>
    )
}

export default Historia12Page;