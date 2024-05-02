import { Divider } from 'antd';
import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDevice } from '../../hook/useDevice';
import style from './style.css';
import ProductData from '../../data/product.json';

const OutstandingItems = () => {
    const { isMobile, isTablet, isHeader } = useDevice();
    const { products } = ProductData;
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
            <div className='text-lg lg:text-xl font-bold text-[#3980F1]  '>
                <p className='pl-[25px] sm:pl-[47px]'>Sản phẩm nổi bật</p>
            </div>
            <div className='w-[95%] mx-auto'>
                <Slider {...settings} className={style} >
                    {products.map(item => {
                        return (
                            <div key={item.id}>
                                <div className='  border border-black pt-2 md:pt-5 w-[170px] md:w-[200px]  lg:w-[250px] xl:w-[350px] mx-auto hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 mt-2'>
                                    <a href={`/chi-tiet-san-pham/${item.id}`} className='relative w-[170px] md:w-[200px] lg:w-[250px] xl:w-[350px] '>
                                        <div className='relative '>
                                            <img src={item.thumbnail} alt={item.name} className='w-[88%] md:w-[80%] h-[130px] lg:h-[155px] xl:h-[220px] mx-auto object-fill' />
                                        </div>
                                        <p className='text-sm md:text-base lg:text-lg text-black font-medium line-clamp-1  text-center mt-3'>{item.name}</p>
                                        {isTablet ? <Divider style={{ margin: '8px 0', fontSize: '13px' }}>RT009</Divider> : <Divider style={{ margin: '8px 0', fontSize: '16px' }}>RT009</Divider>}
                                    </a>
                                    <div className='relative text-center bg-[#333] text-white py-[6px] md:py-4'>
                                        <p className='text-xs lg:text-sm text-red-500'>Liên hệ báo giá</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default OutstandingItems
