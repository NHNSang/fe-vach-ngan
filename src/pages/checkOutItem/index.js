import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useShoppingContext } from '../../context'
import { formatCurrency } from '../../helper/common'
import BreadcrumbComnponent from '../../components/breadcrumb'
import { Button, Col, Divider, Input, Modal, Row, message } from 'antd'
import { useDevice } from '../../hook/useDevice'
import TextArea from 'antd/es/input/TextArea'

const CheckoutItem = () => {
    const navigate = useNavigate()
    const { cartItems, totalPrice, increaseQty, decreaseQty, removeCartItem, clearCart } = useShoppingContext()
    const { isTabletNew, isMobile } = useDevice()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        message.success('Cảm ơn bạn đã đặt hàng tại Vách ngăn Tổ ong Đà Nẵng, nhân viên sẽ liên hệ sớm với bạn trong thời gian sớm nhất!');
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="bg-[#f5f5f5] mt-[90px] md:mt-[130px] lg:mt-[130px]  xl:mt-[133px] " >
            <div className='container mx-auto pt-5 pb-8'>
                <BreadcrumbComnponent title_1="Trang chủ" title_2="Xem giỏ hàng" />
                <Row gutter={{ lg: 16, xl: 16, xxl: 16 }}>
                    <Col xs={24} md={24} lg={19} xl={19}>
                        {isMobile ?
                            <div className="bg-white mx-3">
                                {cartItems.map(item => {
                                    return (
                                        <div key={item.id}>
                                            <Row gutter={{ xs: 16 }} >
                                                <Col xs={7} >
                                                    <img src={item.thumbnail} alt={item.name} className="object-contain h-full w-[80%] sm:w-[60%] mx-auto" />
                                                </Col>
                                                <Col xs={17}   >
                                                    <div className='flex justify-between '>
                                                        <p className="text-base font-medium mt-1">{item.name}</p>
                                                        <Button danger size="small" onClick={() => removeCartItem(item.id)}>x</Button>
                                                    </div>
                                                    <Divider style={{ margin: '4px 0' }} />
                                                    <div className='flex justify-between items-center'>
                                                        <p className="text-base font-medium mt-1">Giá</p>
                                                        <p className="text-gray-500 font-medium mr-2">{formatCurrency(item.price)}</p>
                                                    </div>
                                                    <Divider style={{ margin: '4px 0' }} />
                                                    <div className='flex justify-between items-center'>
                                                        <p className="text-base font-medium mt-1">Số lượng</p>
                                                        <div className='flex gap-1 mr-2'>
                                                            <Button type="primary" size='small' onClick={() => decreaseQty(item.id)}>-</Button>
                                                            {item.qty}
                                                            <Button type="primary" size='small' onClick={() => increaseQty(item.id)}>+</Button>
                                                        </div>
                                                    </div>
                                                    <Divider style={{ margin: '4px 0' }} />
                                                    <div className='flex justify-between items-center'>
                                                        <p className="text-base font-medium mt-1">Thành tiền</p>
                                                        <p className="text-red-500 font-medium mt-1 mr-2">{formatCurrency(item.price * item.qty)}</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Divider style={{ margin: '15px 0' }} />
                                        </div>
                                    )
                                })}



                            </div> :
                            <table className="border border-gray-300 bg-white w-full">
                                <thead>
                                    <tr>
                                        <th className="border-b border-r border-gray-300 px-4 py-2 w-[20%]">Image</th>
                                        <th className="border-b border-r border-gray-300 px-4 py-2 w-[25%]">Tên</th>
                                        <th className="border-b border-r border-gray-300 px-4 py-2 w-[15%]">Giá</th>
                                        <th className="border-b border-r border-gray-300 px-4 py-2 w-[15%]">Số lượng</th>
                                        <th className="border-b border-r border-gray-300 px-4 py-2 w-[10%]"></th>
                                        <th className="border-b border-r border-gray-300 px-4 py-2 w-[15%]">Tổng tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map(item => {
                                        return (
                                            <tr key={item.id}>
                                                <td className="border-b border-r border-gray-300 px-4 py-2">
                                                    <img src={item.thumbnail} alt={item.name} className='w-[50%] h-[100px] mx-auto' />
                                                </td>
                                                <td className="border-b border-r border-gray-300 px-4 py-2 text-center font-medium">{item.name}</td>
                                                <td className="border-b border-r border-gray-300 px-4 py-2 text-center">{formatCurrency(item.price)}</td>
                                                <td className="border-b border-r border-gray-300 px-4 py-2 text-center">
                                                    <div className='flex gap-2 justify-center'>
                                                        <Button type="primary" size='small' onClick={() => decreaseQty(item.id)}>-</Button>
                                                        {item.qty}
                                                        <Button type="primary" size='small' onClick={() => increaseQty(item.id)}>+</Button>
                                                    </div>
                                                </td>
                                                <td className="border-b border-r border-gray-300 px-4 py-2 text-center">
                                                    <Button danger size="small" onClick={() => removeCartItem(item.id)}>Xoá</Button>
                                                </td>
                                                <td className="border-b border-r border-gray-300 px-4 py-2 text-center">{formatCurrency(item.price * item.qty)}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>}
                    </Col>
                    <Col xs={24} md={24} lg={5} xl={5}>
                        <div className={isTabletNew ? 'border border-gray-300 p-4 text-center bg-white mt-5 mx-3' : 'border border-gray-300 p-4 text-center bg-white'}>
                            <p className='font-medium text-xl'>Tổng tiền giỏ hàng</p>
                            <Divider style={{ margin: '6px 0' }} />
                            <span className='flex justify-between text-base my-2'>Tổng tiền:<strong className='text-red-500'> {formatCurrency(totalPrice)}</strong></span>
                            <button className={isTabletNew ? 'w-[30%] md:w-[20%] mx-auto px-2 py-2 rounded-xl bg-[#dfbe12] text-white mt-2 hover:bg-yellow-500 transition duration-100' : 'w-full px-10 py-2 rounded-xl bg-[#dfbe12] text-white mt-2 hover:bg-yellow-500 transition duration-100'} onClick={showModal}>
                                Đặt hàng
                            </button>
                        </div>
                    </Col>
                </Row>
                <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} className=''>
                <h1 className='text-lg font-medium text-center'>Đăng kí tư vấn miễn phí</h1>
                <div className='mt-5'></div>
                <p className='ml-1'>Họ và tên:</p>
                <Input placeholder="Nhập tên của bạn" />
                <div className='mt-3'></div>
                <p className='ml-1'>Địa chỉ:</p>
                <Input placeholder="Nhập địa chỉ" className='mt-3' />
                <div className='mt-3'></div>
                <p className='ml-1'>Số điện thoại:</p>
                <Input placeholder="Nhập số điện thoại" className='mt-3' />
                <p className='ml-1'>Địa chỉ:</p>
                <Input placeholder="Nhập địa chỉ" className='mt-3' />
                <p className='ml-1'>Ghi chú:</p>
                <TextArea rows={4} placeholder="Nhập ghi chú" className='mt-3'/>
                <div className='mt-5 flex justify-center gap-3'>
                    <button className='border px-4 py-2 rounded-xl bg-white' onClick={handleCancel}>Huỷ</button>
                    <button className='border px-2 py-2 rounded-xl bg-[#dfbe12] text-white' onClick={handleOk}>Gủi yêu cầu</button>
                </div>
            </Modal>

            </div>

        </div>
    )
}

export default CheckoutItem
