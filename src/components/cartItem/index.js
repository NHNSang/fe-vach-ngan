import React from 'react'
import { Button, Col, Divider, message, Row, Space } from 'antd';
import { useShoppingContext } from '../../context';
import { formatCurrency } from '../../helper/common';

const CartItem = ({ id, name, price, qty, thumbnail }) => {
    const { increaseQty, decreaseQty, removeCartItem } = useShoppingContext()
    return (
        <>
            <Row gutter={{xs:16, md: 16, lg: 16, xl:16, xxl: 16 }} className=' items-center'>
                <Col xs={5} md={5} lg={5} xl={5} xxl={5}>
                    <img src={thumbnail} className="object-contain h-full w-full" alt="Product 1" />
                </Col>
                <Col xs={15} md={15} lg={15} xl={15} xxl={15}>
                    <p className="text-lg font-medium">{name}</p>
                    <div className='flex justify-between items-center mt-1'>
                        <p className=""><span className='font-medium'>{formatCurrency(price)}</span> x {qty}</p>
                        <div className='flex gap-1'>
                            <Button type="primary" size='small' onClick={() => decreaseQty(id)}>-</Button>
                            <Button type="primary" size='small' onClick={() => increaseQty(id)}>+</Button>
                        </div>
                    </div>
                    <p className="text-red-500 font-medium mt-1">Thành tiền: {formatCurrency(qty * price)}</p>
                </Col>
                <Col xs={4} md={4} lg={4} xl={4} xxl={4}>
                    <div className='flex flex-col justify-center'>
                        <Button danger size="small" onClick={() => removeCartItem(id)}>Xoá</Button>
                    </div>
                </Col>
            </Row>
            <Divider />
        </>

    )
}

export default CartItem
