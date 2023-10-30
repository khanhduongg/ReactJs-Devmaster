import React, { useEffect } from "react";
import ListProductHearts from "./ListProductHearts";
import { context } from "../context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
function IconHeart() {
  const { responseData } = useContext(context);
  const { data, setData } = useContext(context);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("wishlistItems")));
  }, [responseData]);
  return (
    <>
      <div className="icon icon-wishlist">
        <Link to={"/danh-sach-yeu-thich"}>
          <i className="fa-regular fa-heart" />
        </Link>
        {data === null || data?.length === 0 ? (
          <div className="box box-wishlist">
            <div className="box__empty">
              <p className="box__title">Danh sách yêu thích trống !</p>
              <a href="/san-pham">
                <div className="check__btn">Xem thêm sản phẩm</div>
              </a>
            </div>
          </div>
        ) : (
          <div className="box box-wishlist">
            <p className="box__title">Danh sách yêu thích </p>
            {data?.slice(0, 4).map((item) => (
              <ListProductHearts wishlist={item} key={item.id} />
            ))}
            <div className="check">
            <p className="box__title py-1 my-1">
              Danh sách {data?.length} sản phẩm{" "}
            </p>
              <Link className="check__btn nav-link" to={"/danh-sach-yeu-thich"}>
                Xem chi tiết
              </Link>
            </div>
          </div>
        )}
        <div className="qty"> {data?.length}</div>
      </div>
    </>
  );
}

export default IconHeart;
