import { useDevice } from "../../hook/useDevice";
import { Divider, Row, Col } from "antd";
import React from "react";
import LogoFb from "../../assets/logo/icon_fb.png";
import LogoIn from "../../assets/logo/icon_in.png";
import LogoInsta from "../../assets/logo/icon_insta.png";
import LogoX from "../../assets/logo/icon_x.png";
import Logo from "../../assets/logo_vach_ngan.png";
// import LogoGlobal from "../../assets/icon/icon_global.png";
// import LogoQr from "../../assets/icon/icon_qr.png";
// import LogoPerson from "../../assets/icon/icon_person.png";
// import LogoLocal from "../../assets/icon/icon_local.png";
// import LogoPhone from "../../assets/icon/icon_phone.png";
// import LogoLetter from "../../assets/icon/icon_letter.png";
import { Link } from "react-router-dom";

const Footer = React.memo(() => {
  const { isMobile } = useDevice();
  return (
    <footer className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
      <div className="container mx-auto">
        <div className={isMobile ? "container px-8" : "container"}>
          <Row>
            <Col xs={24} md={24} lg={24} xl={24} xxl={6}>
              <div className="my-5 ">
                {/* logo */}
                <div className=" pt-10 text-center">
                  <Link href="/">
                    <div
                      className={
                        isMobile
                          ? "relative h-[40px] w-[40px] mx-auto"
                          : "mx-auto h-[50px] w-[50px] "
                      }
                    >
                      <img
                        src={Logo}
                        alt="Fail"
                        layout="fill"
                        className="object-cover object-left"
                      />
                    </div>
                  </Link>
                  <p className="inline-block align-middle font-montserrat text-2xl font-bold text-white	mt-5">
                    Vách ngăn Tổ ong Đà Nẵng
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={24} md={12}  lg={8} xl={8} xxl={6}>
              <div className={isMobile ? "relative" : "relative mt-8"}>
                <p className="font-cabiner mt-3 text-2xl font-semibold leading-[22px] tracking-wider text-white ">
                  SHOW ROOM
                </p>
                {/* text */}
                <div className="mt-5">
                  <ul>
                    <li className="">
                      <Link
                        href=""
                        className="cusor-pointer"
                      >
                        <p className="font-sansFrancisco  text-sm font-normal leading-6 tracking-[0.03em] text-white hover:text-[#dfbe12] transition duration-100 ">
                          Địa chỉ: 67 Tô Hiến Thành, Phước Mỹ, Đà Nẵng
                        </p>
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link
                        href=""
                        className="cusor-pointer"
                      >
                        <p className="font-sansFrancisco  text-sm font-normal leading-6 tracking-[0.03em] text-white hover:text-[#dfbe12] transition duration-100 ">
                          Số điện thoại: 0775.452.291
                        </p>
                      </Link>
                    </li>
                    <li className="mt-2">
                      <Link
                        href=""
                        className="cusor-pointer"
                      >
                        <p className="font-sansFrancisco  text-sm font-normal leading-6 tracking-[0.03em] text-white hover:text-[#dfbe12] transition duration-100 ">
                          Email: vachngantoongdanang@gmail.com
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xs={24} md={12}  lg={8} xl={8} xxl={6}>
              <div className={isMobile ? "relative mt-8" : "relative mt-8"}>
                <p className="font-cabiner mt-3 text-2xl font-semibold leading-[22px] tracking-wider text-white ">
                  CHÍNH SÁCH
                </p>
                {/* text */}
                <div className="mt-5">
                  <ul>
                    <li className="">
                      <a
                        href="/chinh-sach-van-chuyen"
                        className="cusor-pointer mt-3"
                      >
                        <p className="font-sansFrancisco  text-sm font-normal leading-6 tracking-[0.03em] text-white hover:text-[#dfbe12] transition duration-100 ">
                          Chính sách giao hàng
                        </p>
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="/chinh-sach-van-chuyen"
                        className="cusor-pointer mt-3"
                      >
                        <p className="font-sansFrancisco  text-sm font-normal leading-6 tracking-[0.03em] text-white hover:text-[#dfbe12] transition duration-100 ">
                          Chính sách vận chuyển hàng hoá
                        </p>
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="/chinh-sach-van-chuyen"
                        className="cusor-pointer mt-3"
                      >
                        <p className="font-sansFrancisco  text-sm font-normal leading-6 tracking-[0.03em] text-white hover:text-[#dfbe12] transition duration-100 ">
                          Chính sách hổ trợ lắp đặt
                        </p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

            </Col>
            {/*  */}
            <Col xs={24} md={24} lg={8} xl={8} xxl={6}>
              <div className={isMobile ? "relative my-8" : "relative my-8"}>
                <p className="font-cabiner mt-3 text-2xl font-semibold leading-[22px] tracking-wider text-white ">
                  THEO DÕI CHÚNG TÔI TRÊN
                </p>
                {/* video */}
                <div className="mt-5">
                  <iframe
                    width="250"
                    height="130"
                    src="https://www.youtube.com/embed/04Kf_0kppPM?si=eSbYhze3k0vYn9IC"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                {/* icon */}
                <div>
                  <div className="mt-[25px] flex">
                    <Link>
                      <img
                        className="rounded-[24px]  mr-2"
                        src={
                          LogoFb
                        }
                        alt="Picture of the author"
                        width={30}
                        height={30}
                      />
                    </Link>

                    <Link>
                      <img
                        className="rounded-[24px]  mr-2"
                        src={
                          LogoInsta
                        }
                        alt="Picture of the author"
                        width={30}
                        height={30}
                      />
                    </Link>

                    <Link>
                      <img
                        className="rounded-[24px]  mr-2"
                        src={
                          LogoIn
                        }
                        alt="Picture of the author"
                        width={30}
                        height={30}
                      />
                    </Link>

                    <Link>
                      <img
                        className="rounded-[24px]  mr-2"
                        src={
                          LogoX
                        }
                        alt="Picture of the author"
                        width={30}
                        height={30}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="h-[1px] bg-[#f5e4e4]"></div>
        <div className={isMobile ? "mb-5 py-2" : undefined}>
          <p className=" mb-1 mt-1 text-center font-sansFrancisco text-sm font-normal italic leading-6 tracking-[0.03em] text-white ">
            © Bản quyền thuộc về Vách ngăn Tổ ong Đà Nẵng
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
