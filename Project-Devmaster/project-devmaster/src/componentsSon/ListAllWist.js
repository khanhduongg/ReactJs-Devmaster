import React, { useContext, useEffect, useState } from "react";
import { context } from "../context/Context";
import axios from "../Api/api-local";
import Product from "./Product";
import ListArrange from "./ListArrange";
import UpPage from "./UpPage";
function ListAllWish() {
  let iconProduct = "fa-solid fa-heart-crack";
  const [sort, setSort] = useState("");
  const { data, setData } = useContext(context);
  useEffect(() => {
    const getData = async () => {
      let res = await axios.get("wishlist");
      setData(res.data);
    };
    getData();
  }, []);
  const [filters, setFilters] = useState();
  const handleFilter = (filter) => {
    setFilters(filter);
  };
  // const [number,setNumber]=useState(4)
  return (
    <>
      <div className="box-content all-product wishlist-product">
        <div className="all-product__item ">
          <div className="all-product__item--title">
            <h4>Danh sách yêu thích ({data?.length}sản phẩm) </h4>
            <ListArrange
            product={data}
            sort={sort}
            setSort={setSort}
            onFilter={handleFilter}
             />
          </div>
          <div className="row">
            {filters === undefined
              ? data
                  ?.slice(0,data?.length)
                  .map((item) => (
                    <Product
                      iconProduct={iconProduct}
                      product={item}
                      key={item.id}
                    />
                  ))
              : filters
                  .slice(0,data?.length)
                  .map((item) => (
                    <Product
                      iconProduct={iconProduct}
                      product={item}
                      key={item.id}
                    />
                  ))}
          </div>
        </div>
        {/* <>
        <UpPage setNumber={setNumber} products={data} />
        </> */}
      </div>
    </>
  );
}

export default ListAllWish;
