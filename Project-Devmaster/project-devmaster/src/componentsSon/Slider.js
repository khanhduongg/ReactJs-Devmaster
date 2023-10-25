import React from 'react'

function Slider() {
  return (
    <div><div id="demo" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src="../img/san-pham/trai-nghiem1.jpg"
          alt=""
          width={1100}
          height={500}
        />
        <div className="carousel-btn">
          <button className="btn-buy">Mua ngay</button>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#demo" data-slide="prev">
      <span className="carousel-control-prev-icon" />
    </a>
    <a className="carousel-control-next" href="#demo" data-slide="next">
      <span className="carousel-control-next-icon" />
    </a>
  </div>
  </div>
  )
}

export default Slider