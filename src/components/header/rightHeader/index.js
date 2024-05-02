import { Button, Drawer } from 'antd';
import React, { useState } from 'react'
import { useDevice } from '../../../hook/useDevice';
import { useShoppingContext } from '../../../context';
import CartItem from '../../cartItem';
import { formatCurrency } from '../../../helper/common';
import { Link } from 'react-router-dom';

const RightHeader = () => {
  const [open, setOpen] = useState(false);
  const { isHeader } = useDevice();
  const { cartItems, cartQty, totalPrice } = useShoppingContext()

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className='flex items-center gap-6 text-white'>
      {isHeader ? undefined : <div className=' border-[#dfbe12] border-2  rounded-2xl px-0 xl:px-1	 2xl:px-4 py-2 hover:bg-white duration-100 text-white hover:text-[#dfbe12] font-bold'>
        <a href='tel:+840775452291' style={{ color: 'currentColor', textDecoration: 'none' }}>Hotline: 0775.452.291</a>
      </div>}

      {isHeader ?
        <button className='relative flex flex-col items-center justify-center  cursor-pointer' onClick={showDrawer}>
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="white" d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z" /></svg>
          <div className='absolute top-[-14px] right-[-6px] w-[25px] h-[25px] bg-red-500 rounded-full text-white text-center'>
            <p>{cartQty}</p>
          </div>
        </button> :
        <button className='relative flex flex-col items-center justify-center  cursor-pointer' onClick={showDrawer}>
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="white" d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z" /></svg>
          <p>Giỏ hàng</p>
          <div className='absolute top-[-8px] right-0 w-[20px] h-[20px] bg-red-500 rounded-full text-white text-center'>
            {cartQty}
          </div>
        </button>}

      {isHeader ? <div className='flex flex-col items-center justify-center cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="white" d="M12 1.996a7.49 7.49 0 0 1 7.496 7.25l.004.25v4.097l1.38 3.156a1.25 1.25 0 0 1-1.145 1.75L15 18.502a3 3 0 0 1-5.995.177L9 18.499H4.275a1.25 1.25 0 0 1-1.147-1.747L4.5 13.594V9.496c0-4.155 3.352-7.5 7.5-7.5M13.5 18.5l-3 .002a1.5 1.5 0 0 0 2.993.145zM12 3.496c-3.32 0-6 2.674-6 6v4.41L4.656 17h14.697L18 13.907V9.509l-.003-.225A5.99 5.99 0 0 0 12 3.496" /></svg>
      </div> : <div className='flex flex-col items-center justify-center cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="white" d="M12 1.996a7.49 7.49 0 0 1 7.496 7.25l.004.25v4.097l1.38 3.156a1.25 1.25 0 0 1-1.145 1.75L15 18.502a3 3 0 0 1-5.995.177L9 18.499H4.275a1.25 1.25 0 0 1-1.147-1.747L4.5 13.594V9.496c0-4.155 3.352-7.5 7.5-7.5M13.5 18.5l-3 .002a1.5 1.5 0 0 0 2.993.145zM12 3.496c-3.32 0-6 2.674-6 6v4.41L4.656 17h14.697L18 13.907V9.509l-.003-.225A5.99 5.99 0 0 0 12 3.496" /></svg>
        <p>Thông báo</p>

      </div>}

      <Drawer title="Giỏ hàng" footer={
        cartItems.length > 0 ? (
          <>
            <div className='flex justify-between items-center'>
              <p className='text-black font-medium text-base'>Tổng thanh toán: <span className='text-red-500 font-medium'>{formatCurrency(totalPrice)}</span> </p>
              <div className='  bg-[#dfbe12]	 rounded-2xl px-4 py-2 hover:bg-yellow-500 transition duration-100 text-white  font-bold text-center'>
                <a href='/xem-gio-hang' style={{ color: 'currentColor', textDecoration: 'none' }}>Xem giỏ hàng</a>
              </div>
            </div>
          </>
        ) : (
          null
        )} onClose={onClose} open={open}>
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map(item => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>

        ) : (
          <>
            <div className='flex justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="6rem" height="6rem" viewBox="0 0 24 24"><path fill="gray" d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3M7 18c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m10 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-9.8-3.2v-.1l.9-1.7h7.4c.7 0 1.4-.4 1.7-1l3.9-7l-1.7-1l-3.9 7h-7L4.3 2H1v2h2l3.6 7.6L5.2 14c-.1.3-.2.6-.2 1c0 1.1.9 2 2 2h12v-2H7.4c-.1 0-.2-.1-.2-.2" /></svg>
            </div>
            <p className='text-center text-base font-medium'>CHƯA CÓ SẢN PHẨM TRONG GIỎ HÀNG.</p>
            <div className=' w-[55%] mx-auto mt-5 bg-[#dfbe12]	 rounded-2xl px-4 py-2 hover:bg-yellow-500 transition duration-100 text-white  font-bold text-center'>
              <a href='/' style={{ color: 'currentColor', textDecoration: 'none' }}>Trở lại của hàng</a>
            </div>
          </>
        )}

      </Drawer>

    </div>
  )
}

export default RightHeader
