import React from 'react'
import BreadcrumbComnponent from '../../components/breadcrumb'

const Policy = () => {
    return (
        <div className='bg-[#f5f5f5] mt-[90px] md:mt-[130px] lg:mt-[130px]  xl:mt-[133px]'>
            <div className='container mx-auto pt-5'>
                <BreadcrumbComnponent title_1="Trang chủ" title_2="Chính sách" />
                <div className='bg-white mt-5 py-5 px-3 '>
                    <h1 className='text-3xl text-black font-medium'>Chính sách vận chuyển</h1>
                    <h2 id="time" className='text-xl text-black font-medium mt-5'>1. Thời gian giao hàng</h2>
                    <p className='text-lg text-black mt-3'>Công ty rèm cửa Vách ngăn tổ ong Đà Nẵng nhận giao hàng trên toàn quốc. Đối với khách hàng đặt mua online, trong vòng 24 giờ chúng tôi sẽ liên hệ lại để xác nhận đơn hàng và kiểm tra thêm về thông tin giao nhận hàng hóa cũng như các điều khoản liên quan khác, sau đó thông báo thời gian giao hàng. Đối với khách hàng mua hàng trực tiếp tại showroom, Vách ngăn tổ ong Đà Nẵng sẽ thông báo đến bạn thời gian nhận hàng cụ thể ngay sau khi chốt đơn.  </p>
                    <p className='text-lg text-black mt-3 italic'>Thời gian giao hàng sẽ được tính kể từ khi đơn hàng của bạn được nhân viên bên chúng tôi gọi lại xác nhận thông tin, cụ thể theo khu vực như sau:</p>
                    <p className='text-lg text-black mt-3'>-Trong khu vực nội thành (TP.HCM), chúng tôi sẽ hỗ trợ giao hàng trong vòng 3-5 ngày. </p>
                    <p className='text-lg text-black mt-3'>-Ở khu vực ngoại thành lân cận, chúng tôi sẽ hỗ trợ giao hàng trong vòng 5-7 ngày. </p>
                    <p className='text-lg text-black mt-3'>-Ở khu vực tỉnh thành, chúng tôi sẽ hỗ trợ giao hàng trong vòng 10 ngày. </p>
                    <p className='text-lg text-black mt-3'><span className='font-bold'>Lưu ý:</span> những đơn hàng giao dịch sau 18h hàng ngày, trong trường hợp không thể giao hàng kịp thời, chúng tôi sẽ liên hệ để báo trước cho quý khách chủ động.</p>

                    <p className='text-lg text-black mt-3 italic'>Tuy nhiên, cũng có một số trường hợp bất khả kháng khác thời gian giao hàng kéo dài hơn dự tính như:</p>
                    <p className='text-lg text-black mt-3'>-Nhân viên của Vách ngăn tổ ong Đà Nẵng không thể liên lạc được với khách hàng qua số điện thoại mà bạn đã cung cấp nên không thể giao hàng.</p>
                    <p className='text-lg text-black mt-3'>-Địa chỉ giao hàng bạn cung cấp không chính xác hoặc khó tìm.</p>
                    <p className='text-lg text-black mt-3'>-Số lượng đơn hàng của Vách ngăn tổ ong Đà Nẵng tăng đột biến khiến việc xử lý đơn hàng bị chậm</p>
                    <p className='text-lg text-black mt-3'>-Hàng hóa vì các lý do qua đường hàng không bị chậm hơn dự kiến, khiến việc giao hàng bị đình trệ.</p>
                    <p className='text-lg text-black mt-3'>Đối với các trường hợp bất khả kháng như trên, Vách ngăn tổ ong Đà Nẵng đều sẽ chủ động thông báo trước để xác nhận thay đổi thời gian giao nhận hàng hóa cũng như thông tin để bạn nắm bắt được tình hình đơn hàng</p>

                    <h2 className='text-xl text-black font-medium mt-5'>2. Chi phí vận chuyển hàng hóa</h2>
                    <p className='text-lg text-black mt-3'>Vách ngăn tổ ong Đà Nẵng sẽ giao hàng miễn phí đối với các đơn hàng giao nhận tại khu vực TP. Hồ Chí Minh và các tỉnh lân cận trong bán kính 30km.</p>
                    <p className='text-lg text-black mt-3'>Đối với các đơn hàng ngoại thành vượt quá 30km, chúng tôi sẽ phụ thu phí vận chuyển từ 20.000VNĐ đến 200.000VNĐ tùy theo khối lượng hàng hóa và mức độ xa gần của địa điểm nhận hàng.</p>
                    <p className='text-lg text-black mt-3'>Đối với các đơn hàng ở tỉnh, Vách ngăn tổ ong Đà Nẵng sẽ giao hàng thông qua đơn vị vận chuyển thứ 3 nên bạn vui lòng thanh toán chi phí vận chuyển theo mức phí của bên đơn vị vận chuyển thông báo.</p>

                    <h2 className='text-xl text-black font-medium mt-5'>3. Chính sách hỗ trợ lắp đặt</h2>
                    <p className='text-lg text-black mt-3'>Vách ngăn tổ ong Đà Nẵng sẽ giao hàng miễn phí đối với các đơn hàng giao nhận tại khu vực TP. Hồ Chí Minh và các tỉnh lân cận trong bán kính 30km.</p>
                    <p className='text-lg text-black mt-3'>Đối với các đơn hàng ngoại thành vượt quá 30km, chúng tôi sẽ phụ thu phí vận chuyển từ 20.000VNĐ đến 200.000VNĐ tùy theo khối lượng hàng hóa và mức độ xa gần của địa điểm nhận hàng.</p>
                    <p className='text-lg text-black mt-3'>Đối với các đơn hàng ở tỉnh, Vách ngăn tổ ong Đà Nẵng sẽ giao hàng thông qua đơn vị vận chuyển thứ 3 nên bạn vui lòng thanh toán chi phí vận chuyển theo mức phí của bên đơn vị vận chuyển thông báo.</p>
                    <p className='text-lg text-black font-medium text-center mt-3 italic'>Vách ngăn tổ ong Đà Nẵng chân thành cảm ơn quý khách hàng ! </p>
                </div>
            </div>

        </div>
    )
}

export default Policy
