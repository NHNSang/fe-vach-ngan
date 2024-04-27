import { Divider } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { useDevice } from '../../hook/useDevice';

const Card = () => {
    const { isLayout ,isTablet } = useDevice();

    return (
        <>
            {isLayout ?
                <div className='bg-white  w-[180px] md:w-[200px] mx-auto mt-5'>
                    <a href='/chi-tiet-san-pham'>
                        <div className=' w-[180px] md:w-[200px] mx-auto hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 mt-2'>
                            <div className='relative w-[180px] md:w-[200px] '>
                                <div className='relative '>
                                    <img src='https://blinds.vn/wp-content/uploads/2021/07/re%CC%80m-to%CC%82%CC%89-ong-ma%CC%80u-va%CC%80ng-lu%CC%81a-500x500.jpeg' alt={'img-card'} className='w-[100%] h-[130px] md:h-[150px] mx-auto object-fill rounded-tl-xl rounded-tr-xl' />
                                </div>
                                <div className='absolute top-[0px] md:top-[-10px] right-[-11px] md:right-[-22px]'>
                                    <img src='https://blinds.vn/wp-content/themes/templatenoithat5/images/deal-badge@2x.png' alt={'img-card'} className='w-[50px] h-[50px]  mx-auto object-fill' />
                                </div>
                                <div className='absolute top-[11px] md:top-[0px]  right-[-5px] md:right-[-17px]'>
                                    <p className='text-base	text-white'>-20%</p>
                                </div>
                                <div>

                                </div>
                                <p className='text-base lg:text-lg text-black font-medium line-clamp-1  text-center mt-2 lg:mt-3'>Rèm tổ ong cách nhiệt</p>
                                {isTablet ? <Divider style={{ margin: '4px 0', fontSize: '13px' }}>RT009</Divider> : <Divider style={{ margin: '8px 0', fontSize: '13px' }}>RT009</Divider> }
                                
                                <div className='text-center bg-[#333] text-white py-1 lg:py-2'>
                                    <p className='text-sm lg:text-base	font-medium '>Giá: 440.000Đ</p>
                                    <p className='text-xs lg:text-sm line-through text-[#ccc]'>Giá: 660.000</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div> : <div className='bg-white w-[250px] mx-auto mt-5'>
                    <a href='/chi-tiet-san-pham'>
                        <div className=' w-[250px] mx-auto hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 mt-2'>
                            <div className='relative w-[250px] '>
                                <div className='relative '>
                                    <img src='https://blinds.vn/wp-content/uploads/2021/07/re%CC%80m-to%CC%82%CC%89-ong-ma%CC%80u-va%CC%80ng-lu%CC%81a-500x500.jpeg' alt={'img-card'} className='w-[100%] h-[220px] mx-auto object-fill rounded-tl-xl rounded-tr-xl' />
                                </div>
                                <div className='absolute top-[10px] left-1'>
                                    <img src='https://blinds.vn/wp-content/themes/templatenoithat5/images/deal-badge@2x.png' alt={'img-card'} className='w-[50px] h-[50px]  mx-auto object-fill' />
                                </div>
                                <div className='absolute top-[20px] left-[9px]'>
                                    <p className='text-base	text-white'>-20%</p>
                                </div>
                                <div>

                                </div>
                                <p className='text-lg text-black font-medium line-clamp-1 dark:text-white text-center mt-3'>Rèm tổ ong cách nhiệt</p>
                                <Divider>RT009</Divider>
                                <div className='text-center bg-[#333] text-white py-2'>
                                    <p className='text-base	font-medium '>Giá: 440.000Đ</p>
                                    <p className='text-sm line-through text-[#ccc]'>Giá: 660.000</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>}
        </>
    )
}

export default Card
