import { Route, Routes } from "react-router-dom";
import Home from "../pages/user/home";
import Pagetest from "../pages/pagetest";
import DetailsListing from "../pages/detailsListing";
import IntroduceUs from "../pages/introduceUs";
import Policy from "../pages/policy";
import Contact from "../pages/contact";
import NewsDetails from "../pages/newsDetails";
import News from "../pages/news";
import VachNganToOng from "../pages/vach-ngan-to-ong";
import RemCuon from "../pages/rem-cuon";
import RemVai from "../pages/rem-vai";
import RemCauVong from "../pages/rem-cau-vong";
import CuaLuoiXep from "../pages/cua-luoi-xep";
import CuaLuoiChongMuoi from "../pages/cua-luoi-chong-muoi";


export default function User() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chi-tiet-san-pham" element={<DetailsListing />} />
      <Route path="/gioi-thieu" element={<IntroduceUs />} />
      <Route path="/tin-tuc-chi-tiet" element={<NewsDetails />} />
      <Route path="/tin-tuc" element={<News />} />
      <Route path="/chinh-sach-van-chuyen" element={<Policy />} />
      <Route path="/lien-he" element={<Contact />} />
      <Route path="/vach-ngan-to-ong" element={<VachNganToOng />} />
      <Route path="/rem-cuon" element={<RemCuon />} />
      <Route path="/rem-vai" element={<RemVai />} />
      <Route path="/rem-cau-vong" element={<RemCauVong />} />
      <Route path="/cua-luoi-xep" element={<CuaLuoiXep />} />
      <Route path="/cua-luoi-chong-muoi" element={<CuaLuoiChongMuoi />} />
      
      {/* 
      1)Page list sản phẩm gợi ý https://fivess.vn/san-pham/cua-tu-dong-%E2%80%93-001.html&643e090c5950ca4ceff52254
      
      */}
    </Routes>
  );
};