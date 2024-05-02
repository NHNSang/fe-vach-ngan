import React, { useState } from 'react'
import logo from '../../assets/logo_vach_ngan.png'
import { Col, Input, Row } from 'antd'
import SearchHeader from './searchHeader';
import RightHeader from './rightHeader';
import { Link, useNavigate } from 'react-router-dom';
import { useDevice } from '../../hook/useDevice';
import LeftHeaderMobile from './leftHeaderMobile';
const Header = () => {
  const { Search } = Input;
  const navigate = useNavigate();
  const { isHeader } = useDevice();
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const [isVisible, setIsVisible] = useState(false);

  const togglePopup = () => {
    setIsVisible(!isVisible);
  };
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

  return (
    <div className='bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'>
      <div className='container mx-auto   '>
        <div className='fixed  bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 z-50 left-0 right-0 top-0 px-[15px] md:px-[50px]'>
          {isHeader
            ?<>
            <div className='flex justify-between items-center relative  py-[25px] md:py-[45px] lg:py-5 xl:py-5'>
              
            <LeftHeaderMobile/>

              {/*  */}
              <Link to={'/'}>
                <div className="cursor-pointer ml-[60px]">
                  <SearchHeader />
                  <div className='flex justify-center'>
                    <img src={logo} alt="logo" className='w-[40px] h-[40px]' />
                  </div>
                </div>
              </Link>
              <div className="relative flex items-center gap-2">
                <RightHeader />
              </div>
            </div>
            </>
            :
            <Row className='items-center'>
              <Col xl={2} lg={8} md={8} sm={24} xs={8}  >
                <div className='flex justify-center'>
                  <Link to={"/"}>
                    <img src={logo} alt='logo' className='w-[70px]' />
                  </Link>
                </div>
              </Col>
              <Col xl={15} lg={8} md={8} sm={24} xs={8} className='pl-[30px]'>
                <SearchHeader />
              </Col>
              <Col xl={7} lg={8} md={8} sm={24} xs={8}>
                <div className='flex justify-center'>
                  <RightHeader />
                </div>
              </Col>
            </Row>}

        </div>
      </div>
    </div>
  )
}

export default Header
