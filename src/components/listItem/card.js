import { Divider } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { useDevice } from '../../hook/useDevice';
import ProductData from '../../data/product.json'
import { formatCurrency } from '../../helper/common';
import { useShoppingContext } from '../../context';

const Card = ({ number }) => {
    const { isLayout, isTablet } = useDevice();
    const { products } = ProductData;
    const { addCartItem } = useShoppingContext()

    return (
        <>
            {isLayout ?
                <div className='bg-white  w-[180px] md:w-[200px] mx-auto mt-5'>
                    <a href={`/chi-tiet-san-pham/${products[number].id}`} className=' w-[180px] md:w-[200px] mx-auto hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 mt-2'>
                        <div className='relative w-[180px] md:w-[200px] '>
                            <div className='relative '>
                                <img src={products[number].thumbnail} alt={products[number].name} className='w-[100%] h-[130px] md:h-[150px] mx-auto object-fill rounded-tl-xl rounded-tr-xl' />
                            </div>
                            <div className='absolute top-[0px] md:top-[-10px] right-[-11px] md:right-[-22px]'>
                                <img src='https://blinds.vn/wp-content/themes/templatenoithat5/images/deal-badge@2x.png' alt={'img-card'} className='w-[50px] h-[50px]  mx-auto object-fill' />
                            </div>
                            <div className='absolute top-[11px] md:top-[0px]  right-[-5px] md:right-[-17px]'>
                                <p className='text-base	text-white'>-20%</p>
                            </div>
                            <div>

                            </div>
                            <p className='text-base lg:text-lg text-black font-medium line-clamp-1  text-center mt-2 lg:mt-3'>{products[number].name}</p>
                            {isTablet ? <Divider style={{ margin: '4px 0', fontSize: '13px' }}>RT009</Divider> : <Divider style={{ margin: '8px 0', fontSize: '13px' }}>RT009</Divider>}
                        </div>
                    </a>
                    <div className='relative text-center bg-[#333] text-white py-1 lg:py-2'>
                        <p className='text-sm lg:text-base	font-medium '>{formatCurrency(products[number].saleOff)}</p>
                        <p className='text-xs lg:text-sm line-through text-[#ccc]'>{formatCurrency(products[number].price)}</p>
                        <button onClick={() => addCartItem(products[number])} className='absolute bottom-[20%] left-[82%] '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="white" d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3M7 18c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m10 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-9.8-3.2v-.1l.9-1.7h7.4c.7 0 1.4-.4 1.7-1l3.9-7l-1.7-1l-3.9 7h-7L4.3 2H1v2h2l3.6 7.6L5.2 14c-.1.3-.2.6-.2 1c0 1.1.9 2 2 2h12v-2H7.4c-.1 0-.2-.1-.2-.2" /></svg>
                            </button>
                    </div>
                </div> :
                <div className='bg-white w-[250px] mx-auto mt-5'>
                    <div className=' w-[250px] mx-auto hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 mt-2'>
                        <a href={`/chi-tiet-san-pham/${products[number].id}`} className='relative w-[250px] '>
                            <div className='relative '>
                                <img src={products[number].thumbnail} alt={products[number].name} className='w-[100%] h-[220px] mx-auto object-fill rounded-tl-xl rounded-tr-xl' />
                            </div>
                            <div className='absolute top-[10px] left-1'>
                                <img src='https://blinds.vn/wp-content/themes/templatenoithat5/images/deal-badge@2x.png' alt={'img-card'} className='w-[50px] h-[50px]  mx-auto object-fill' />
                            </div>
                            <div className='absolute top-[20px] left-[9px]'>
                                <p className='text-base	text-white'>-20%</p>
                            </div>
                            <div>

                            </div>
                            <p className='text-lg text-black font-medium line-clamp-1 dark:text-white text-center mt-3'>{products[number].name}</p>
                            <Divider>RT009</Divider>

                        </a>
                        <div className='relative text-center bg-[#333] text-white py-2'>
                            <p className='text-base	font-medium '>{formatCurrency(products[number].saleOff)}</p>
                            <p className='text-sm line-through text-[#ccc]'>{formatCurrency(products[number].price)}</p>
                            <button onClick={() => addCartItem(products[number])} className='absolute bottom-[20%] left-[85%] '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="white" d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3M7 18c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m10 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-9.8-3.2v-.1l.9-1.7h7.4c.7 0 1.4-.4 1.7-1l3.9-7l-1.7-1l-3.9 7h-7L4.3 2H1v2h2l3.6 7.6L5.2 14c-.1.3-.2.6-.2 1c0 1.1.9 2 2 2h12v-2H7.4c-.1 0-.2-.1-.2-.2" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Card
