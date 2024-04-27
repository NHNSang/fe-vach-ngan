import { Col, Row } from 'antd'
import React from 'react'
import CountUp from 'react-countup';
import { useDevice } from '../../hook/useDevice';

const Count = () => {
    const { isMobile } = useDevice();

    return (
        <div>
            <Row>
                <Col xs={12} lg={6} xl={6} xxl={6}>
                    <div className={isMobile ? "flex items-center pl-5 mb-7 mt-5" : "flex justify-center  items-center"}>
                        <div className="flex items-center">
                            <div className={isMobile ? "font-sans text-[25px] font-bold text-[#3980F1]" : "font-sans text-[50px] xl:text-[65px] font-bold text-[#3980F1]"}>
                                <CountUp end={10} duration={10}></CountUp>
                            </div>
                            <div className={isMobile ? "font-sans text-[15px] font-medium text-[#3980F1]" : "font-sans text-[50px] font-medium text-[#3980F1]"}>+</div>
                        </div>
                        {isMobile ?  <div className=" pl-2 font-sans text-[14px] font-bold text-black">ĐẠI LÝ <br></br> TOÀN QUỐC </div> : <div className="font-sans text-[14px] font-bold text-black">ĐẠI LÝ <br></br> TOÀN QUỐC </div> }

                    </div>
                </Col>
                <Col xs={12} lg={6} xl={6} xxl={6}>
                    <div className={isMobile ? "flex items-center pl-5 mb-7 mt-5" : "flex justify-center  items-center"}>
                        <div className="flex items-center">
                            <div className={isMobile ? "font-sans text-[25px] font-bold text-[#3980F1]" : "font-sans text-[50px] xl:text-[65px] font-bold text-[#3980F1]"}>
                                <CountUp end={2} duration={10}></CountUp>
                            </div>
                            <div className={isMobile ? "font-sans text-[15px] font-medium text-[#3980F1]" : "font-sans text-[50px] font-medium text-[#3980F1]"}>+</div>
                        </div>
                        {isMobile ?  <div className=" pl-2 font-sans text-[14px] font-bold text-black">ĐẠI LÝ <br></br> TOÀN QUỐC </div> : <div className="font-sans text-[14px] font-bold text-black">ĐẠI LÝ <br></br> TOÀN QUỐC </div> }

                    </div>
                </Col>
                <Col xs={12} lg={6} xl={6} xxl={6}>
                    <div className={isMobile ? "flex items-center pl-5 mb-7 mt-5" : "flex justify-center  items-center"}>
                        <div className="flex items-center">
                            <div className={isMobile ? "font-sans text-[25px] font-bold text-[#3980F1]" : "font-sans text-[50px] xl:text-[65px] font-bold text-[#3980F1]"}>
                                <CountUp end={5} duration={10}></CountUp>
                            </div>
                            <div className={isMobile ? "font-sans text-[15px] font-medium text-[#3980F1]" : "font-sans text-[50px] font-medium text-[#3980F1]"}>+</div>
                        </div>
                        {isMobile ?  <div className=" pl-2 font-sans text-[14px] font-bold text-black">ĐẠI LÝ <br></br> TOÀN QUỐC </div> : <div className="font-sans text-[14px] font-bold text-black">ĐẠI LÝ <br></br> TOÀN QUỐC </div> }

                    </div>
                </Col>
                <Col xs={12} lg={6} xl={6} xxl={6}>
                    <div className={isMobile ? "flex items-center pl-5 mb-7 mt-5" : "flex justify-center  items-center"}>
                        <div className="flex items-center">
                            <div className={isMobile ? "font-sans text-[25px] font-bold text-[#3980F1]" : "font-sans text-[50px] xl:text-[65px] font-bold text-[#3980F1]"}>
                                <CountUp end={64} duration={10}></CountUp>
                            </div>
                            <div className={isMobile ? "font-sans text-[15px] font-medium text-[#3980F1]" : "font-sans text-[50px] font-medium text-[#3980F1]"}>+</div>
                        </div>
                        {isMobile ?  <div className=" pl-2 font-sans text-[14px] font-bold text-black">ĐẠI LÝ <br></br> TOÀN QUỐC </div> : <div className="font-sans text-[14px] font-bold text-black">ĐẠI LÝ <br></br> TOÀN QUỐC </div> }

                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Count
