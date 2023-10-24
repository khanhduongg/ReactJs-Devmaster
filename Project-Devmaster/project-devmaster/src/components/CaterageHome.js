
import Banner from "../componentsSon/Banner ";
import About from "../componentsSon/About";
import News from "../componentsSon/News";
function CaterageHome() {
  return (
    <div>
      <>
        <Banner />
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
        <About/>
        <News/>
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
