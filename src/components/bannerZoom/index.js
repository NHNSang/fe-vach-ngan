import React, { useState } from 'react'
import style from './style.css'
import { Input, Modal, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
const BannerZoom = ({ text }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        message.success('Cảm ơn bạn đã đặt hàng tại Vách ngăn Tổ ong Đà Nẵng, nhân viên sẽ liên hệ sớm với bạn trong thời gian sớm nhất!');
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className=' bg-[#3980F1] mt-5 flex justify-between'>
            <div className='flex items-center gap-2 pl-[20px]'>
                <img src='https://fivess.vn/assets/images/v2/advise.png' alt='img' className='w-[40px] md:w-[50px] lg:w-[80px] xl:w-[100px] h-[40px] md:h-[50px] lg:h-[80px] xl:h-[100px]' />
                <p className='text-white text-[14px] md:text-base lg:text-lg xl:text-xl'>{text}</p>
            </div>
            <div className='flex items-center gap-2 pr-[20px] lg:pr-[30px] xl:pr-[100px]'>
                <img src='https://fivess.vn/assets/images/v2/focus.png' alt='img' className={`${'zoom-in-out-box w-[30px] md:w-[50px] lg:w-[40px] xl:w-[50px] h-[30px] md:h-[50px] lg:h-[40px] xl:h-[50px] '}`} />
                <button className='xl:px-10 lg:px-8 px-2 py-2 rounded-xl bg-[#dfbe12] text-white text-[13px] lg:text-lg xl:text-xl w-[127px] lg:w-full ' onClick={showModal} >Liên hệ ngay</button>
            </div>
            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} className=''>
                <h1 className='text-lg font-medium text-center'>Đăng kí tư vấn miễn phí</h1>
                <div className='mt-5'></div>
                <p className='ml-1'>Họ và tên:</p>
                <Input placeholder="Nhập tên của bạn" />
                <div className='mt-3'></div>
                <p className='ml-1'>Địa chỉ:</p>
                <Input placeholder="Nhập địa chỉ" className='mt-3' />
                <div className='mt-3'></div>
                <p className='ml-1'>Số điện thoại:</p>
                <Input placeholder="Nhập số điện thoại" className='mt-3' />
                <p className='ml-1'>Địa chỉ:</p>
                <Input placeholder="Nhập địa chỉ" className='mt-3' />
                <p className='ml-1'>Ghi chú:</p>
                <TextArea rows={4} placeholder="Nhập ghi chú" className='mt-3'/>
                <div className='mt-5 flex justify-center gap-3'>
                    <button className='border px-4 py-2 rounded-xl bg-white' onClick={handleCancel}>Huỷ</button>
                    <button className='border px-2 py-2 rounded-xl bg-[#dfbe12] text-white' onClick={handleOk}>Gủi yêu cầu</button>
                </div>
            </Modal>
        </div>
    )
}

export default BannerZoom
