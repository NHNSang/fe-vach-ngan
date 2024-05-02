import { Divider } from 'antd';
import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDevice } from '../../hook/useDevice';
import style from './style.css';
import ProductData from '../../data/product.json';
import { useShoppingContext } from '../../context';
import { formatCurrency } from '../../helper/common';
const SuggestItems = () => {
    const { products } = ProductData;
    const { addCartItem } = useShoppingContext()
    const { isMobile, isTablet, isHeader } = useDevice();
    const settings = {
        infinite: true,
        slidesToShow: isMobile ? 2 : isHeader ? 3 : 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 500,
        arrows: true,
    };
    return (
        <div className='mt-5 py-5 bg-white'>
            <div className='text-lg lg:text-xl font-bold text-[#3980F1] '>
                <p className=' pl-[25px] sm:pl-[47px]'>Gợi ý sản phẩm cho bạn</p>
            </div>
            <div className='w-[95%] mx-auto mt-3'>
                <Slider {...settings} className={style} >
                    {products.map(item => {
                        return (
                            <div key={item.id}>
                                <div className='  border border-black pt-2 md:pt-5 w-[170px] md:w-[200px]  lg:w-[250px] xl:w-[350px] mx-auto hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 mt-2'>
                                    <a href={`/chi-tiet-san-pham/${item.id}`} className='relative w-[170px] md:w-[200px] lg:w-[250px] xl:w-[350px] '>
                                        <div className='relative '>
                                            <img src={item.thumbnail} alt={item.name} className='w-[88%] md:w-[80%] h-[130px] lg:h-[155px] xl:h-[220px] mx-auto object-fill' />
                                        </div>
                                        <div className='absolute top-[-4px] md:top-[-10px] right-[5px] md:right-[13px]'>
                                            <img src='https://blinds.vn/wp-content/themes/templatenoithat5/images/deal-badge@2x.png' alt={'img-card'} className='w-[40px] md:w-[50px] h-[40px] md:h-[50px]   object-fill' />
                                        </div>
                                        <div className='absolute top-[5px] md:top-[0px]  right-[9px] md:right-[17px]'>
                                            <p className='text-sm md:text-base	text-white'>-15%</p>
                                        </div>
                                        <p className='text-sm md:text-base lg:text-lg text-black font-medium line-clamp-1  text-center mt-3'>{item.name}</p>
                                        {isTablet ? <Divider style={{ margin: '8px 0', fontSize: '13px' }}>RT009</Divider> : <Divider style={{ margin: '8px 0', fontSize: '16px' }}>RT009</Divider>}
                                    </a>
                                    <div className='relative text-center bg-[#333] text-white py-[2px] md:py-2'>
                                        <p className='text-sm lg:text-base	font-medium '>{formatCurrency(item.saleOff)}</p>
                                        <p className='text-xs lg:text-sm line-through text-[#ccc]'>{formatCurrency(item.price)}</p>
                                        <button onClick={() => addCartItem(item)} className='absolute bottom-[25%] lg:bottom-[20%] left-[83%] lg:left-[85%] w-[1.5em] md:w-[1.5em] lg:w-[2em] '>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3M7 18c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m10 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-9.8-3.2v-.1l.9-1.7h7.4c.7 0 1.4-.4 1.7-1l3.9-7l-1.7-1l-3.9 7h-7L4.3 2H1v2h2l3.6 7.6L5.2 14c-.1.3-.2.6-.2 1c0 1.1.9 2 2 2h12v-2H7.4c-.1 0-.2-.1-.2-.2" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )})}
                </Slider>
            </div>


        </div>
    )
}

export default SuggestItems
