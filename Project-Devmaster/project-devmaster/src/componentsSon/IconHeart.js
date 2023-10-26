import React, { useEffect, useState } from "react";
import ListProductHearts from "./ListProductHearts";

function IconHeart() {
  const { data, setData } = useState({});

  useEffect(() => {
    // Lấy dữ liệu từ Local Storage
    const storedData = localStorage.getItem("wishlistItems");
    setData(storedData);
  }, []);
  return (
    <>
      <div className="icon icon-wishlist">
        <a href="/danh-sach-yeu-thich">
          <i className="fa-regular fa-heart" />
        </a>
        {data === null || data !== null ? (
          <div className="box box-wishlist">
            <div className="box__empty">
              <p className="box__title">Danh sách yêu thích trống !</p>
              <a href="/san-pham">
                <div className="check__btn">Xem thêm sản phẩm</div>
              </a>
            </div>
          </div>
        ) : (
          <div className="box__empty">
            <p className="box__title">Danh sách yêu thích trống !</p>
            {data.map((item) => (
              <ListProductHearts wishlist={item} key={item.id} />
            ))}
          </div>
          //   <div className="check">
          //   <p>có {local.length} sản phẩm</p>
          //   <Link className="check__btn" to={"/danh-sach-yeu-thich"}>
          //     Xem chi tiết
          //   </Link>
          // </div>
        )}
      </div>
    </>
  );
}

export default IconHeart;
