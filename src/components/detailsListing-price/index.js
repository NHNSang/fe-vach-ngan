import { Divider, Rate } from 'antd'
import React from 'react'
import { useDevice } from '../../hook/useDevice';
import { useShoppingContext } from '../../context';
import { formatCurrency } from '../../helper/common';
import ProductData from '../../data/product.json'

const DetailsListingPrice = ({ name, saleOff, price, id }) => {
    const { isTabletNew } = useDevice();
    const { addCartItem } = useShoppingContext()
    const { products } = ProductData;
    return (
        <>
            {isTabletNew ?
                <div className='px-4 mt-5 xl:mt-0'>
                    <h1 className='text-2xl font-medium text-center'>{name}</h1>
                    <Divider style={{ margin: '6px 0' }} />
                    <div className='flex justify-center items-center gap-3 mt-3'>
                        <Rate disabled defaultValue={4} />
                        <Divider type='vertical' />
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0" /></svg>
                        <p className='text-lg'>1,2k</p>
                    </div>
                    <Divider style={{ margin: '6px 0' }} />
                    <div className=' border border-black rounded-lg w-[60%] text-center px-3 py-2 text-red-500 mt-3 text-xl mx-auto'>{formatCurrency(price)}<span className='line-through ml-2 text-lg text-gray-500'>{formatCurrency(saleOff)}</span> </div>
                    <div className='flex items-center sm:justify-end justify-center mt-5 gap-3'>
                        <button className='px-5 py-2 rounded-xl bg-red-500 text-white' onClick={() => addCartItem(products[id])}>Thêm vào giỏ hàng</button>
                        <button className='px-5 py-2 rounded-xl bg-[#3980F1] text-white'>Tư vấn: 0775.452.291</button>
                    </div>
                </div> :
                <div className='px-4 mt-5 xl:mt-0'>
                    <h1 className='text-2xl font-medium'>{name}</h1>
                    <Divider />
                    <div className='flex items-center gap-3 mt-3'>
                        <Rate disabled defaultValue={4} />
                        <Divider type='vertical' />
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0" /></svg>
                        <p className='text-lg'>1,2k</p>
                    </div>
                    <Divider />
                    <div className=' border border-black rounded-lg w-[60%] text-center px-3 py-2 text-red-500 mt-3 text-xl'>{formatCurrency(saleOff)}<span className='line-through ml-2 text-lg text-gray-500'>{formatCurrency(price)}</span> </div>

                    <div className='flex items-center mt-5 gap-3'>
                        <button className='px-5 py-2 rounded-xl bg-red-500 text-white' onClick={() => addCartItem(products[id])}>Thêm vào giỏ hàng</button>
                        <button className='px-5 py-2 rounded-xl bg-[#3980F1] text-white'>Tư vấn: 0775.452.291</button>
                    </div>
                </div>
            }
        </>
    )
}

export default DetailsListingPrice
