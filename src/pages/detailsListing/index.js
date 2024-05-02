import { Col, Divider, Row } from 'antd';
import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import BreadcrumbComnponent from '../../components/breadcrumb';
import DetailsListingPrice from '../../components/detailsListing-price';
import DetailsListingCommit from '../../components/detailsListing-commit';
import ListItem from '../../components/listItem';
import { useParams } from 'react-router-dom';
import ProductData from '../../data/product.json'

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const DetailsListing = () => {
  const { id } = useParams();
  console.log(id)
  const { products } = ProductData;

  return (
    <div className=' bg-[#f5f5f5] mt-[90px] md:mt-[130px] lg:mt-[130px]  xl:mt-[133px]'>
      <div className='container mx-auto pt-5'>
        <BreadcrumbComnponent title_1="Trang chủ" title_2={products[id]?.name} />
        <h2>Chi tiết sản phẩm {products[id]?.name}</h2>
        <Row className='my-5 py-5  px-3 bg-white'>
          <Col xs={24} md={24} lg={24} xl={10} xxl={10}>
            <ImageGallery items={products[id]?.images} autoPlay={true} showPlayButton={false} showFullscreenButton={false} slideDuration={300} />
          </Col>
          <Col xs={24} md={24} lg={17} xl={8} xxl={8}>
            <DetailsListingPrice name={products[id]?.name} saleOff={products[id]?.saleOff} price={products[id]?.price} id={products[id]?.id} />
          </Col>
          <Col xs={24} md={24} lg={7} xl={6} xxl={6}>
            <DetailsListingCommit />
          </Col>
        </Row>
        <Divider><p className='text-2xl'>Mô tả</p></Divider>
        <div className='bg-white py-5 px-3 '>
          <p className='text-lg text-[#3980F1]'>Rèm cầu vồng cản sáng <span className='text-black'>ngày càng được nhiều khách hàng lựa chọn. Mẫu rèm thẩm mỹ, phong cách hiện đại, đa dạng màu sắc, dễ dàng điều chỉnh ánh sáng theo nhu cầu sử dụng. Sản phẩm mới du nhập từ Hàn Quốc này chắc chắn sẽ làm hài lòng mọi khách hàng.</span></p>
          <h2 className='text-xl text-black font-medium mt-5'>Thông số kỹ thuật của Rèm Hàn Quốc cản sáng</h2>
          <table className="border border-gray-300 w-full md:w-[90%] lg:w-[80%] mt-3">
            <thead>
              <tr>
                <th className="border-b border-r border-gray-300 px-4 py-2 w-[40%]">Thông tin</th>
                <th className="border-b border-gray-300 px-4 py-2 w-[60%]">Chi tiết sản phẩm</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-r border-gray-300 px-4 py-2">Thành phần</td>
                <td className="border-b border-gray-300 px-4 py-2">100% Polyester</td>
              </tr>
              <tr>
                <td className="border-b border-r border-gray-300 px-4 py-2">Khổ rộng</td>
                <td className="border-b border-gray-300 px-4 py-2">280cm</td>
              </tr>
              <tr>
                <td className="border-b border-r border-gray-300 px-4 py-2">Độ dày</td>
                <td className="border-b border-gray-300 px-4 py-2">từ 0.75mm – 1.1mm</td>
              </tr>
              <tr>
                <td className="border-b border-r border-gray-300 px-4 py-2">Mức độ cản sáng</td>
                <td className="border-b border-gray-300 px-4 py-2">từ 80% – 100%. Khách hàng có thể đưa ra yêu cầu sử dụng, HAKA sẽ tư vấn cho khách hàng mã sản phẩm phù hợp.</td>
              </tr>
              <tr>
                <td className="border-b border-r border-gray-300 px-4 py-2">Bảo hành</td>
                <td className="border-b border-gray-300 px-4 py-2">từ 12 tháng đến 36 tháng tùy theo mã vải</td>
              </tr>
            </tbody>
          </table>
          <p className='text-lg text-black mt-5'>Đây là dòng sản phẩm cao cấp, thiết kế trẻ trung, hiện đại. Lại có thể dễ dàng điều chỉnh mức độ ánh sáng theo nhu cầu sử dụng. Vì vậy, rèm cầu vồng Hàn Quốc ngày càng được nhiều khách hàng lựa chọn lắp đặt trong công trình của mình.</p>
          <img src='https://blinds.vn/wp-content/uploads/2021/07/re%CC%80m-to%CC%82%CC%89-ong-ma%CC%80u-va%CC%80ng-lu%CC%81a-500x500.jpeg' alt={'img-card'} className='w-[75%] md:w-[55%] h-[200px] sm:h-[250px] md:h-[250px] lg:h-[350px] xl:h-[550px] mx-auto object-fill mt-5' />
          <h2 className='text-xl text-black font-medium mt-5'>Mức độ cản sáng của Rèm cầu vồng</h2>
          <p className='text-lg text-[#3980F1]'>Rèm cầu vồng cản sáng <span className='text-black'>được thiết kế với hai lớp vải sáng tối đan xen. Mức độ cản sáng của rèm sẽ tùy thuộc vào chất liệu, độ dày của vải rèm..</span></p>
          <p className='text-lg text-black mt-3'> Khả năng cản sáng của rèm cầu vồng Hàn Quốc đạt từ <span className='font-bold'>70% – 100%</span> tùy theo khu vực lắp đặt, nhu cầu sử dụng.</p>
          <p className='text-lg text-black mt-3'>-<span className='font-bold'>Rèm loại cản sáng 70% – 90%</span>thường được lắp đặt trong phòng khách, văn phòng… Khi kéo rèm xuống, không gian vẫn có ánh sáng nhẹ, không bị quá tối mà vẫn đảm bảo sự kín đáo, ngăn nhiệt điều hòa hiệu quả.</p>
          <img src='https://blinds.vn/wp-content/uploads/2021/07/re%CC%80m-to%CC%82%CC%89-ong-ma%CC%80u-va%CC%80ng-lu%CC%81a-500x500.jpeg' alt={'img-card'} className='w-[75%] md:w-[55%] h-[200px] sm:h-[250px] md:h-[250px] lg:h-[350px] xl:h-[550px] mx-auto object-fill mt-5' />
          <p className='text-base text-black mt-3 italic text-center'>Rèm cầu vồng cản sáng nhẹ cho phòng bếp. Rèm cản sáng tương đối có mức giá rẻ hơn..</p>
          <p className='text-lg text-black mt-3'>-<span className='font-bold'>Rèm loại cản sáng tuyệt đối</span>(blackout) phù hợp lắp đặt trong phòng ngủ. Đảm bảo chất lượng giấc ngủ tốt nhất.</p>
          <img src='https://blinds.vn/wp-content/uploads/2021/07/re%CC%80m-to%CC%82%CC%89-ong-ma%CC%80u-va%CC%80ng-lu%CC%81a-500x500.jpeg' alt={'img-card'} className='w-[75%] md:w-[55%] h-[200px] sm:h-[250px] md:h-[250px] lg:h-[350px] xl:h-[550px] mx-auto object-fill mt-5' />
          <p className='text-base text-black mt-3 italic text-center'>Rèm cản sáng tuyệt đối được nhiều khách hàng lựa chọn.</p>

          {/*  */}
          <h2 className='text-xl text-black font-medium mt-5'>Ưu điểm rèm cầu vồng Hàn Quốc</h2>
          <p className='text-lg text-black mt-3'><span className='font-bold'>Rèm loại cản sáng tuyệt đối</span>có giá thành cao hơn so với các loại rèm khác như: Rèm cuốn trơn, rèm sáo nhôm, rèm lá dọc…Đây là một trong những dòng sản phẩm rèm cửa ở phân khúc cao cấp.</p>
          <p className='text-lg text-black mt-3'>Tuy nhiên đây vẫn là sản phẩm được nhiều khách hàng lựa chọn bởi nhiều ưu điểm vượt trội như:</p>
          <p className='text-lg text-black mt-3'>-<span className='font-bold'>Thiết kế với hai lớp vải đan xen. </span>1 lớp vải cản sáng và 1 lớp vải voan lấy sáng. Có thể điều chỉnh ánh sáng linh động theo nhu cầu sử dụng.</p>
          <p className='text-lg text-black mt-3'>-<span className='font-bold'>Sản phẩm cao cấp có xuất xứ Hàn Quốc. </span>Thiết kế sang trọng, độc đáo. Nhiều mẫu màu, nhiều sắc độ. Đáp ứng yêu cầu thẩm mỹ trong mọi không gian.</p>
          <p className='text-lg text-black mt-3'>-<span className='font-bold'>Hệ phụ kiện đồng màu cao cấp.</span>.</p>
          <p className='text-lg text-black mt-3'>-<span className='font-bold'>Độ bền cao. </span>Vải chống bám bụi, chống phai màu theo thời gian.</p>

          {/*  */}
          <h2 className='text-xl text-black font-medium mt-5'>Lắp rèm cửa giá rẻ tại Vách ngăn tổ ông</h2>
          <p className='text-lg text-[#3980F1]'>Vách ngăn tổ ong <span className='text-black'>là đơn vị chuyên nhập khẩu và phân phối các loại rèm cửa. Bên cạnh Rèm cầu vồng chúng tôi còn có rất đa dạng sản phẩm để khách hàng có thể lựa chọn như: Rèm cuốn văn phòng giá rẻ, rèm sáo (sáo gỗ, sáo nhôm), rèm lá dọc,…</span></p>
          <p className='text-lg text-black mt-3'><span className='font-bold'>Đảm bảo chất lượng với mức TỐT NHẤT </span>Hỗ trợ giảm giá từ 15% – 30%.</p>
          <p className='text-lg text-black mt-3'>-<span className='font-bold'>Với khách hàng đại lý</span>, chúng đôi có nhiều ưu đãi, chính sách hỗ trợ cụ thể.</p>
          <p className='text-lg text-black mt-3'>-<span className='font-bold'>Khảo sát mang mẫu tận nơi MIỄN PHÍ.</span>Khách hàng kiểm tra chất lượng sản phẩm, nghiệm thu công trình trước khi thanh toán.</p>
          <p className='text-lg text-black mt-3'>-<span className='font-bold'>Hệ phụ kiện đồng màu cao cấp.</span>.</p>
          <ListItem />
        </div>
      </div>
    </div>
  )
}

export default DetailsListing
