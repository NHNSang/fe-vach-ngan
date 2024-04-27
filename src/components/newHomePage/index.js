import { Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { useDevice } from '../../hook/useDevice'

const NewHomePage = () => {
    const {isLayout , isTabletNew} = useDevice()
    return (
        <div>
            <Row gutter={{lg:5, xl: 16, xll: 16 }} className='mt-5'>
                <Col md={24} lg={14} xl={12} xll={12} >
                    {isTabletNew ? <div className='px-4'><a href='/tin-tuc-chi-tiet' >
                        <img src='https://blinds.vn/wp-content/uploads/2021/07/re%CC%80m-to%CC%82%CC%89-ong-ma%CC%80u-va%CC%80ng-lu%CC%81a-500x500.jpeg' alt={'img-card'} className='w-[100%] h-[250px] md:h-[450px] mx-auto object-fill ' />
                        <p className='mt-2 text-lg font-bold line-clamp-1 text-black'>Cửa lưới chống côn trùng Hòa Phát 2021 bảo vệ sức khỏe gia đình bạn</p>
                        <div className='mt-2 flex items-center gap-2 '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z" /></svg>
                            <p className='text-[#919191] text-xs italic'>Ngày cập nhật: 26/04/2024 </p>
                        </div>
                        <p className='mt-4  text-black line-clamp-2 lg:line-clamp-3'>Cửa lưới chống côn trùng Hòa Phát chẳng còn là từ khóa xa lạ khi mà chất lượng và nhu cầu sống của con người ngày một phát triển vượt bậc. Theo đó các vấn đề như sức khỏe cũng ngày được quan tâm chú trọng. Nằm trong vùng nhiệt đới gió mùa, Việt Nam</p>
                    </a></div>  : <a href='/tin-tuc-chi-tiet'>
                        <img src='https://blinds.vn/wp-content/uploads/2021/07/re%CC%80m-to%CC%82%CC%89-ong-ma%CC%80u-va%CC%80ng-lu%CC%81a-500x500.jpeg' alt={'img-card'} className='w-[100%] h-[220px] lg:h-[320px] mx-auto object-fill ' />
                        <p className='mt-2 text-lg font-bold line-clamp-1 text-black'>Cửa lưới chống côn trùng Hòa Phát 2021 bảo vệ sức khỏe gia đình bạn</p>
                        <div className='mt-2 flex items-center gap-2 '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z" /></svg>
                            <p className='text-[#919191] text-xs italic'>Ngày cập nhật: 26/04/2024 </p>
                        </div>
                        <p className='mt-4  text-black line-clamp-2 lg:line-clamp-3'>Cửa lưới chống côn trùng Hòa Phát chẳng còn là từ khóa xa lạ khi mà chất lượng và nhu cầu sống của con người ngày một phát triển vượt bậc. Theo đó các vấn đề như sức khỏe cũng ngày được quan tâm chú trọng. Nằm trong vùng nhiệt đới gió mùa, Việt Nam</p>
                    </a>}
                    
                    
                </Col>
                <Col md={24} lg={10} xl={12} xll={12}>
                    {isTabletNew ? <><a href='/tin-tuc-chi-tiet' className='flex gap-3 mt-5 px-4'>
                        <img src='https://blinds.vn/wp-content/uploads/2021/07/re%CC%80m-to%CC%82%CC%89-ong-ma%CC%80u-va%CC%80ng-lu%CC%81a-500x500.jpeg' alt={'img-card'} className='w-[150px]  h-[100px] lg:h-[150px] object-fill ' />
                        <div>
                            <p className='text-sm lg:text-base font-bold text-black line-clamp-2 lg:line-clamp-3'>Cửa lưới chống côn trùng Hòa Phát 2021 bảo vệ sức khỏe gia đình bạn</p>
                            <div className='mt-2 flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z" /></svg>
                                <p className='text-[#919191] text-xs italic '>Ngày cập nhật: 26/04/2024 </p>
                            </div>
                        </div>
                    </a>
                    <a href='/tin-tuc-chi-tiet' className='flex gap-3 mt-5 px-4'>
                        <img src='https://blinds.vn/wp-content/uploads/2021/07/re%CC%80m-to%CC%82%CC%89-ong-ma%CC%80u-va%CC%80ng-lu%CC%81a-500x500.jpeg' alt={'img-card'} className='w-[150px] h-[100px] lg:h-[150px]  object-fill ' />
                        <div>
                            <p className='text-sm lg:text-base font-bold text-black line-clamp-2 lg:line-clamp-3'>Cửa lưới chống côn trùng Hòa Phát 2021 bảo vệ sức khỏe gia đình bạn</p>
                            <div className='mt-2 flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z" /></svg>
                                <p className='text-[#919191] text-xs italic '>Ngày cập nhật: 26/04/2024 </p>
                            </div>
                        </div>
                    </a>
                    <a href='/tin-tuc-chi-tiet' className='flex gap-3 mt-5 px-4'>
                        <img src='https://blinds.vn/wp-content/uploads/2021/07/re%CC%80m-to%CC%82%CC%89-ong-ma%CC%80u-va%CC%80ng-lu%CC%81a-500x500.jpeg' alt={'img-card'} className='w-[150px] h-[100px] lg:h-[150px] object-fill ' />
                        <div>
                            <p className='text-sm lg:text-base font-bold text-black line-clamp-2 lg:line-clamp-3'>Cửa lưới chống côn trùng Hòa Phát 2021 bảo vệ sức khỏe gia đình bạn</p>
                            <div className='mt-2 flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z" /></svg>
                                <p className='text-[#919191] text-xs italic '>Ngày cập nhật: 26/04/2024 </p>
                            </div>
                        </div>
                    </a></> : <><a href='/tin-tuc-chi-tiet' className='flex gap-3 '>
                        <img src='https://blinds.vn/wp-content/uploads/2021/07/re%CC%80m-to%CC%82%CC%89-ong-ma%CC%80u-va%CC%80ng-lu%CC%81a-500x500.jpeg' alt={'img-card'} className='w-[150px] h-[100px] lg:h-[150px] mx-auto object-fill ' />
                        <div>
                            <p className='text-sm lg:text-base font-bold text-black line-clamp-2 lg:line-clamp-3'>Cửa lưới chống côn trùng Hòa Phát 2021 bảo vệ sức khỏe gia đình bạn</p>
                            <div className='mt-2 flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z" /></svg>
                                <p className='text-[#919191] text-xs italic '>Ngày cập nhật: 26/04/2024 </p>
                            </div>
                        </div>
                    </a>
                    <a href='/tin-tuc-chi-tiet' className='flex gap-3 mt-5 '>
                        <img src='https://blinds.vn/wp-content/uploads/2021/07/re%CC%80m-to%CC%82%CC%89-ong-ma%CC%80u-va%CC%80ng-lu%CC%81a-500x500.jpeg' alt={'img-card'} className='w-[150px] h-[100px] lg:h-[150px] mx-auto object-fill ' />
                        <div>
                            <p className='text-sm lg:text-base font-bold text-black line-clamp-2 lg:line-clamp-3'>Cửa lưới chống côn trùng Hòa Phát 2021 bảo vệ sức khỏe gia đình bạn</p>
                            <div className='mt-2 flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z" /></svg>
                                <p className='text-[#919191] text-xs italic '>Ngày cập nhật: 26/04/2024 </p>
                            </div>
                        </div>
                    </a>
                    <a href='/tin-tuc-chi-tiet' className='flex gap-3 mt-5 '>
                        <img src='https://blinds.vn/wp-content/uploads/2021/07/re%CC%80m-to%CC%82%CC%89-ong-ma%CC%80u-va%CC%80ng-lu%CC%81a-500x500.jpeg' alt={'img-card'} className='w-[150px] h-[100px] lg:h-[150px] mx-auto object-fill ' />
                        <div>
                            <p className='text-sm lg:text-base font-bold text-black line-clamp-2 lg:line-clamp-3'>Cửa lưới chống côn trùng Hòa Phát 2021 bảo vệ sức khỏe gia đình bạn</p>
                            <div className='mt-2 flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z" /></svg>
                                <p className='text-[#919191] text-xs italic '>Ngày cập nhật: 26/04/2024 </p>
                            </div>
                        </div>
                    </a></>}
                    
                </Col>
            </Row>
        </div>
    )
}

export default NewHomePage
