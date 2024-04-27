import React, { useState } from 'react';
import { Carousel } from 'antd';
import style from './style.css'; 
import { useDevice } from '../../hook/useDevice';
const contentStyle = {
  margin: 0,
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  with: '100%',
//   background: '#364d79',
};
const imageData = [
    {
        img:'https://blinds.vn/wp-content/uploads/2022/05/rem-cau-vong-hp-star-329k.png'
    },
    {
        img:'https://blinds.vn/wp-content/uploads/2024/01/khuyen-mai-rem-vach-ngan-to-ong-2-in-1-blinds.jpg'
    },
    {
        img:'https://blinds.vn/wp-content/uploads/2022/05/rem-cau-vong-hp-star-329k.png'
    },
    {
        img:'https://blinds.vn/wp-content/uploads/2023/01/Thiet-ke-chua-co-ten-4.png'
    },
    {
        img:'https://remcuahaka.com/wp-content/uploads/2023/10/banner-5.jpg'
    },
    {
        img:'https://remcuahaka.com/wp-content/uploads/2023/10/banner-5.jpg'
    },
]

const Banner = () => {
    const { isLayout , isTablet , isMobile } = useDevice()
    
  return (
    <div className=''>
      <Carousel  arrows={true} autoplaySpeed={2000} className='style' prevArrow={<svg xmlns="http://www.w3.org/2000/svg" width="7em" height="7em" viewBox="0 0 1024 1024"><path fill="white" d="M609.408 149.376L277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0a30.59 30.59 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.59 30.59 0 0 0 0-42.688a29.12 29.12 0 0 0-41.728 0"/></svg>} nextArrow={<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="white" fill-rule="evenodd" d="M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057" clip-rule="evenodd"/></svg>}>
        {imageData.map((item,index)=>{
            return(
                <div key={index}>
                    <img src={item.img} style={contentStyle} alt='imag' className='w-full h-full'/>
                </div>
            )
        })}
    </Carousel>
    </div>
  )
}

export default Banner
