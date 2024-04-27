import { Divider, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import style from './style.css'
import { useDevice } from '../../../hook/useDevice';

const SearchHeader = () => {
  const { Search } = Input;
  const navigate = useNavigate();
  const { isHeader } = useDevice();

  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const router = [
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
  ]
  return (
    <div >
      {isHeader ? <>
        <div className='my-2 lg:flex items-center gap-4  hidden'>
          <div className=' text-white hover:text-[#dfbe12] duration-100 hover:scale-105 '>
            <Link to='https://www.facebook.com/profile.php?id=61557290282733' target='_blank' style={{ color: 'currentColor', textDecoration: 'none' }} className='flex items-center gap-1'>Kết nối  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" /></svg></Link>
          </div>
          <Divider type="vertical" style={{ height: '20px', background: 'white' }} />
          <p className=' text-white hover:text-[#dfbe12] duration-100 hover:scale-105 cursor-pointer lg:text-[14px] xl:text-[16px]'>
            Địa chỉ: 67 Tô Hiến Thành, Phước Mỹ, Sơn Trà, Đà Nẵng
          </p>
          <Divider type="vertical" style={{ height: '20px', background: 'white' }} />
          <p className=' text-white hover:text-[#dfbe12] duration-100 hover:scale-105 cursor-pointer lg:text-[14px] xl:text-[16px]'>
            Hotline: 0775.452.291
          </p>
        </div>
      </> : <>
        <div className='my-2 flex items-center gap-4'>
          <div className=' text-white hover:text-[#dfbe12] hover:scale-105  duration-100'>
            <a href='/gioi-thieu' style={{ color: 'currentColor', textDecoration: 'none' }}  >Giới thiệu</a>
          </div>
          <Divider type="vertical" style={{ height: '20px', background: 'white' }} />
          <div className=' text-white hover:text-[#dfbe12] duration-100 hover:scale-105'>
            <Link to='https://www.facebook.com/profile.php?id=61557290282733' target='_blank' style={{ color: 'currentColor', textDecoration: 'none' }} className='flex items-center gap-1'>Kết nối  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" /></svg></Link>
          </div>
          <Divider type="vertical" style={{ height: '20px', background: 'white' }} />
          <p className=' text-white hover:text-[#dfbe12] duration-100 hover:scale-105 cursor-pointer'>
            Địa chỉ: 67 Tô Hiến Thành, Phước Mỹ, Sơn Trà, Đà Nẵng
          </p>
        </div>
        <div className='w-[90%]'>
          <Search
            placeholder="Tìm kiếm sản phẩm vách ngăn..."
            allowClear
            enterButton="Tìm kiếm"
            size="large"
            onSearch={onSearch}
            className={style}
          />
        </div>
        <div className='mt-3'>
          <ul className={`relative text-white hidden items-start space-x-0 space-y-10 lg:flex lg:items-center lg:space-x-[2.75rem] lg:space-y-0 2xl:space-x-8 3xl:space-x-[60px] mb-3`}>
            {router.map((x) => (
              <li
                onClick={() => {
                  navigate(x.path);
                }}
                key={x.path}
                className={`group relative cursor-pointer text-lg leading-[24px] tracking-wider transition duration-300 lg:text-base lg:leading-5 xl:text-[16px] xl:leading-[22px]`}
              >
                {(x.name)}
                <span className="block h-1 max-w-0 bg-[#dfbe12] transition-all duration-700 group-hover:max-w-full"></span>
              </li>
            ))}
          </ul>
        </div> </>}

    </div>
  )
}

export default SearchHeader
