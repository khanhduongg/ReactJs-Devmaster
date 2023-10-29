import React from "react";

function Catefory() {
  return (
    <>
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

    </>
  );
}

export default Catefory;
