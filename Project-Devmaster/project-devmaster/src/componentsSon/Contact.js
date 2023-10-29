import React from "react";

function Contact() {
  return (
    <>
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
  );
}

export default Contact;
