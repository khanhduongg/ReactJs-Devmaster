import React from 'react'

function CaterageContact() {
  return (
    <div>
        <div className="box-content">
  <div className="banner-page">
    <div className="banner-page__image">
      <img src="../img/LIENHE.jpg" alt="đối tác" />
    </div>
    <div className="banner-page__title">
      <img src="../img/logo3.png" alt="logo" />
      <p>LIÊN HỆ</p>
    </div>
  </div>
  <div className="wrapper-box box-contact">
    <div className="row">
      <div className="col-md-6">
        <div className="thumbnail h-100">
          <img
            src="../img/sp2.jpg"
            alt="anh lien he"
            className="h-100 w-100"
          />
        </div>
      </div>
      <div className="col-md-6">
        <div className="thumbnail">
          <p>liên hệ với chúng tôi</p>
          <form className="form" id="form">
            <div className="form-contact">
              <input
                type="text"
                id="username"
                name="username"
                required=""
                defaultValue=""
              />
              <label htmlFor="username">Họ tên</label>
              <small />
            </div>
            <div className="form-contact">
              <input
                id="email"
                type="text"
                name="email"
                required=""
                defaultValue=""
              />
              <label htmlFor="email">Email</label>
              <small />
            </div>
            <div className="form-contact">
              <input
                id="phone"
                type="text"
                name="phone"
                required=""
                defaultValue=""
              />
              <label htmlFor="phone">Số điện thoại</label>
              <small />
            </div>
            <div className="form-contact">
              <input
                id="desc"
                type="text"
                name="description"
                required=""
                defaultValue=""
              />
              <label htmlFor="description">Nội dung</label>
              <small />
            </div>
            <button type="submit" className="box-contact__btn">
              Gửi
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default CaterageContact