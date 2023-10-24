import React from 'react'

function CaterageNews() {
  return (
    <div>
        <div className="box-news">
  <div id="map-link-bar">
    <ul>
      <li>
        <a href="/">Trang chủ </a>
      </li>
      <li>
      <i className="fa-solid fa-angle-right" style={{ color: "#15294c" }} />
      </li>
      <li>
        <a href="/tin-tuc">Tin tức</a>
      </li>
    </ul>
  </div>
  <div className="box-news__content">
    <div className="row">
      <div className="col-md-7 content-left">
        <a href="/tin-tuc/top-10-mau-noi-that-chung-cu-1-phong-ngu">
          <div className="thumbnail">
            <p className="content-left__title">
              Top 10 mẫu nội thất chung cư 1 phòng ngủ
            </p>
            <p>
              Những căn hộ chung cư mini có diện tích nhỏ, ngày càng trở nên ưa
              chuộng hơn trong cuộc sống hiện đại với những ai có khoản kinh phí
              “hạn hẹp”. Thiết kế nội thất chung cư một phòng ngủ chính là giải
              pháp tối ưu nhất mang lại một không gian sống hoàn hảo và hiện
              đại.
            </p>
            <img src="../img/05.jpg" alt="" />
          </div>
        </a>
      </div>
      <div className="col-md-5 content-right">
        <div className="thumbnail">
          <div className="row ">
            <div className="col-md-12">
              <h4>bài viết mới</h4>
            </div>
          </div>
          <div className="row fix-height">
            <div className="col-md-5">
              <a href="/tin-tuc/trang-tri-phong-khach-cho-them-nang-dong">
                <img src="../img/02.jpg" alt="tin tức" />
              </a>
            </div>
            <div className="col-md-7">
              <p className="content-right__title">
                <a href="/tin-tuc/trang-tri-phong-khach-cho-them-nang-dong">
                  Trang trí phòng khách cho thêm năng động
                </a>
              </p>
              <p>
                <i className="fa-regular fa-clock" />
                &nbsp;8/9/2022
              </p>
            </div>
          </div>
          <div className="row fix-height">
            <div className="col-md-5">
              <a href="/tin-tuc/cach-chon-sofa-cho-phong-khach-them-sang-trong">
                <img src="../img/01.jpg" alt="tin tức" />
              </a>
            </div>
            <div className="col-md-7">
              <p className="content-right__title">
                <a href="/tin-tuc/cach-chon-sofa-cho-phong-khach-them-sang-trong">
                  Cách chọn Sofa cho phòng khách thêm sang trọng
                </a>
              </p>
              <p>
                <i className="fa-regular fa-clock" />
                &nbsp;9/8/2022
              </p>
            </div>
          </div>
          <div className="row fix-height">
            <div className="col-md-5">
              <a href="/tin-tuc/25-mau-giuong-ngu-hoc-keo-cho-phong-nho">
                <img src="../img/06.jpg" alt="tin tức" />
              </a>
            </div>
            <div className="col-md-7">
              <p className="content-right__title">
                <a href="../img/06.jpg">
                  25+ Mẫu giường ngủ hộc kéo cho phòng nhỏ
                </a>
              </p>
              <p>
                <i className="fa-regular fa-clock" />
                &nbsp;27/4/2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default CaterageNews