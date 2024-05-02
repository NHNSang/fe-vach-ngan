import { Button, Divider, Drawer, Radio, Space } from 'antd';
import React, { useState } from 'react'
import style from './style.css'
import Logo from "../../../assets/logo_vach_ngan.png";
import { useDevice } from '../../../hook/useDevice';

const routes = [
    {
        path: '/gioi-thieu',
        pathNames: ['/gioi-thieu'],
        name: 'Giới thiệu'
    },
    {
        path: '/lien-he',
        pathNames: ['/lien-he'],
        name: 'Liên hệ'
    },
    {
        path: '/tin-tuc',
        pathNames: ['/tin-tuc'],
        name: 'Tin tức'
    },
    {
        path: '/vach-ngan-to-ong',
        pathNames: ['/vach-ngan-to-ong'],
        name: 'Mẫu vách ngăn đẹp'
    },
    {
        path: '/chinh-sach-van-chuyen',
        pathNames: ['/chinh-sach-van-chuyen'],
        name: 'Chính sách'
    },
];
const LeftHeaderMobile = () => {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('left');
    const { isMobile } = useDevice();
    // Tạo một trạng thái để lưu trữ path hiện tại
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const onChange = (e) => {
        setPlacement(e.target.value);
    };
    return (
        <div className='relative'>
            <button onClick={showDrawer} onChange={onChange} value="left" className=''>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="white" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" /></svg>
            </button>
            <Drawer
                placement={placement}
                onClose={onClose}
                open={open}
                key={placement}
                className='style'
            >
                <div
                    className={
                        isMobile
                            ? " h-[60px] w-[60px] mx-auto"
                            : "mx-auto h-[50px] w-[50px] "
                    }
                >
                    <img
                        src={Logo}
                        alt="Fail"
                        layout="fill"
                        className="object-cover object-left"
                    />
                </div>
                <p className=" font-montserrat text-2xl font-bold text-black text-center	mt-5">Vách ngăn Tổ ong  <br></br>Đà Nẵng</p>
                {routes.map((_, index) => {
                    const isActive = currentPath === routes.path;
                    return (
                        <div key={index} className='mt-5'>
                            <div className='flex justify-between'>
                                <a href={_.path} style={{ color: isActive ? 'blue' : 'black', fontSize: '16px' }} onClick={() => setCurrentPath(routes.path)} 
                                > 
                                    <p className={isActive ? 'text-blue-500' : 'text-black'}>{_.name} </p>
                                 </a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="black" d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z" /></svg>
                            </div>
                            <Divider style={{ margin: '5px 0' }} />
                        </div>
                    )
                })}

            </Drawer>
        </div>
    )
}

export default LeftHeaderMobile
