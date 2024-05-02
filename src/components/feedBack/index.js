import React from 'react'
import Person1 from '../../assets/feedback-an.jpg'
import Person2 from '../../assets/feedback-lam.jpg'
import Person3 from '../../assets/feedback-quyen.jpg'
import Person4 from '../../assets/feedback-hoa-anh.jpg'
import Person5 from '../../assets/feedback-yen.jpg'
import Person6 from '../../assets/feedback-tram.jpg'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from './style.css'
import { useDevice } from '../../hook/useDevice'

const listData = [
    {
        image: Person1,
        name: 'Thiên Ân',
        feedback: 'Màn đẹp chất lượng tốt từ nhân viên bán hàng đến nhân viên lắp đặt đều tận tình chu đáo mình rất thích , sau này sẽ sử dụng các sản phẩm và dich vụ của cty vì điểm 10 cho chất lương.'
    },
    {
        image: Person2,
        name: 'Hoàng Lâm',
        feedback: 'Màn đẹp, chất lượng tốt. Nhân viên nhiệt tình, chu đáo, đúng giờ '
    },
    {
        image: Person4,
        name: 'Hoa Anh',
        feedback: 'Rèm cửa đẹp chất lượng, sẽ giới thiệu cho người quen sử dụng khi có nhu cầu '
    },
    {
        image: Person3,
        name: 'Nguyễn Quyên',
        feedback: 'Lần đầu tiên đặt rèm cửa online nhưng sản phẩm nhận được rất tỉ mỉ, nhân viên tư vấn nhiệt tình và hiểu rõ mong muốn của khách hàng.'
    },
    {
        image: Person5,
        name: 'Nguyễn Yến',
        feedback: 'Anh ấy tuyệt vời lắm'
    },
    {
        image: Person6,
        name: 'Nguyễn Trâm',
        feedback: 'Thật may mắn khi được anh ấy lắp rèm'
    },
]
const FeedBack = () => {
    const { isTablet, isMobile } = useDevice()


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        arrows: true,
    };
    return (
        <div>
            <div className=' bg-[#3980F1] mt-5 flex justify-between'>
                <div className='pl-[20px] py-4'>
                    <p className='text-white text-[14px] md:text-base lg:text-lg xl:text-xl'>Bình luận khách hàng</p>
                </div>
            </div>
            <div className='mt-5 py-2 md:py-5 bg-white  mx-auto'>
                <Slider {...settings} className={style}>
                    {listData.map((_, index) => {
                        return (
                            <div key={index} className=''>
                                <div className='mt-3 text-center px-3'>
                                    <img src={_.image} alt='person-feedback' className='w-[120px] lg:w-[150px] h-[120px] lg:h-[150px] mx-auto rounded-full object-cover' />
                                    <p className='mt-3 text-lg font-medium'>{_.name}</p>
                                    <p className='mt-3 text-lg line-clamp-2'>''{_.feedback}''</p>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>


        </div>
    )
}

export default FeedBack
