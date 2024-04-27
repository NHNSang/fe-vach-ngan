import React from 'react'
import BreadcrumbComnponent from '../../components/breadcrumb'
import Count from '../../components/count';

const IntroduceUs = () => {

    return (
        <div className='bg-[#f5f5f5] mt-[90px] md:mt-[130px] lg:mt-[130px]  xl:mt-[133px]'>
            <div className='container mx-auto pt-5'>
                <BreadcrumbComnponent title_1="Trang chủ" title_2="Giới thiệu" />
                <div className='bg-white mt-5 py-5 px-3 '>
                    <h2 className='text-3xl text-black font-medium'>Giới thiệu về Vách ngăn Tổ ong Đà Nẵng</h2>
                    <p className='text-lg text-black mt-5'><span className='font-bold'>Vách ngăn Tổ ong Đà Nẵng </span>là một trong những doanh nghiệp hàng đầu hoạt động trong lĩnh vực sản xuất và thi công cửa lưới chống muỗi và rèm tổ ong, vách ngăn tổ ong.</p>
                    <img src='https://blinds.vn/wp-content/uploads/2021/07/re%CC%80m-to%CC%82%CC%89-ong-ma%CC%80u-va%CC%80ng-lu%CC%81a-500x500.jpeg' alt={'img-card'} className='w-[75%] md:w-[55%] h-[200px] sm:h-[250px] md:h-[250px] lg:h-[350px] xl:h-[550px] mx-auto object-fill mt-5' />
                    <p className='text-lg text-black mt-3'>Được thành lập từ năm 2012. Với dây chuyền sản xuất khép kín, công nghệ hiện đại và áp dụng các quy định ”Hợp chuẩn, Hợp quy” hiện hành, những sản phẩm của SAGOWIN được cải tiến nhằm đáp ứng tối đa nhu cầu riêng biệt của mỗi khách hàng.</p>
                    <Count />
                    <h2 className='text-xl text-black font-medium mt-5'>Tầm nhìn, sứ mệnh và giá trị cốt lõi của Vách ngăn Tổ ong Đà Nẵng</h2>
                    <h2 className='text-xl text-black font-medium mt-5'>1. Tầm nhìn</h2>
                    <p className='text-lg text-black mt-3'>Phấn đấu trở thành thương hiệu sản xuất hàng đầu Việt Nam trong ngành cửa lưới, rèm cửa nói riêng và trong lĩnh vực nội thất, xây dựng nói chung, và đem đến những sản phẩm Việt Nam chất lượng cao cho khách hàng trong nước và quốc tế.</p>
                    <img src='https://duykhanh.com/uploads/gioi-thieu/tam-nhin-su-menh-gtcl2_2.jpg' alt={'img-card'} className='w-[75%] md:w-[55%] h-[200px] sm:h-[250px] md:h-[250px] lg:h-[350px] xl:h-[550px] mx-auto object-fill mt-5' />

                    <h2 className='text-xl text-black font-medium mt-5'>2. Sứ mệnh</h2>
                    <p className='text-lg text-black mt-3'>- Giải quyết vấn đề của khách hàng</p>
                    <p className='text-lg text-black mt-3'>- Hợp tác uy tín, tin cậy, phát triển bền vững cùng đối tác</p>
                    <p className='text-lg text-black mt-3'>- Đem lại cuộc sống sung túc và cơ hội phát triển bản thân cho nhân viên</p>
                    <p className='text-lg text-black mt-3'>- Đóng góp cho cộng đồng</p>
                    <img src='https://sagowin.com/uploads/source/su-menh-sagowin.jpg' alt={'img-card'} className='w-[75%] md:w-[55%] h-[200px] sm:h-[250px] md:h-[250px] lg:h-[350px] xl:h-[550px] mx-auto object-fill mt-5' />

                    <h2 className='text-xl text-black font-medium mt-5'>3. Giá trị cốt lõi</h2>
                    <p className='text-lg text-black mt-3'>- Nhận trách nhiệm </p>
                    <p className='text-lg text-black mt-3'>- Lắng nghe và chia sẻ</p>
                    <p className='text-lg text-black mt-3'>- Minh bạch rõ ràng</p>
                    <p className='text-lg text-black mt-3'>- Vấn đề của khách hàng là vấn đề của mình</p>
                    <p className='text-lg text-black mt-3'>- Tinh thần thép</p>
                    <img src='https://sagowin.com/uploads/source/gia-tri-cot-loi-sagowin.jpg' alt={'img-card'} className='w-[75%] md:w-[55%] h-[200px] sm:h-[250px] md:h-[250px] lg:h-[350px] xl:h-[550px] mx-auto object-fill mt-5' />

                    <h2 className='text-xl text-black font-medium mt-5'>Các sản phẩm chủ lực và dịch vụ</h2>
                    <p className='text-lg text-black mt-3'>Hai dòng sản phẩm chính của SAGOWIN là cửa lưới chống muỗi và rèm tổ ong. Ngoài ra, SAGOWIN còn cung cấp cho quý khách dịch vụ tư vấn miễn phí, dịch vụ lắp đặt, bảo hành, bảo dưỡng và sửa chữa cửa lưới chống muỗi, rèm tổ ong, vách ngăn tổ ong. </p>

                    <h2 className='text-xl text-black font-medium mt-5'>1. Cửa lưới chống muỗi</h2>
                    <p className='text-lg text-black mt-3'>- Cửa lưới chống muỗi tự cuốn </p>
                    <p className='text-lg text-black mt-3'>- Cửa lưới chống muỗi dạng lùa</p>
                    <p className='text-lg text-black mt-3'>- Cửa lưới chống muỗi cố định</p>
                    <p className='text-lg text-black mt-3'>- Cửa lưới chống muỗi dạng xếp có ray và xếp xích</p>
                    <p className='text-lg text-black mt-3'>- Cửa lưới xếp lá nhôm</p>
                    <p className='text-lg text-black mt-3'>Sản phẩm cửa lưới của SAGOWIN nổi bật với sự bền bỉ nhờ khung nhôm được làm từ nhôm định hình cao  sơn tĩnh điện. Nhờ vào quá trình xử lý kim loại đặc biệt, khung nhôm cực kỳ chắc chắn, và không bị ảnh hưởng bởi thời tiết bên ngoài hoặc các yếu tố lý hóa khác.
                        Công dụng chính của cửa lưới là ngăn chặn ruồi, muỗi và các loại côn trùng có hại xâm nhập vào khu vực nhà ở hoặc xưởng sản xuất. Từ đó tạo ra một không gian sinh hoạt, sản xuất khép kín, an toàn vệ sinh nhưng vẫn đảm bảo lưu thông không khí và ánh sáng tự nhiên. Cửa lưới SAGOWIN không chỉ được đánh giá cao về độ bền mà còn nổi bật về khả năng tiết kiệm không gian và dễ dàng lắp đặt.</p>

                    <h2 className='text-xl text-black font-medium mt-5'>2. Rèm tổ ong thương hiệu </h2>
                    <p className='text-lg text-black mt-3'>- Rèm tổ ong gắn trên kính lùa ngang </p>
                    <p className='text-lg text-black mt-3'>- Cửa sổ rèm tổ ong lùa ngang 01 cánh, 02 cánh</p>
                    <p className='text-lg text-black mt-3'>- Cửa đi rèm tổ ong lùa ngang 01 cánh, 02 cánh </p>
                    <p className='text-lg text-black mt-3'>- Rèm tổ ong kết hợp cửa lưới chống muỗi lùa ngang </p>
                    <p className='text-lg text-black mt-3'>- Vách ngăn tổ ong lùa ngang 01 cánh, 02 cánh </p>
                    <p className='text-lg text-black mt-3'>Với thiết kế tổ ong và có thể xếp gọn, rèm tổ ong được đánh giá cao về khả năng giảm tiếng ồn hiệu quả và tính thẩm mỹ cao. Thêm vào đó, lớp vải không dệt bên ngoài và lớp tráng bạc bên trong mang đến khả năng cách nhiệt, ngăn lạnh, ngăn mùi, không thấm nước, ít bám bụi nên giúp việc vệ sinh sản phẩm dễ dàng.</p>

                </div>
            </div>
        </div>
    )
}

export default IntroduceUs
