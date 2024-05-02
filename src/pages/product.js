import React from 'react'
import ProductData from '../data/product.json'
import { useShoppingContext } from '../context';
import { Button, Divider, message, Space } from 'antd';
import { formatCurrency } from '../helper/common';
import { useDevice } from '../hook/useDevice';

const Product = () => {
    const { products } = ProductData;
    const { addCartItem } = useShoppingContext()
    const { isMobile, isTablet, isHeader } = useDevice();

    return (
        <div>
            <div className="flex mt-[150px] h-[1000px]">
                <h3>Products</h3>
                {products.map(item => {
                    return (
                        <div key={item.id}>
                            <div className='bg-white w-[250px] mx-auto mt-5'>
                                <div className=' w-[250px] mx-auto hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 mt-2'>
                                    <a href='/chi-tiet-san-pham' className='relative w-[250px] '>
                                        <div className='relative '>
                                            <img src={item.thumbnail} alt={item.name} className='w-[100%] h-[220px] mx-auto object-fill rounded-tl-xl rounded-tr-xl' />
                                        </div>
                                        <div className='absolute top-[10px] left-1'>
                                            <img src='https://blinds.vn/wp-content/themes/templatenoithat5/images/deal-badge@2x.png' alt={'img-card'} className='w-[50px] h-[50px]  mx-auto object-fill' />
                                        </div>
                                        <div className='absolute top-[20px] left-[9px]'>
                                            <p className='text-base	text-white'>-20%</p>
                                        </div>
                                        <div>

                                        </div>
                                        <p className='text-lg text-black font-medium line-clamp-1 dark:text-white text-center mt-3'>{item.name}</p>
                                        <Divider>RT009</Divider>

                                    </a>
                                    <div className='relative text-center bg-[#333] text-white py-2'>
                                        <p className='text-base	font-medium '>{formatCurrency(item.saleOff)}</p>
                                        <p className='text-sm line-through text-[#ccc]'>{formatCurrency(item.price)}</p>
                                        <button onClick={() => addCartItem(item)} className='absolute bottom-[20%] left-[85%] '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="white" d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3M7 18c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m10 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-9.8-3.2v-.1l.9-1.7h7.4c.7 0 1.4-.4 1.7-1l3.9-7l-1.7-1l-3.9 7h-7L4.3 2H1v2h2l3.6 7.6L5.2 14c-.1.3-.2.6-.2 1c0 1.1.9 2 2 2h12v-2H7.4c-.1 0-.2-.1-.2-.2" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Product
