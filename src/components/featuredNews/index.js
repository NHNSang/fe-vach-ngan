import { Divider } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedNews = () => {
    return (
        <div className=' bg-white border rounded-lg px-4 py-5 mt-5'>
            <a href='/tin-tuc'>
                <h1 className='text-xl underline font-medium text-center text-black cursor-pointer'>Tin tức nổi bật</h1>
            </a>

            <a href='/tin-tuc-chi-tiet' className='flex justify-center items-center mt-5 gap-3'>
                <p className='text-base text-black line-clamp-2'>Những hư hỏng thường gặp khi dùng cửa lưới chống muỗi</p>
                <img src='https://sagowin.com/uploads/source//cua-luoi-me-linh-q.png' alt='img' className='w-[60px] h-[60px] border rounded-full' />
            </a>
            <Divider />
            <a href='/tin-tuc-chi-tiet' className='flex justify-center items-center mt-5 gap-3'>
                <p className='text-base text-black line-clamp-2'>Cửa lưới chống côn trùng Hòa Phát 2021 bảo vệ sức khỏe gia đình bạn</p>
                <img src='https://sagowin.com/uploads/source//cua-luoi-me-linh-q.png' alt='img' className='w-[60px] h-[60px] border rounded-full' />
            </a>
            <Divider />
            <a href='/tin-tuc-chi-tiet' className='flex justify-center items-center mt-5 gap-3'>
                <p className='text-base text-black line-clamp-2'>Lắp cửa lưới chống muỗi sao cho thẩm mỹ?</p>
                <img src='https://sagowin.com/uploads/source//cua-luoi-me-linh-q.png' alt='img' className='w-[60px] h-[60px] border rounded-full' />
            </a>
            <Divider />
            <a href='/tin-tuc-chi-tiet' className='flex justify-center items-center mt-5 gap-3'>
                <p className='text-base text-black line-clamp-2'>Lợi ích của cửa lưới chống muỗi vào mùa hè</p>
                <img src='https://sagowin.com/uploads/source//cua-luoi-me-linh-q.png' alt='img' className='w-[60px] h-[60px] border rounded-full' />
            </a>
        </div>


    )
}

export default FeaturedNews
