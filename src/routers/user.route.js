import { Route, Routes } from "react-router-dom";
import Home from "../pages/user/home";
import Pagetest from "../pages/pagetest";
import DetailsListing from "../pages/detailsListing";
import IntroduceUs from "../pages/introduceUs";
import Policy from "../pages/policy";
import Contact from "../pages/contact";
import NewsDetails from "../pages/newsDetails";
import News from "../pages/news";
import VachNganToOng from "../pages/dynamicPage";
import Product from "../pages/product";
import CheckoutItem from "../pages/checkOutItem";
import DynamicPage from "../pages/dynamicPage";


export default function User() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chi-tiet-san-pham/:id" element={<DetailsListing />} />
      <Route path="/gioi-thieu" element={<IntroduceUs />} />
      <Route path="/tin-tuc-chi-tiet" element={<NewsDetails />} />
      <Route path="/tin-tuc" element={<News />} />
      <Route path="/chinh-sach-van-chuyen" element={<Policy />} />
      <Route path="/lien-he" element={<Contact />} />
      <Route path="/:path/:id" element={<DynamicPage />} />
      <Route path="/xem-gio-hang" element={<CheckoutItem />} />

      <Route path="/test-product" element={<Product />} />
      
      
    </Routes>
  );
};