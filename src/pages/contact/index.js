import React from 'react'
import BreadcrumbComnponent from '../../components/breadcrumb'
import { useDevice } from '../../hook/useDevice';
import { Col, Divider, Row } from 'antd';
import LogoFb from "../../assets/logo/icon_fb.png";
import LogoIn from "../../assets/logo/icon_in.png";
import LogoInsta from "../../assets/logo/icon_insta.png";
import LogoX from "../../assets/logo/icon_x.png";

const Contact = () => {
    const { isMobile, isLayout } = useDevice();

    return (
        <div className='bg-[#f5f5f5] mt-[90px] md:mt-[130px] lg:mt-[130px]  xl:mt-[133px]'>
            <div className='container mx-auto pt-5'>
                <BreadcrumbComnponent title_1="Trang chủ" title_2="Liên hệ" />
                <div className='bg-white mt-5 py-5 px-3 '>
                    <div className="container mx-auto mt-5">
                        <Row>
                            {/* left */}
                            <Col xs={24} xl={11}>
                                <div className={isMobile ? "mt-[10px]" : "mt-[80px]"}>
                                    <p className="text-[#3980F1] text-2xl font-bold text-center">
                                        VÁCH NGĂN TỔ ONG <br></br> ĐÀ NẴNG
                                    </p>
                                    <div className="mt-3 flex justify-center">
                                        <Row>
                                            <div className="mr-3">
                                                <img
                                                    className="rounded-[24px]"
                                                    src={LogoFb}
                                                    alt="Picture of the author"
                                                    width={30}
                                                    height={30}
                                                />
                                            </div>
                                            <div className="mr-3">
                                                <img
                                                    className="rounded-[24px]"
                                                    src={LogoIn}
                                                    alt="Picture of the author"
                                                    width={30}
                                                    height={30}
                                                />
                                            </div>
                                            <div className="mr-3">
                                                <img
                                                    className="rounded-[24px]"
                                                    src={LogoInsta}
                                                    alt="Picture of the author"
                                                    width={30}
                                                    height={30}
                                                />
                                            </div>
                                            <div className="mr-3">
                                                <img
                                                    className="rounded-[24px]"
                                                    src={LogoX}
                                                    alt="Picture of the author"
                                                    width={30}
                                                    height={30}
                                                />
                                            </div>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                            {/* center */}
                            {isLayout ? <Divider /> : <Col xs={24} xl={2}>
                                <div className="flex justify-center">
                                    <div
                                        type={isMobile ? "horizontal" : "vertical"}
                                        className="h-[1px] lg:h-[250px] w-[1px] bg-black !important"
                                    />
                                </div>
                            </Col>}

                            {/* right */}
                            <Col xs={24} xl={11} className="text-black pl-5 pr-3 lg:pl-0 lg-pr-0">
                                <div className={isMobile ? "mt-[10px]" : "mt-[70px]"}>
                                    <p className="text-[#42495B]  text-lg font-bold">
                                        Địa chỉ:
                                        <span className="text-[#42495B]  text-lg font-normal ml-2">
                                            67 Tô Hiến Thành, Phước Mỹ, Sơn Trà, Đà Nẵng
                                        </span>
                                    </p>
                                    <p className="text-[#42495B]  text-lg font-bold mt-3">
                                        Số điện thoại:
                                        <span className="text-[#42495B]  text-lg font-normal ml-2">0775.452.291</span>
                                    </p>
                                    <p className="text-[#42495B]  text-lg font-bold mt-3">Email:
                                        <span className="text-[#42495B]  text-lg font-normal ml-2">
                                            vachngantoongdanang@gmail.com
                                        </span>
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    {/* map */}
                    <div className={isMobile ? "flex justify-center my-5 mx-5" : "flex justify-center my-20"}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1193.158317351908!2d108.24191566962732!3d16.061236299038598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142177f43886d5b%3A0x1b5d9a6bc76c55dc!2zNjcgVMO0IEhp4bq_biBUaMOgbmgsIFBoxrDhu5tjIE3hu7ksIFPGoW4gVHLDoCwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!5e1!3m2!1svi!2s!4v1714013799943!5m2!1svi!2s" width={1000} height={isMobile ? "350" : "650"} style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
