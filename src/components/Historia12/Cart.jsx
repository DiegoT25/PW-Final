import React from 'react';
import {useCart} from "react-use-cart"
import Container from 'react-bootstrap/Container';
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();
const a = {cartTotal}
    if (isEmpty) return <h1 className='texto12a'>Tu carrito está vacío amiguin</h1>
    return (
        <Container>
            <div id='Carrito13a'>
            <table className='table table-light table-hover m-0' >
                <tbody>
                {items.map((item,index) =>{
                    return(
                    <tr key={index}>
                        <td>
                            <Image src={item.img}></Image>
                        </td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>Cantidad ({item.quantity})</td>
                        <td>
                            <Button className='btn btn-info ms-2' 
                            onClick={()=> updateItemQuantity(item.id,item.quantity-1)}>-</Button>
                            <Button className='btn btn-info ms-2' 
                            onClick={()=> updateItemQuantity(item.id,item.quantity+1)}>+</Button>
                            <Button className='btn btn-danger ms-2' onClick={()=> removeItem(item.id)}>Remove</Button>
                        </td>
               
                    </tr>
                    )
                })}
                </tbody>
            </table>
            </div>
            <p> </p>
        </Container>
    )
}

export default Cart;