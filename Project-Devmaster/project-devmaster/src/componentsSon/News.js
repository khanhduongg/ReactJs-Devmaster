import React, { useEffect, useState } from "react";
import axios from "../Api/api-local";

function News() {
  const [listNews, setListNews] = useState([]);
  useEffect(() => {
    // get api banner
    const getAllData = async () => {
      let res = await axios.get("news");
      setListNews(res.data);
    };
    getAllData();
  }, []);
  return (
    <div>
      <section id="home-news">
        <div className="d-flex mt-auto justify-content-center pt-5">
          <h2 className="text-dark">
            Tin Tức
            <hr />
          </h2>
        </div>
        <div className="home-news w-75">
          <div className="row ">
            <div className="col-md-7 home-news__effect">
              <a href="/tin-tuc/cach-chon-sofa-cho-phong-khach-them-sang-trong">
                <div className="thumbnail box">
                  <div className="img img-main">
                    <img src={`http://cutuananh.devmaster.vn/${listNews[0]?.image}`} alt="" />
                  </div>
                  <div className="main-content">
                    <p>{listNews[0]?.title}</p>
                    <p>{listNews[0]?.content}</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-5">
              <div className="thumbnail">
                <div className="home-news__effect">
                  {listNews.slice(1, 4).map((item) => (
                    <div className="row fix-height" key={item.id}>
                      <div className="col-md-5 box">
                        <div className="img img-list">
                          <a href="/tin-tuc/trang-tri-phong-khach-cho-them-nang-dong">
                            <img alt='tin tuc'
                             src={`http://cutuananh.devmaster.vn/${item.image}`}
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <p className="title">
                          <a href="/tin-tuc/trang-tri-phong-khach-cho-them-nang-dong">
                            {item.title}
                          </a>
                        </p>
                        <p className="desc">{item.content} </p>
                      </div>
                    </div>
                  ))}
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
    </div>
  );
}

export default News;
