import { Col, Row } from 'antd';
import React, { useState } from 'react';
import Card from './card';
import style from './style.css';

const ListItem = () => {
    const [expanded, setExpanded] = useState(false);
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
        <div className='mt-5 py-5 '>
            <div className=' bg-[#3980F1] mt-5 flex justify-between'>
                <div className='pl-[20px] py-4'>
                    <p className='text-white text-[14px] md:text-base lg:text-lg xl:text-xl'>Sản phẩm gợi ý cho bạn</p>
                </div>
            </div>
            <div className={`text-container ${expanded ? 'expanded' : ''}`} style={{ maxHeight: expanded ? 'none' : '830px' }}>
                <Row>
                    {numb.map((_, index) => {
                        return (
                            <Col  xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2' key={index}>
                                <Card number={index}/>
                            </Col>
                        )
                    })}
                    {numb.map((_, index) => {
                        return (
                            <Col  xs={12} sm={8} md={8} lg={6} xl={8} xxl={6} className='mt-2' key={index}>
                                <Card number={index}/>
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
        </div>
    )
}

export default ListItem
