import axios from "../Api/api-local";
import React, { useEffect, useState } from "react";

function About() {
  const [listAbouts, setListAbouts] = useState([]);
  useEffect(() => {
    // get api banner
    const getAllData = async () => {
      let res = await axios.get("dataAboutUs");
      setListAbouts(res.data);
    };
    getAllData();
  }, []);
  return (
    <div>
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
                    Nội thất của <span>Hoàng Hoan</span> chúng tôi tự hào là đức
                    con tinh thần ra đời sau hơn 30 năm hoạt động trong lĩnh vực
                    kinh doanh đồ gỗ nội thất với thương hiệu ĐỒ GỖ HOÀNG HOAN
                    nổi tiếng.
                  </p>
                  <p className="">
                    Tài nguyên của chúng tôi là đội ngũ kiến trúc sư tốt nghiệp
                    ĐH Kiên Trúc Hà Nội với nhiều năm kinh nghiệm, luôn tràn đầy
                    nhiệt huyết và sức sáng tạo của tuổi trẻ. Thế mạnh của chúng
                    tôi là sở hữu xưởng nội thất hơn 10.000m2 tại Hà Nội sản
                    xuất đa dạng các sản phẩm với giá cả luôn cạnh tranh.
                  </p>
                </div>
                <div className="list-img ">
                  <ul className="d-flex justify-content-between">
                    {listAbouts.slice(0, 4).map((item) => {
                      return (
                        <li>
                          <div className="box">
                            <img
                              src={`http://cutuananh.devmaster.vn/${item.image}`}
                              alt="về chúng tôi 1"
                            />
                            <div className="see-more">
                              <a className="btn text-white" href="/">
                                Xem thêm&nbsp;
                              </a>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                ;
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
    </div>
  );
}

export default About;
