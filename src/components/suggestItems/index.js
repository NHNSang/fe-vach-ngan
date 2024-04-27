import { Divider } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDevice } from '../../hook/useDevice';
import style from './style.css';


const listData = [
    {
        image: 'https://blinds.vn/wp-content/uploads/2021/07/re%CC%80m-to%CC%82%CC%89-ong-ma%CC%80u-va%CC%80ng-lu%CC%81a-500x500.jpeg',
    },
    {
        image: 'https://blinds.vn/wp-content/uploads/2021/07/re%CC%80m-to%CC%82%CC%89-ong-ma%CC%80u-va%CC%80ng-lu%CC%81a-500x500.jpeg',
    },
    {
        image: 'https://blinds.vn/wp-content/uploads/2021/07/re%CC%80m-to%CC%82%CC%89-ong-ma%CC%80u-va%CC%80ng-lu%CC%81a-500x500.jpeg',
    },

]
const SuggestItems = () => {

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
                <p className=' pl-[47px]'>Gợi ý sản phẩm cho bạn</p>
            </div>
            <div className='w-[95%] mx-auto mt-3'>
                <Slider {...settings} className={style} >
                    {listData.map((data, index) => {
                        return (
                            <a href='/chi-tiet-san-pham' key={index}>
                                <div className='  border border-black pt-2 md:pt-5 w-[170px] md:w-[200px]  lg:w-[250px] xl:w-[350px] mx-auto hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 mt-2'>
                                    <div className='relative w-[170px] md:w-[200px] lg:w-[250px] xl:w-[350px] '>
                                        <div className='relative '>
                                            <img src='https://blinds.vn/wp-content/uploads/2021/07/re%CC%80m-to%CC%82%CC%89-ong-ma%CC%80u-va%CC%80ng-lu%CC%81a-500x500.jpeg' alt={'img-card'} className='w-[88%] md:w-[80%] h-[130px] lg:h-[155px] xl:h-[220px] mx-auto object-fill' />
                                        </div>
                                        <div className='absolute top-[-4px] md:top-[-10px] right-[5px] md:right-[13px]'>
                                            <img src='https://blinds.vn/wp-content/themes/templatenoithat5/images/deal-badge@2x.png' alt={'img-card'} className='w-[40px] md:w-[50px] h-[40px] md:h-[50px]   object-fill' />
                                        </div>
                                        <div className='absolute top-[5px] md:top-[0px]  right-[9px] md:right-[17px]'>
                                            <p className='text-sm md:text-base	text-white'>-15%</p>
                                        </div>
                                        <div>

                                        </div>
                                        <p className='text-sm md:text-base lg:text-lg text-black font-medium line-clamp-1  text-center mt-3'>Rèm tổ ong cách nhiệt</p>
                                        {isTablet ? <Divider style={{ margin: '8px 0', fontSize: '13px' }}>RT009</Divider> : <Divider style={{ margin: '8px 0', fontSize: '16px' }}>RT009</Divider>}

                                        <div className='text-center bg-[#333] text-white py-[2px] md:py-2'>
                                            <p className='text-sm lg:text-base	font-medium '>Giá: 440.000Đ</p>
                                            <p className='text-xs lg:text-sm line-through text-[#ccc]'>Giá: 660.000</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        )
                    })}
                </Slider>
            </div>


        </div>
    )
}

export default SuggestItems