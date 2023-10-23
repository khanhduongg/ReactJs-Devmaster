import React from "react";

function CaterageHome() {
  return (
    <div>
      <>
        <section id="section" className="">
          <div className="section-banner">
            <div className="section-banner__content">
              <h1>
                thế giới nội thất số 1 việt nam <br />
                <span>HOÀNG HOAN</span>
              </h1>
              <p>
                Sứ mệnh của chúng tôi là kết hợp hài hòa giữa ý tưởng và <br />{" "}
                mong muốn của khách hàng, đem lại những phút giây thư <br />{" "}
                giãn tuyệt vời bên gia đình và những người thân yêu.
              </p>
              <a className="section-banner__btn text-none" href="/lien-he">
                liên hệ ngay
              </a>
            </div>
          </div>
        </section>
        <section id="section_catefory">
          <div className="section-catefory">
            <div className="list-category d-flex w-75 ">
              <div className="row">
                <div className="col-md-3">
                  <a href="/san-pham/phong-khach">
                    <img src="../img/p-khach.jpg" alt="" />
                    <p>Phòng khách</p>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="/san-pham/phong-ngu">
                    <img src="../img/p-ngu.jpg" alt="" />
                    <p>Phòng ngủ</p>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="/san-pham/phong-bep">
                    <img src="../img/p-bep.jpg" alt="" />
                    <p>Phòng bếp</p>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="/san-pham/phong-tam">
                    <img src="../img/p-tam.jpg" alt="" />
                    <p>Phòng tắm</p>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="/san-pham/tre-em">
                    <img src="../img/p-tre-em.jpg" alt="" />
                    <p>Trẻ em</p>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="/san-pham/van-phong">
                    <img src="../img/p-vanphong.jpg" alt="" />
                    <p>Văn phòng</p>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="/san-pham/cau-thang">
                    <img src="../img/p-cauthang.jpg" alt="" />
                    <p>Cầu thang</p>
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="/san-pham/do-trang-tri">
                    <img src="../img/p-trangtri.jpg" alt="" />
                    <p>Đồ trang trí</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-product d-flex mt-auto justify-content-center  ">
            <h2>
              sản phẩm nổi bật
              <hr />
            </h2>
          </div>
        </section>
        <section id="home-aboutUs">
          <div className="d-flex mt-auto justify-content-center pt-5">
            <h2 className="text-white">
              về chúng tôi
              <hr />
            </h2>
          </div>
          <div className="home-aboutUs__content h-100">
            <div className="" style={{ margin: "0 12rem" }}>
              <div className="row ">
                <div
                  className="col-md-6 "
                  style={{ padding: "0.2rem 0.4rem 1rem 0.6rem" }}
                >
                  <img
                    src="../img/ve-chung-toi.jpg"
                    alt="về chúng tôi"
                    className="h-100 w-100 "
                  />
                </div>
                <div className="col-md-6">
                  <div className="mb-4">
                    <p className="">
                      nội thất <span>hoàng hoan</span>
                      <br />
                      uy tín song hành chất lượng
                    </p>
                    <p className="">
                      Nội thất của <span>Hoàng Hoan</span> chúng tôi tự hào là
                      đức con tinh thần ra đời sau hơn 30 năm hoạt động trong
                      lĩnh vực kinh doanh đồ gỗ nội thất với thương hiệu ĐỒ GỖ
                      HOÀNG HOAN nổi tiếng.
                    </p>
                    <p className="">
                      Tài nguyên của chúng tôi là đội ngũ kiến trúc sư tốt
                      nghiệp ĐH Kiên Trúc Hà Nội với nhiều năm kinh nghiệm, luôn
                      tràn đầy nhiệt huyết và sức sáng tạo của tuổi trẻ. Thế
                      mạnh của chúng tôi là sở hữu xưởng nội thất hơn 10.000m2
                      tại Hà Nội sản xuất đa dạng các sản phẩm với giá cả luôn
                      cạnh tranh.
                    </p>
                  </div>
                  <div className="list-img ">
                    <ul className="d-flex justify-content-between">
                      <li>
                        <div className="box">
                          <img
                            src="../img/ve-chung-toi-1.jpg"
                            alt="về chúng tôi 1"
                          />
                          <div className="see-more">
                            <a className="btn text-white" href="/">
                              Xem thêm&nbsp;
                              <i
                                className=" text-white fa fa-angle-right"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="box">
                          <img
                            src="../img/ve-chung-toi-2.jpg"
                            alt="về chúng tôi 1"
                          />
                          <div className="see-more">
                            <a className="btn text-white" href="/">
                              Xem thêm&nbsp;
                              <i
                                className=" text-white fa fa-angle-right"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="box">
                          <img
                            src="../img/ve-chung-toi-3.jpg"
                            alt="về chúng tôi 1"
                          />
                          <div className="see-more">
                            <a className="btn text-white" href="/">
                              Xem thêm&nbsp;
                              <i
                                className=" text-white fa fa-angle-right"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="box">
                          <img
                            src="../img/ve-chung-toi-4.jpg"
                            alt="về chúng tôi 1"
                          />
                          <div className="see-more">
                            <a className="btn text-white" href="/">
                              Xem thêm&nbsp;
                              <i
                                className=" text-white fa fa-angle-right"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-aboutUs__content ">
            <div className="d-flex mt-auto justify-content-center pt-5">
              <h2 className="text-white">
                tại sao nên chọn hoàng hoan ?
                <hr />
              </h2>
            </div>
            <div className="w-75" style={{ margin: "0 12rem" }}>
              <div className="row">
                <div className="col-md-6">
                  <div className="aboutUs-policy__item d-flex">
                    <div className="img">
                      <img src="../img/chon-1.jpg" alt="" />
                    </div>
                    <div className="content">
                      <p className="title">chính sách giá</p>
                      <p className="desc">
                        Tốt nhất và công khai giá trên Website
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="aboutUs-policy__item d-flex">
                    <div className="img">
                      <img src="../img/chon-2.jpg" alt="" />
                    </div>
                    <div className="content">
                      <p className="title">sản xuất</p>
                      <p className="desc">
                        Trực tiếp sản xuất bởi đội ngũ nhân viên hàng đầu
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="aboutUs-policy__item d-flex">
                    <div className="img">
                      <img src="../img/chon-3.jpg" alt="" />
                    </div>
                    <div className="content">
                      <p className="title">chất lượng</p>
                      <p className="desc">
                        Cam kết chất lượng sản phẩm và tiến độ thi công
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="aboutUs-policy__item d-flex">
                    <div className="img">
                      <img src="../img/chon-4.jpg" alt="" />
                    </div>
                    <div className="content">
                      <p className="title">bảo hành</p>
                      <p className="desc">
                        Dịch vụ bảo hành sản phẩm tốt nhất khu vực
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="home-news">
          <div className="d-flex mt-auto justify-content-center pt-5">
            <h2 className="text-dark">
              Tin Tức
              <hr />
            </h2>
          </div>
          <div className="home-news w-75 " style={{ margin: "0 12rem" }}>
            <div className="row ">
              <div className="col-md-7 home-news__effect">
                <a href="/tin-tuc/cach-chon-sofa-cho-phong-khach-them-sang-trong">
                  <div className="thumbnail box">
                    <div className="img img-main">
                      <img src="../img/01.jpg" alt="" />
                    </div>
                    <div className="main-content">
                      <p>Cách chọn Sofa cho phòng khách thêm sang trọng</p>
                      <p>
                        Không phải ai trong chúng ta cũng biết cách chọn màu
                        sofa cho phòng khách trở nên sang trọng và đẹp mắt hơn.
                        Tuy nhiên, đây là yếu tố quyết định phần lớn đến tính
                        thẩm mỹ của toàn bộ ngôi nhà.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-5">
                <div className="thumbnail">
                  <div className="home-news__effect">
                    <div className="row fix-height">
                      <div className="col-md-5 box">
                        <div className="img img-list">
                          <a href="/tin-tuc/trang-tri-phong-khach-cho-them-nang-dong">
                            <img src="../img/tintuc-2.jpg" alt="tin tức" />
                          </a>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <p className="title">
                          <a href="/tin-tuc/trang-tri-phong-khach-cho-them-nang-dong">
                            Trang trí phòng khách cho thêm năng động
                          </a>
                        </p>
                        <p className="desc">
                          Không cần quá đầu tư quá nhiều tiền vào những món đồ
                          sang trong cho việc trang trí phòng khách. Bạn vẫn có
                          thể sở hữu không gian phòng khách đẹp với những mẹo
                          không phải ai cũng sẵn sàng chỉ cho bạn.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="row fix-height">
                      <div className="col-md-5 box">
                        <div className="img img-list">
                          <a href="/tin-tuc/25-mau-giuong-ngu-hoc-keo-cho-phong-nho">
                            <img src="../img/tintuc-2.jpg" alt="tin tức" />
                          </a>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <p className="title">
                          <a href="/tin-tuc/25-mau-giuong-ngu-hoc-keo-cho-phong-nho">
                            25+ Mẫu giường ngủ hộc kéo cho phòng nhỏ
                          </a>
                        </p>
                        <p className="desc">
                          Sự thật là chúng ta dành hết 1/3 cuộc đời chỉ để ngủ,
                          vì thế việc tạo được một giấc ngủ ngon là một điều đặc
                          biệt quan trọng. Giường ngủ hộc kéo chính là giải pháp
                          thông minh vừa giúp đem lại một giấc ngủ sâu, vừa giúp
                          các gia đình giải quyết hiệu quả bài toán diện tích.
                        </p>
                      </div>
                    </div>
                    <div className="row fix-height">
                      <div className="col-md-5 box">
                        <div className="img img-list">
                          <a href="/tin-tuc/top-10-mau-noi-that-chung-cu-1-phong-ngu">
                            <img src="../img/tintuc-3.jpg" alt="tin tức" />
                          </a>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <p className="title">
                          <a href="/tin-tuc/top-10-mau-noi-that-chung-cu-1-phong-ngu">
                            Top 10 mẫu nội thất chung cư 1 phòng ngủ
                          </a>
                        </p>
                        <p className="desc">
                          Những căn hộ chung cư mini có diện tích nhỏ, ngày càng
                          trở nên ưa chuộng hơn trong cuộc sống hiện đại với
                          những ai có khoản kinh phí “hạn hẹp”. Thiết kế nội
                          thất chung cư một phòng ngủ chính là giải pháp tối ưu
                          nhất mang lại một không gian sống hoàn hảo và hiện
                          đại.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="readMore">
                    <a href="/tat-ca-tin-tuc">
                      Xem thêm
                      <i className="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="home-partner">
          <div className="d-flex mt-auto justify-content-center pt-5">
            <h2 className="text-dark">
              Đối tác
              <hr />
            </h2>
          </div>
          <div className="home-partner">
            <div
              className="slick-slider slider slick-initialized"
              style={{ overflow: "hidden" }}
              dir="ltr"
            >
              <button
                type="button"
                data-role="none"
                className="slick-arrow slick-prev"
                style={{ display: "block" }}
              >
                {" "}
                Previous
              </button>
              <div className="slick-list">
                <div
                  className="slick-trac d-flex align-items-center "
                  style={{
                    width: 4636,
                    opacity: 1,
                    transform: "translate3d(-1464px, 0px, 0px)",
                  }}
                >
                  <div
                    data-index={-5}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: 244 }}
                  >
                    <div>
                      <div
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img src="../img/dt-muongthanh.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={-4}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: 244 }}
                  >
                    <div>
                      <div
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img src="../img/dt-coffee-house.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={-3}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: 244 }}
                  >
                    <div>
                      <div
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img src="../img/dt-marvella.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={-2}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: 244 }}
                  >
                    <div>
                      <div
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img src="../img/dt-mellisa.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={-1}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: 244 }}
                  >
                    <div>
                      <div
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img src="../img/dt-sharaton.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={0}
                    className="slick-slide"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ outline: "none", width: 244 }}
                  >
                    <div>
                      <div
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img src="images/AnhCatTC/doi-tac/melissa.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={1}
                    className="slick-slide slick-active slick-current"
                    tabIndex={-1}
                    aria-hidden="false"
                    style={{ outline: "none", width: 244 }}
                  >
                    <div>
                      <div
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          src="images/AnhCatTC/doi-tac/muong-thanh.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={2}
                    className="slick-slide slick-active"
                    tabIndex={-1}
                    aria-hidden="false"
                    style={{ outline: "none", width: 244 }}
                  >
                    <div>
                      <div
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img src="../img/dt-muongthanh.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={3}
                    className="slick-slide slick-active"
                    tabIndex={-1}
                    aria-hidden="false"
                    style={{ outline: "none", width: 244 }}
                  >
                    <div>
                      <div
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img src="../img/dt-coffee-house.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={4}
                    className="slick-slide slick-active"
                    tabIndex={-1}
                    aria-hidden="false"
                    style={{ outline: "none", width: 244 }}
                  >
                    <div>
                      <div
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img src="../img/dt-marvella.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={5}
                    className="slick-slide slick-active"
                    tabIndex={-1}
                    aria-hidden="false"
                    style={{ outline: "none", width: 244 }}
                  >
                    <div>
                      <div
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img src="../img/dt-mellisa.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={6}
                    className="slick-slide"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ outline: "none", width: 244 }}
                  >
                    <div>
                      <div
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img src="../img/dt-sharaton.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={7}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: 244 }}
                  >
                    <div>
                      <div
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img src="images/AnhCatTC/doi-tac/melissa.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={8}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: 244 }}
                  >
                    <div>
                      <div
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          src="images/AnhCatTC/doi-tac/muong-thanh.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={9}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: 244 }}
                  >
                    <div>
                      <div
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img src="../img/dt-muongthanh.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={10}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: 244 }}
                  >
                    <div>
                      <div
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img src="../img/dt-coffee-house.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={11}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: 244 }}
                  >
                    <div>
                      <div
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img src="../img/dt-marvella.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={12}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: 244 }}
                  >
                    <div>
                      <div
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img src="../img/dt-mellisa.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={13}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: 244 }}
                  >
                    <div>
                      <div
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img src="../img/dt-sharaton.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                data-role="none"
                className="slick-arrow slick-next"
                style={{ display: "block" }}
              >
                Next
              </button>
            </div>
          </div>
        </section>
        <section id="home-contact">
          <div className="home-contact">
            <div className="row">
              <div className="col-md-6">
                <p className="home-contact__content">
                  Trải nghiệm dịch vụ <br />
                  <strong>cùng Hoàng Hoan ngay</strong>
                </p>
              </div>
              <div className="col-md-6">
                <form className="home-contact__form" action="">
                  <p>Thông tin liên hệ</p>
                  <input type="email" placeholder="Email / Số điện thoại" />
                  <button>Gửi</button>
                </form>
              </div>
            </div>
            <img
              className="image"
              src="../img/171159-81271_xxx_v1-copy.c3643d1d1b60e646bddb4ce6e36d496f.png"
              alt="liên hệ"
            />
          </div>
        </section>
      </>
    </div>
  );
}

export default CaterageHome;
