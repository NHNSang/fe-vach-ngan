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
import { useParams } from 'react-router-dom';
import ProductData from '../../data/product.json'

const DynamicPage  = () => {
    const { path, id } = useParams();
    console.log(path)
    console.log(id)
    const { products } = ProductData;
    console.log(products[id])

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
    const numb = [
        {
            id: 0,
        },{
            id: 1,
        }, {
            id: 2,
        }, {
            id: 3,
        }, {
            id: 4,
        }, {
            id: 5,
        },{
            id: 6,
        },{
            id: 7,
        },
    ]
    return (
        <div className="bg-[#f5f5f5] mt-[90px] md:mt-[130px] lg:mt-[130px]  xl:mt-[133px]">
            <div className='container mx-auto pt-5'>
                <BreadcrumbComnponent title_1="Trang chủ" title_2={products[id]?.name} />
                <Row gutter={{ xl: 10, xxl: 32 }} className='pb-10'>
                    <Col lg={24} xl={5} xxl={5}>

                        {isLayout ?
                            <div className="mx-auto mb-5 bg-white px-2 md:p-5">
                                <Slider {...settings}>
                                    {products.map((_, index) => {
                                        return (
                                            <div key={index} className="pt-[20px] md:pt-0">
                                                <a  href={`${_?.path}/${_?.id}`} className=' mt-5 '>
                                                    <div className="flex justify-center">
                                                        <img src={_.thumbnail} alt={_.name} className='w-[60px] h-[60px] border rounded-[24px]' />
                                                    </div>
                                                    {_.id === parseInt(id) ? <p className='text-base text-[#3980F1] text-center'>{_.name}</p> : <p className='text-base text-black text-center'>{_.name}</p>}
                                                </a>
                                            </div>)
                                    })}
                                </Slider>
                            </div> :
                            <div className='bg-white border rounded-lg px-4 py-5'>
                                <Link to='/'>
                                    <div className='bg-[#dfbe12] rounded-[10px] w-[60%] mx-auto h-[50px] flex items-center justify-center '>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="white" d="m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81zM12 3L2 12h3v8h6v-6h2v6h6v-8h3z" /></svg>
                                        <p className='text-base text-white'>Trang chủ</p>
                                    </div>
                                </Link>
                                {products.map((_, index) => {
                                    return (
                                        <div key={index}>
                                            <a href={`${_?.path}/${_?.id}`} className='flex items-center mt-5 gap-3'>
                                                <img src={_.thumbnail} alt={_.name} className='w-[60px] h-[60px] border rounded-[24px]' />
                                                {_.id === parseInt(id) ? <p className='text-base text-[#3980F1]'>{_.name}</p> : <p className='text-base text-black'>{_.name}</p>}
                                            </a>
                                            <Divider />
                                        </div>
                                    )
                                })}
                            </div>}

                    </Col>
                    <Col lg={24} xl={19} xxl={19}>
                        <Banner />
                        <BannerZoom text={"Sản phẩm giá tốt nhất"} />
                        <Row>
                            {numb.map((_, index) => {
                                return (
                                    <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2' key={index}>
                                        <Card number={index} />
                                    </Col>
                                )
                            })}
                        </Row>
                        <BannerZoom text={"Tư vấn, do đạc miễn phí,..."} />
                        <div className={`text-container ${expanded ? 'expanded' : ''}`} style={{ maxHeight: expanded ? 'none' : '830px' }}>
                            <Row>
                                {numb.map((_, index) => {
                                    return (
                                        <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2' key={index}>
                                            <Card number={index} />
                                        </Col>
                                    )
                                })}
                                {numb.map((_, index) => {
                                    return (
                                        <Col xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2' key={index}>
                                            <Card number={index} />
                                        </Col>
                                    )
                                })}
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

export default DynamicPage 
