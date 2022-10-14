import React from 'react';
import {useCart} from "react-use-cart"
import Container from 'react-bootstrap/Container';
import Image from "react-bootstrap/Image";

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

    if (isEmpty) return <h1 className='texto12a'>Tu carrito está vacío amiguin</h1>
    return (
        <Container>
            <table className='table table-light table-hover m-0'>
                <tbody>
                {items.map((item,index) =>{
                    return(
                    <tr key={index}>
                        <td>
                            <Image src={item.img}></Image>
                        </td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>Quantity ({item.quantity})</td>
                    </tr>
                    )
                })}
                </tbody>
            </table>
        </Container>
    )
}

export default Cart;