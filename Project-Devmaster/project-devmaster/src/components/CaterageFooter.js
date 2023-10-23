import React from 'react'

function CaterageFooter() {
  return (
        <>
  <footer id="footer">
    <div className="allInfo">
      <div className="info">
        <h5>thông tin chung</h5>
        <p>công ty tnhh hoàng hoan</p>
        <ul className="list-footer">
          <li>
            <div className="icon">
              <i className="fa-solid fa-phone" />
            </div>
            <div>
              <a href="tel:0999.999.999">0999.999.999</a>
            </div>
          </li>
          <li>
            <div className="icon">
              <i className="fa-regular fa-envelope" />
            </div>
            <div>
              <a href="mailto:cskh@hoanghoan.vn">cskh@hoanghoan.vn</a>
            </div>
          </li>
          <li>
            <div className="icon">
              <i className="fa-solid fa-location-dot" />
            </div>
            <div>Số 1 Nguyễn Trãi, Thanh Xuân, Hà Nội</div>
          </li>
        </ul>
      </div>
      <div className="info">
        <h5>về chúng tôi</h5>
        <ul className="list-footer">
          <li>
            <a href="/">Giới thiệu</a>
          </li>
          <li>
            <a href="/">Sản phẩm</a>
          </li>
          <li>
            <a href="/">Tin tức</a>
          </li>
          <li>
            <a href="/">Đối tác</a>
          </li>
          <li>
            <a href="/">Liên hệ</a>
          </li>
        </ul>
      </div>
      <div className="info">
        <h5>kết nối với chúng tôi</h5>
        <div className="social">
          <a href="/">
            <img src="../img/icon_fb_pro.jpg" alt="social images" />
          </a>
          <a href="/">
            <img src="../img/icon_zalo_pro.jpg" alt="social images" />
          </a>
          <a href="/">
            <img src="../img/icon_email_pro.jpg" alt="social images" />
          </a>
        </div>
        <img src="../img/chatluong.jpg" alt="chứng nhận" />
      </div>
    </div>
  </footer>
  <div className="credit">
    Created by{" "}
    <span style={{ color: "rgb(150, 92, 20)" }}>Nguyen Dinh Khanh Duong </span>{" "}
    | Học viên:{" "}
    <a
      href="https://www.facebook.com/VCNDevmaster/"
      title="Viện Công Nghệ Và Đào Tạo Devmaster"
    >
      Devmaster Academy
    </a>
  </div>
</>

  )
}

export default CaterageFooter