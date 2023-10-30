import React, { useContext, useEffect, useState } from "react";
import { context } from "../context/Context";
import axios from "../Api/api-local";
import Product from "./Product";
function ListAllWish() {
  let [numberLoad, setNumberLoad] = useState(4);
  let iconProduct = "fa-solid fa-heart-crack";
  const { data, setData } = useContext(context);
  const handleShowAllProducts = () => {
    setNumberLoad(numberLoad + data.length);
    console.log(numberLoad);
  };
  useEffect(() => {
    const getData = async () => {
      let res = await axios.get("wishlist");
      setData(res.data);
    };
    getData();
  }, []);
  const [filters, setFilters] = useState();
  useEffect(() => {}, [numberLoad]);
  return (
    <>
      <div className="box-content all-product">
        <div className="all-product__item--title">
          <h4>Danh sách yêu thích ({data?.length}sản phẩm) </h4>
        </div>
        <div className="row">
          {filters === undefined
            ? data
                ?.slice(0, numberLoad)
                .map((item) => (
                  <Product
                    iconProduct={iconProduct}
                    filters={filters}
                    product={item}
                    key={item.id}
                  />
                ))
            : filters
                .slice(0, numberLoad)
                .map((item) => (
                  <Product
                    iconProduct={iconProduct}
                    filters={filters}
                    product={item}
                    key={item.id}
                  />
                ))}
        </div>
        <div className="load-more">
          <button
            type="button"
            className="load-more__btn"
            onClick={handleShowAllProducts}
          >
            Xem thêm
          </button>
        </div>
      </div>
    </>
  );
}

export default ListAllWish;
