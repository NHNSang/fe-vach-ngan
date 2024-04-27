import React, { useState } from 'react'
import BreadcrumbComnponent from '../../components/breadcrumb'
import { Col, Divider, Input, Modal, Row } from 'antd'
import { Link } from 'react-router-dom'
import Banner from '../../components/carousel'
import Card from '../../components/listItem/card'
import BannerZoom from '../../components/bannerZoom'
import { useDevice } from '../../hook/useDevice'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const listDataRouter = [
    {
        path: '/vach-ngan-to-ong',
        img: 'https://sagowin.com/uploads/source//cua-luoi-me-linh-q.png',
        title: 'Vách ngăn tổ ong',
    },
    {
        path: '/rem-cuon',
        img: 'https://sagowin.com/uploads/source//cua-luoi-me-linh-q.png',
        title: 'Rèm cuốn',
    },
    {
        path: '/rem-vai',
        img: 'https://sagowin.com/uploads/source//cua-luoi-me-linh-q.png',
        title: 'Rèm vãi',
    },
    {
        path: '/rem-cau-vong',
        img: 'https://sagowin.com/uploads/source//cua-luoi-me-linh-q.png',
        title: 'Rèm cầu vòng',
    },
    {
        path: '/cua-luoi-xep',
        img: 'https://sagowin.com/uploads/source//cua-luoi-me-linh-q.png',
        title: 'Của lưới xếp',
    },
    {
        path: '/cua-luoi-chong-muoi',
        img: 'https://sagowin.com/uploads/source//cua-luoi-me-linh-q.png',
        title: 'Của lưới chống muỗi',
    },

]
const RemCuon = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const { isLayout, isTablet, isMobile } = useDevice()
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: isMobile ? 3 : isTablet ? 4 : 6,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 500,
        arrows: true,
    };
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const toggleExpand = () => {
        setExpanded(!expanded);
    };
    return (
        <div className="bg-[#f5f5f5] mt-[90px] md:mt-[130px] lg:mt-[130px]  xl:mt-[133px] ">
            <div className='container mx-auto pt-5'>
                <BreadcrumbComnponent title_1="Trang chủ" title_2="Rèm cuốn" />
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32 }} className='pb-10'>
                    <Col xl={5}>
                        {isLayout ? <div className="mx-auto mb-5 bg-white px-2 md:p-5">
                            <Slider {...settings}>
                                {listDataRouter.map((_, index) => {
                                    return (
                                        <div key={index} className="pt-[20px] md:pt-0">
                                            <a href={_.path} className=' mt-5 '>
                                                <div className="flex justify-center">
                                                    <img src='https://sagowin.com/uploads/source//cua-luoi-me-linh-q.png' alt='img' className='w-[60px] h-[60px] border rounded-[24px]' />
                                                </div>
                                                <p className='text-base text-black text-center'>{_.title}</p>
                                            </a>
                                        </div>)
                                })}
                            </Slider>
                        </div> : <div className='bg-white border rounded-lg px-4 py-5'>
                            <Link to='/'>
                                <div className='bg-[#dfbe12] rounded-[10px] w-[60%] mx-auto h-[50px] flex items-center justify-center '>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="white" d="m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81zM12 3L2 12h3v8h6v-6h2v6h6v-8h3z" /></svg>
                                    <p className='text-base text-white'>Trang chủ</p>
                                </div>
                            </Link>
                            <a href="/vach-ngan-to-ong" className='flex items-center mt-8 gap-3'>
                                <img src='https://sagowin.com/uploads/source//cua-luoi-me-linh-q.png' alt='img' className='w-[60px] h-[60px] border rounded-[24px]' />
                                <p className='text-base text-black'>Vách ngăn tổ ong</p>
                            </a>
                            <Divider />
                            <a href='/rem-cuon' className='flex items-center mt-5 gap-3'>
                                <img src='https://sagowin.com/uploads/source//cua-luoi-me-linh-q.png' alt='img' className='w-[60px] h-[60px] border rounded-[24px]' />
                                <p className='text-base text-[#3980F1] font-medium'>Rèm cuốn</p>
                            </a>
                            <Divider />
                            <a  href='/rem-vai' className='flex items-center mt-5 gap-3'>
                                <img src='https://sagowin.com/uploads/source//cua-luoi-me-linh-q.png' alt='img' className='w-[60px] h-[60px] border rounded-[24px]' />
                                <p className='text-base text-black'>Rèm vãi</p>
                            </a>
                            <Divider />
                            <a href='/rem-cau-vong' className='flex items-center mt-5 gap-3'>
                                <img src='https://sagowin.com/uploads/source//cua-luoi-me-linh-q.png' alt='img' className='w-[60px] h-[60px] border rounded-[24px]' />
                                <p className='text-base text-black'>Rèm cầu vòng</p>
                            </a>
                            <Divider />
                            <a href='/cua-luoi-xep' className='flex items-center mt-5 gap-3'>
                                <img src='https://sagowin.com/uploads/source//cua-luoi-me-linh-q.png' alt='img' className='w-[60px] h-[60px] border rounded-[24px]' />
                                <p className='text-base text-black'>Của lưới xếp</p>
                            </a>
                            <Divider />
                            <a href='/cua-luoi-chong-muoi' className='flex items-center mt-5 gap-3'>
                                <img src='https://sagowin.com/uploads/source//cua-luoi-me-linh-q.png' alt='img' className='w-[60px] h-[60px] border rounded-[24px]' />
                                <p className='text-base text-black'>Của lưới chống muỗi </p>
                            </a>
                        </div>}
                    </Col>
                    <Col lg={24} xl={19} xxl={19}>
                        <Banner />
                        <div className=' bg-[#3980F1] mt-5 flex justify-between'>
                            <div className='flex items-center gap-2 pl-[20px]'>
                                <p className='text-white text-[14px] md:text-base lg:text-lg xl:text-xl'>Sản phẩm giá tốt </p>
                            </div>
                            <div className='flex items-center gap-2 pr-[20px] lg:pr-[30px] xl:pr-[100px]'>
                                <img src='https://fivess.vn/assets/images/v2/price.svg' alt='img' className={`${'zoom-in-out-box w-[30px] md:w-[50px] lg:w-[40px] xl:w-[50px] h-[30px] md:h-[50px] lg:h-[40px] xl:h-[50px] '}`} />
                                <button className='xl:px-10 lg:px-8 px-2 py-2 rounded-xl bg-[#dfbe12] text-white text-[13px] lg:text-lg xl:text-xl w-[127px] lg:w-full ' onClick={showModal} >Liên hệ ngay</button>
                            </div>
                            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} className='text-center'>
                                <h1 className='text-lg font-medium'>Đăng kí tư vấn miễn phí</h1>
                                <div className='mt-5'></div>
                                <Input placeholder="Nhập tên của bạn" />
                                <div className='mt-5'></div>
                                <Input placeholder="Nhập địa chỉ" className='mt-3' />
                                <div className='mt-5'></div>
                                <Input placeholder="Nhập số điện thoại" className='mt-3' />
                                <div className='mt-5 flex justify-center gap-3'>
                                    <button className='border px-4 py-2 rounded-xl bg-white' onClick={handleCancel}>Huỷ</button>
                                    <button className='border px-2 py-2 rounded-xl bg-[#dfbe12]' onClick={handleOk}>Gủi yêu cầu</button>
                                </div>
                            </Modal>
                        </div>
                        <Row>
                            <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2'>
                                <Card />
                            </Col>
                            <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2'>
                                <Card />
                            </Col>
                            <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2'>
                                <Card />
                            </Col>
                            <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2'>
                                <Card />
                            </Col>
                            <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2'>
                                <Card />
                            </Col>
                            <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2'>
                                <Card />
                            </Col>
                            <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2'>
                                <Card />
                            </Col>
                            <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2'>
                                <Card />
                            </Col>
                            <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2'>
                                <Card />
                            </Col>
                            <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2'>
                                <Card />
                            </Col>
                            <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2'>
                                <Card />
                            </Col>
                            <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2'>
                                <Card />
                            </Col>
                            <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2'>
                                <Card />
                            </Col>
                            <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2'>
                                <Card />
                            </Col>
                            <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2'>
                                <Card />
                            </Col>
                            <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2'>
                                <Card />
                            </Col>
                        </Row>
                        <BannerZoom text={"Tư vấn, do đạc miễn phí,..."} />
                        <div className={`text-container ${expanded ? 'expanded' : ''}`} style={{ maxHeight: expanded ? 'none' : '830px' }}>
                            <Row>
                                <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2'>
                                    <Card />
                                </Col>
                                <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2'>
                                    <Card />
                                </Col>
                                <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2'>
                                    <Card />
                                </Col>
                                <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2'>
                                    <Card />
                                </Col>
                                <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2'>
                                    <Card />
                                </Col>
                                <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2'>
                                    <Card />
                                </Col>
                                <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2'>
                                    <Card />
                                </Col>
                                <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2'>
                                    <Card />
                                </Col>
                                <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2'>
                                    <Card />
                                </Col>
                                <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2'>
                                    <Card />
                                </Col>
                                <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2'>
                                    <Card />
                                </Col>
                                <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2'>
                                    <Card />
                                </Col>
                                <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2'>
                                    <Card />
                                </Col>
                                <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2'>
                                    <Card />
                                </Col>
                                <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2'>
                                    <Card />
                                </Col>
                                <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2'>
                                    <Card />
                                </Col>
                            </Row>
                        </div>
                        <div className='flex justify-center'>
                            <button className="expand-button text-black" onClick={toggleExpand}>
                                {expanded ? <div className='flex justify-center mt-3'>
                                    <button className='flex items-center gap-2 px-5 md:px-10 py-2 rounded-xl bg-[#dfbe12] text-white'>Đóng <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="m12 10.828l-4.95 4.95l-1.414-1.414L12 8l6.364 6.364l-1.414 1.414z" /></svg></button>
                                </div> : <div className='flex justify-center mt-3'>
                                    <button className='flex items-center gap-2 px-5 md:px-10 py-2 rounded-xl bg-[#dfbe12] text-white'>Xem thêm <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="white" d="M831.872 340.864L512 652.672L192.128 340.864a30.59 30.59 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.59 30.59 0 0 0-42.752 0z" /></svg></button>
                                </div>}
                            </button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default RemCuon
