import React from 'react'
import BreadcrumbComnponent from '../../components/breadcrumb'
import { Col, Row } from 'antd'
import FeaturedNews from '../../components/featuredNews'
import NewHomePage from '../../components/newHomePage'
import vach_ngan from '../../assets/vach-ngan-to-ong.jpg'
import { useDevice } from '../../hook/useDevice'

const News = () => {
    const { isLayout , isTabletNew } = useDevice()
    return (
        <div className='bg-[#f5f5f5] mt-[133px]'>
            <div className='container mx-auto pt-5'>
                <BreadcrumbComnponent title_1="Trang chủ" title_2="Tin tức" />
                <Row gutter={{ lg: 32, xl: 32 }} className='pb-10'>
                    <Col xl={19}>
                        <NewHomePage />
                        {isTabletNew ?  <><a href='/tin-tuc-chi-tiet' className='flex gap-3 mt-5 px-4'>
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
                    </a></>: <div><a href='/tin-tuc-chi-tiet' className='flex gap-3 mt-10' >
                            <img src='https://blinds.vn/wp-content/uploads/2021/07/re%CC%80m-to%CC%82%CC%89-ong-ma%CC%80u-va%CC%80ng-lu%CC%81a-500x500.jpeg' alt={'img-card'} className='w-[60%] h-[270px] mx-auto object-fill ' />
                            <div className=''>
                                <p className=' text-lg font-bold line-clamp-1 text-black'>Cửa lưới chống côn trùng Hòa Phát 2021 bảo vệ sức khỏe gia đình bạn</p>
                                <div className='mt-2 flex items-center gap-2 '>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z" /></svg>
                                    <p className='text-[#919191] text-xs italic'>Ngày cập nhật: 26/04/2024 </p>
                                </div>
                                <p className='mt-4 line-clamp-3 text-black'>Cửa lưới chống côn trùng Hòa Phát chẳng còn là từ khóa xa lạ khi mà chất lượng và nhu cầu sống của con người ngày một phát triển vượt bậc. Theo đó các vấn đề như sức khỏe cũng ngày được quan tâm chú trọng. Nằm trong vùng nhiệt đới gió mùa, Việt Nam</p>
                            </div>
                        </a>
                        <a href='/tin-tuc-chi-tiet' className='flex gap-3 mt-10' >
                            <img src='https://blinds.vn/wp-content/uploads/2021/07/re%CC%80m-to%CC%82%CC%89-ong-ma%CC%80u-va%CC%80ng-lu%CC%81a-500x500.jpeg' alt={'img-card'} className='w-[60%] h-[270px] mx-auto object-fill ' />
                            <div className=''>
                                <p className=' text-lg font-bold line-clamp-1 text-black'>Cửa lưới chống côn trùng Hòa Phát 2021 bảo vệ sức khỏe gia đình bạn</p>
                                <div className='mt-2 flex items-center gap-2 '>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z" /></svg>
                                    <p className='text-[#919191] text-xs italic'>Ngày cập nhật: 26/04/2024 </p>
                                </div>
                                <p className='mt-4 line-clamp-3 text-black'>Cửa lưới chống côn trùng Hòa Phát chẳng còn là từ khóa xa lạ khi mà chất lượng và nhu cầu sống của con người ngày một phát triển vượt bậc. Theo đó các vấn đề như sức khỏe cũng ngày được quan tâm chú trọng. Nằm trong vùng nhiệt đới gió mùa, Việt Nam</p>
                            </div>
                        </a>
                        <a href='/tin-tuc-chi-tiet' className='flex gap-3 mt-10' >
                            <img src='https://blinds.vn/wp-content/uploads/2021/07/re%CC%80m-to%CC%82%CC%89-ong-ma%CC%80u-va%CC%80ng-lu%CC%81a-500x500.jpeg' alt={'img-card'} className='w-[60%] h-[270px] mx-auto object-fill ' />
                            <div className=''>
                                <p className=' text-lg font-bold line-clamp-1 text-black'>Cửa lưới chống côn trùng Hòa Phát 2021 bảo vệ sức khỏe gia đình bạn</p>
                                <div className='mt-2 flex items-center gap-2 '>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z" /></svg>
                                    <p className='text-[#919191] text-xs italic'>Ngày cập nhật: 26/04/2024 </p>
                                </div>
                                <p className='mt-4 line-clamp-3 text-black'>Cửa lưới chống côn trùng Hòa Phát chẳng còn là từ khóa xa lạ khi mà chất lượng và nhu cầu sống của con người ngày một phát triển vượt bậc. Theo đó các vấn đề như sức khỏe cũng ngày được quan tâm chú trọng. Nằm trong vùng nhiệt đới gió mùa, Việt Nam</p>
                            </div>
                        </a>
                        <a href='/tin-tuc-chi-tiet' className='flex gap-3 mt-10' >
                            <img src='https://blinds.vn/wp-content/uploads/2021/07/re%CC%80m-to%CC%82%CC%89-ong-ma%CC%80u-va%CC%80ng-lu%CC%81a-500x500.jpeg' alt={'img-card'} className='w-[60%] h-[270px] mx-auto object-fill ' />
                            <div className=''>
                                <p className=' text-lg font-bold line-clamp-1 text-black'>Cửa lưới chống côn trùng Hòa Phát 2021 bảo vệ sức khỏe gia đình bạn</p>
                                <div className='mt-2 flex items-center gap-2 '>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z" /></svg>
                                    <p className='text-[#919191] text-xs italic'>Ngày cập nhật: 26/04/2024 </p>
                                </div>
                                <p className='mt-4 line-clamp-3 text-black'>Cửa lưới chống côn trùng Hòa Phát chẳng còn là từ khóa xa lạ khi mà chất lượng và nhu cầu sống của con người ngày một phát triển vượt bậc. Theo đó các vấn đề như sức khỏe cũng ngày được quan tâm chú trọng. Nằm trong vùng nhiệt đới gió mùa, Việt Nam</p>
                            </div>
                        </a></div>}
                        
                    </Col>
                    <Col xl={5}>
                        {isLayout ? undefined : <div className="mt-5">
                            <img src={vach_ngan} alt="vach_ngan" className="h-[550px] w-full" />
                        </div>}

                    </Col>
                </Row>



            </div>
        </div>
    )
}

export default News
