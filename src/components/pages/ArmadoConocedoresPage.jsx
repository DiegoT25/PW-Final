import Layout1 from '../layout/Layout1';
import ArmadoConocedores from '../ArmadoConocedores';
import {CartProvider} from 'react-use-cart';

const ArmadoConocedoresPage =() =>{
    return(
        <>
        <Layout1
            main={
            <CartProvider>
            <ArmadoConocedores />
            </CartProvider>
            }>
                
            </Layout1>
        </>
    )
}

export default ArmadoConocedoresPage;