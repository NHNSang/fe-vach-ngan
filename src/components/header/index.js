import React, { useState } from 'react'
import logo from '../../assets/logo_vach_ngan.png'
import { Col, Input, Row } from 'antd'
import SearchHeader from './searchHeader';
import RightHeader from './rightHeader';
import { Link, useNavigate } from 'react-router-dom';
import { useDevice } from '../../hook/useDevice';
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
            ?
            <div className='flex justify-between items-center relative  py-[25px] md:py-[45px] lg:py-5 xl:py-5'>
              <div className="relative flex items-center gap-2">
                {/* Icon */}
                <button onClick={togglePopup} className=''>
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="white" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" /></svg>
                </button>
                {/* Popup */}
                {isVisible && (
                  <div className="fixed top-[5rem]  md:top-[8rem]  left-0 right-0 z-10 bg-white shadow-md rounded-md p-4 mt-2 popup">
                    <ul
                      className=''
                    >
                      {routes.map((x) => (
                        <li
                          onClick={() => {
                            navigate(x.path);
                          }}
                          key={x.path}
                          className={`group relative cursor-pointer font-sans text-lg leading-[24px] tracking-wider transition duration-300 lg:text-base lg:leading-5 xl:text-[20px] xl:leading-[22px] text-black flex justify-between items-center mt-3`}
                        >
                          {(x.name)}
                          <span className="block h-1 max-w-0 bg-[#FF385C] transition-all duration-700 group-hover:max-w-full"></span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="black" d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z" /></svg>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {/*  */}
              <Link to={'/'}>
                <div className="cursor-pointer ml-[60px]">
                  <SearchHeader />
                  <div className='flex justify-center'>
                    <img src={logo} alt="logo" width='40' height='40' />

                  </div>
                </div>
              </Link>
              <div className="relative flex items-center gap-2">
                <RightHeader />
              </div>
            </div>
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
