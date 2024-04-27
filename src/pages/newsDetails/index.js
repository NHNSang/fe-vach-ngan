import React from 'react'
import BreadcrumbComnponent from '../../components/breadcrumb'
import { Col, Divider, Row } from 'antd'
import FeaturedNews from '../../components/featuredNews'
import NewHomePage from '../../components/newHomePage'
import { useDevice } from '../../hook/useDevice'

const NewsDetails = () => {
    const {isLayout} = useDevice()
    const handleShareButtonClick = () => {
        // Xử lý logic chia sẻ qua Facebook ở đây
        // Sử dụng window.open để mở cửa sổ chia sẻ Facebook
        window.open('https://www.facebook.com/sharer/sharer.php?u=https://example.com');
    };
    return (
        <div className='bg-[#f5f5f5] mt-[90px] md:mt-[130px] lg:mt-[130px]  xl:mt-[133px]'>
            <div className='container mx-auto pt-5'>
                <BreadcrumbComnponent title_1="Trang chủ" title_2="Tin tức" title_3='Cửa lưới chống côn trùng Hòa Phát 2021 bảo vệ sức khỏe gia đình bạn' />

                <Row gutter={{    xl: 32,xxl: 32 }} className='mt-5'>
                    <Col xl={19}>
                        <div className='bg-white mt-5 py-5 px-3 '>
                            <h2 className='text-3xl text-black font-medium'>CỬA LƯỚI CHỐNG CÔN TRÙNG HÒA PHÁT 2021 BẢO VỆ SỨC KHỎE GIA ĐÌNH BẠN</h2>
                            <div className='flex items-center gap-3 mt-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 36 36"><path fill="gray" d="M32.25 6h-4v3a2.2 2.2 0 1 1-4.4 0V6H12.2v3a2.2 2.2 0 0 1-4.4 0V6h-4A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6M10 26H8v-2h2Zm0-5H8v-2h2Zm0-5H8v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Z" class="clr-i-solid clr-i-solid-path-1" /><path fill="currentColor" d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1" class="clr-i-solid clr-i-solid-path-2" /><path fill="currentColor" d="M26 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1" class="clr-i-solid clr-i-solid-path-3" /><path fill="none" d="M0 0h36v36H0z" /></svg>
                                <p>25/5/2024</p>
                            </div>
                            <p className='text-lg text-black mt-3'>Cửa lưới chống côn trùng Hòa Phát chẳng còn là từ khóa xa lạ khi mà chất lượng và nhu cầu sống của con người ngày một phát triển vượt bậc. Theo đó các vấn đề như sức khỏe cũng ngày được quan tâm chú trọng.</p>
                            <p className='text-lg text-black mt-3'>Nằm trong vùng nhiệt đới gió mùa, Việt Nam hiển nhiên nhận được khí hậu nóng ẩm, đi cùng đó là sự phát triển không ngừng của các loại côn trùng gây bệnh như ruồi, muỗi, gián, bọ… Hàng loạt căn bệnh ảnh hưởng sức khỏe như dịch tả, ngộ độc, sốt xuất huyết… cũng xuất hiện từ đây.</p>
                            <p className='text-lg text-black mt-3'>Vì vậy phòng tránh côn trùng là một trong điều cần thiết để bảo vệ sức khỏe, từ đây dòng sản phẩm cửa lưới chống côn trùng Hòa Phát ra đời nhằm đáp ứng nhu cầu chống muỗi, côn trùng gây hại. Để hiểu hơn về sản phẩm cửa lưới chống côn trùng Hòa Phát hãy cùng chúng tôi tìm hiểu thông qua những thông tin sau.</p>
                            <img src='https://blinds.vn/wp-content/uploads/2021/07/re%CC%80m-to%CC%82%CC%89-ong-ma%CC%80u-va%CC%80ng-lu%CC%81a-500x500.jpeg' alt={'img-card'} className='w-[75%] md:w-[55%] h-[200px] sm:h-[250px] md:h-[250px] lg:h-[350px] xl:h-[550px] mx-auto object-fill mt-5' />
                            <h2 className='text-xl text-black font-medium mt-5'>Cửa lưới chống côn trùng Hòa Phát là dòng sản phẩm gì?</h2>
                            <p className='text-lg text-black mt-3'>Nếu trước đây bình xịt côn trùng, nhang mũi được ưa chuộng khi sử dụng các loại hóa chất hay các loại vợt mũi sử dụng tích điện tác động trực tiếp giết chết côn trùng. Dù hiệu quả nhưng chúng vẫn có thể ảnh hưởng trẻ nhỏ nếu gia đình không cẩn trọng.</p>
                            <p className='text-lg text-black mt-3'>Nếu trước đây bình xịt côn trùng, nhang mũi được ưa chuộng khi sử dụng các loại hóa chất hay các loại vợt mũi sử dụng tích điện tác động trực tiếp giết chết côn trùng. Dù hiệu quả nhưng chúng vẫn có thể ảnh hưởng trẻ nhỏ nếu gia đình không cẩn trọng.</p>
                            <p className='text-lg text-black mt-3'>Nếu trước đây bình xịt côn trùng, nhang mũi được ưa chuộng khi sử dụng các loại hóa chất hay các loại vợt mũi sử dụng tích điện tác động trực tiếp giết chết côn trùng. Dù hiệu quả nhưng chúng vẫn có thể ảnh hưởng trẻ nhỏ nếu gia đình không cẩn trọng.</p>

                            <h2 className='text-xl text-black font-medium mt-5'>Cấu tạo của cửa lưới chống côn trùng Hòa Phát như thế nào?</h2>
                            <p className='text-lg text-black mt-3'>Cửa lưới chống côn trùng Hòa Phát có cấu tạo khá đơn giản, bao gồm khung định hình và lưới. Tuy cấu tạo đơn giản nhưng cửa lưới chống côn trùng được chế tạo từ chất liệu cao cấp đảm bảo thời gian sử dụng lâu dài trên 10 năm nếu bạn tuân thủ cách vệ sinh và bảo quản đúng.</p>

                            <h2 className='text-xl text-black font-medium mt-5'>Phần khung</h2>
                            <p className='text-lg text-black mt-3'>Khung định hình hay khung cửa là phần khung thép hoặc nhôm viền bên ngoài, bao bọc phần lưới. Khung có nhiệm vụ định hình toàn bộ cửa lưới, đồng thời là nơi để phần lưới bám trụ chắc chắn phòng chống côn trùng xâm nhập</p>
                            <p className='text-lg text-black mt-3'>Khung định hình hay khung cửa là phần khung thép hoặc nhôm viền bên ngoài, bao bọc phần lưới. Khung có nhiệm vụ định hình toàn bộ cửa lưới, đồng thời là nơi để phần lưới bám trụ chắc chắn phòng chống côn trùng xâm nhập</p>

                            <h2 className='text-xl text-black font-medium mt-5'>Phần lưới</h2>
                            <p className='text-lg text-black mt-3'>Khung định hình hay khung cửa là phần khung thép hoặc nhôm viền bên ngoài, bao bọc phần lưới. Khung có nhiệm vụ định hình toàn bộ cửa lưới, đồng thời là nơi để phần lưới bám trụ chắc chắn phòng chống côn trùng xâm nhập</p>
                            <p className='text-lg text-black mt-3'>Khung định hình hay khung cửa là phần khung thép hoặc nhôm viền bên ngoài, bao bọc phần lưới. Khung có nhiệm vụ định hình toàn bộ cửa lưới, đồng thời là nơi để phần lưới bám trụ chắc chắn phòng chống côn trùng xâm nhập</p>
                            <p className='text-lg text-black mt-3'>Sợi thủy tinh và vật dụng mới được đưa vào sản xuất với kích thước mắc lưới siêu nhỏ đường kính 0,3 mm lưới chống muỗi, chống côn trùng từ sợ thủy tinh có thiết đan chéo đi cùng tính năng chống sự ăn mòn và chống cháy được nhiều gia đình trẻ tin dùng. Loại mắt lưới này còn có ưu điểm nhẹ, dễ dàng tháo ráp, cuộn tròn thuận tiện khi vận chuyển.</p>
                            <img src='https://blinds.vn/wp-content/uploads/2021/07/re%CC%80m-to%CC%82%CC%89-ong-ma%CC%80u-va%CC%80ng-lu%CC%81a-500x500.jpeg' alt={'img-card'} className='w-[75%] md:w-[55%] h-[200px] sm:h-[250px] md:h-[250px] lg:h-[350px] xl:h-[550px] mx-auto object-fill mt-5' />

                            <h2 className='text-xl text-black font-medium mt-5'>Phân loại các sản phẩm cửa lưới chống côn trùng Hòa Phát</h2>
                            <p className='text-lg text-black mt-3'>Khung định hình hay khung cửa là phần khung thép hoặc nhôm viền bên ngoài, bao bọc phần lưới. Khung có nhiệm vụ định hình toàn bộ cửa lưới, đồng thời là nơi để phần lưới bám trụ chắc chắn phòng chống côn trùng xâm nhập</p>
                            <p className='text-lg text-black mt-3'>Khung định hình hay khung cửa là phần khung thép hoặc nhôm viền bên ngoài, bao bọc phần lưới. Khung có nhiệm vụ định hình toàn bộ cửa lưới, đồng thời là nơi để phần lưới bám trụ chắc chắn phòng chống côn trùng xâm nhập</p>

                            <h2 className='text-xl text-black font-medium mt-5'>Cửa lưới chống côn trùng dạng xếp</h2>
                            <p className='text-lg text-black mt-3'>Khung định hình hay khung cửa là phần khung thép hoặc nhôm viền bên ngoài, bao bọc phần lưới. Khung có nhiệm vụ định hình toàn bộ cửa lưới, đồng thời là nơi để phần lưới bám trụ chắc chắn phòng chống côn trùng xâm nhập</p>
                            <p className='text-lg text-black mt-3'>Khung định hình hay khung cửa là phần khung thép hoặc nhôm viền bên ngoài, bao bọc phần lưới. Khung có nhiệm vụ định hình toàn bộ cửa lưới, đồng thời là nơi để phần lưới bám trụ chắc chắn phòng chống côn trùng xâm nhập</p>

                            <h2 className='text-xl text-black font-medium mt-5'>Chống muỗi và các loại côn trùng, động vật khác hiệu quả</h2>
                            <p className='text-lg text-black mt-3'>Khung định hình hay khung cửa là phần khung thép hoặc nhôm viền bên ngoài, bao bọc phần lưới. Khung có nhiệm vụ định hình toàn bộ cửa lưới, đồng thời là nơi để phần lưới bám trụ chắc chắn phòng chống côn trùng xâm nhập</p>
                            <p className='text-lg text-black mt-3'>Khung định hình hay khung cửa là phần khung thép hoặc nhôm viền bên ngoài, bao bọc phần lưới. Khung có nhiệm vụ định hình toàn bộ cửa lưới, đồng thời là nơi để phần lưới bám trụ chắc chắn phòng chống côn trùng xâm nhập</p>

                            <h2 className='text-xl text-black font-medium mt-5'>Cửa lưới chống côn trùng Hòa Phát giúp giảm thiểu dịch bệnh</h2>
                            <p className='text-lg text-black mt-3'>Khung định hình hay khung cửa là phần khung thép hoặc nhôm viền bên ngoài, bao bọc phần lưới. Khung có nhiệm vụ định hình toàn bộ cửa lưới, đồng thời là nơi để phần lưới bám trụ chắc chắn phòng chống côn trùng xâm nhập</p>
                            <p className='text-lg text-black mt-3'>Khung định hình hay khung cửa là phần khung thép hoặc nhôm viền bên ngoài, bao bọc phần lưới. Khung có nhiệm vụ định hình toàn bộ cửa lưới, đồng thời là nơi để phần lưới bám trụ chắc chắn phòng chống côn trùng xâm nhập</p>

                            <h2 className='text-xl text-black font-medium mt-5'>Ngăn chặn gió lớn và các vật thể bay vào không gian nhà bạn</h2>
                            <p className='text-lg text-black mt-3'>Khung định hình hay khung cửa là phần khung thép hoặc nhôm viền bên ngoài, bao bọc phần lưới. Khung có nhiệm vụ định hình toàn bộ cửa lưới, đồng thời là nơi để phần lưới bám trụ chắc chắn phòng chống côn trùng xâm nhập</p>
                            <p className='text-lg text-black mt-3'>Khung định hình hay khung cửa là phần khung thép hoặc nhôm viền bên ngoài, bao bọc phần lưới. Khung có nhiệm vụ định hình toàn bộ cửa lưới, đồng thời là nơi để phần lưới bám trụ chắc chắn phòng chống côn trùng xâm nhập</p>

                            <h2 className='text-xl text-black font-medium mt-5'>Kết Luận</h2>
                            <p className='text-lg text-black mt-3'>Khung định hình hay khung cửa là phần khung thép hoặc nhôm viền bên ngoài, bao bọc phần lưới. Khung có nhiệm vụ định hình toàn bộ cửa lưới, đồng thời là nơi để phần lưới bám trụ chắc chắn phòng chống côn trùng xâm nhập</p>
                            <p className='text-lg text-black mt-3'>Khung định hình hay khung cửa là phần khung thép hoặc nhôm viền bên ngoài, bao bọc phần lưới. Khung có nhiệm vụ định hình toàn bộ cửa lưới, đồng thời là nơi để phần lưới bám trụ chắc chắn phòng chống côn trùng xâm nhập</p>

                            <div className='flex gap-3 mt-5'>
                                <button className='flex items-center gap-2 px-10 py-2 rounded-xl bg-[#3980F1] text-white'  >Like <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73zM1 21h4V9H1z" /></svg></button>
                                <button className='flex items-center gap-2 px-10 py-2 rounded-xl bg-[#dfbe12] text-white' onClick={handleShareButtonClick} >Chia sẽ <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" /></svg></button>
                            </div>

                            <Divider><p className='text-lg text-black'>Bài viết liên quan</p></Divider>
                            <NewHomePage />
                        </div>
                    </Col>
                    <Col xl={5}>
                        {isLayout ? undefined : <FeaturedNews />}
                    </Col>
                </Row>

            </div>
        </div>
    )
}

export default NewsDetails
