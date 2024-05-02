import { Col, Divider, Row } from "antd";
import Banner from "../../components/carousel";
import { Link } from "react-router-dom";
import BannerZoom from "../../components/bannerZoom";
import SuggestItems from "../../components/suggestItems";
import OutstandingItems from "../../components/outstandingItems";
import ListItem from "../../components/listItem";
import NewHomePage from "../../components/newHomePage";
import FeedBack from "../../components/feedBack";
import FeaturedNews from "../../components/featuredNews";
import vach_ngan from '../../assets/vach-ngan-to-ong.jpg'
import { useDevice } from "../../hook/useDevice";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductData from '../../data/product.json'

export default function Home() {
    const { isLayout, isTablet, isMobile } = useDevice()
    const { products } = ProductData;
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: isMobile ? 3 : isTablet ? 4 : 6,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 500,
        arrows: true,
    };
    return (
        <div className="bg-[#f5f5f5] mt-[90px] md:mt-[105px] lg:mt-[105px]  xl:mt-[133px] ">
            <div className="container mx-auto pt-1 pb-10 ">
                <Row gutter={{ xl: 10, xxl: 32 }} className='mt-4 md:mt-10'>
                    <Col lg={24} xl={5} xxl={5}>
                        {isLayout ?
                            <div className="mx-auto mb-5 bg-white px-2 md:p-5">
                                <Slider {...settings}>
                                    {products.map((_, index) => {
                                        return (
                                            <div key={index} className="pt-[20px] md:pt-0">
                                                <a href={`${_?.path}/${_?.id}`} className=' mt-5 '>
                                                    <div className="flex justify-center">
                                                        <img src={_.thumbnail} alt={_.name} className='w-[60px] h-[60px] border rounded-[24px]' />
                                                    </div>
                                                    <p className='text-base text-black text-center'>{_.name}</p>
                                                </a>
                                            </div>
                                        )
                                    })}
                                </Slider>
                            </div>
                            :
                            <>
                                <div className='bg-white border rounded-lg px-4 py-5'>
                                    <Link to='/'>
                                        <div className='bg-[#dfbe12] rounded-[10px] w-[60%] mx-auto h-[50px] flex items-center justify-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="white" d="m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81zM12 3L2 12h3v8h6v-6h2v6h6v-8h3z" /></svg>
                                            <p className='text-base text-white'>Trang chủ</p>
                                        </div>
                                    </Link>
                                    {products.map((_, index) => {
                                        return (
                                            <div key={index}>
                                                <a href={`${_?.path}/${_?.id}`} className='flex items-center mt-5 gap-3'>
                                                    <img src={_.thumbnail} alt={_.name} className='w-[60px] h-[60px] border rounded-[24px]' />
                                                    <p className='text-base text-black'>{_.name}</p>
                                                </a>
                                                <Divider />
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="mt-5">
                                    <img src={vach_ngan} alt="vach_ngan" className="h-[550px] w-full" />
                                </div>
                                <FeaturedNews /></>}
                    </Col>
                    <Col lg={24} xl={19} xxl={19}>
                        <Banner />
                        <BannerZoom text={"Tư vấn, do đạc miễn phí,..."} />
                        <SuggestItems />
                        <OutstandingItems />
                        <BannerZoom text={"Hổ trợ bảo trì 24/7"} />
                        <NewHomePage />
                        <ListItem />
                        <FeedBack />
                    </Col>
                </Row>
            </div>
        </div>
    );
}