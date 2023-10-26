import axios from "../Api/api-local";
import React, { useEffect, useState } from "react";
import Product from "../componentsSon/Product";
import listNameProducts from "../data/listNameProducts";
import Slider from "../componentsSon/Slider";
function Products() {
  const [listProducts, setListProducts] = useState([]);
  const [iconProduct, setIconProduct] = useState("fa-regular fa-heart");
  useEffect(() => {
    // get api banner
    const getAllData = async () => {
      let res = await axios.get("products");
      setListProducts(res.data);
    };
    getAllData();
  }, []);
  const elementProducts = listNameProducts.map((item, index) => {
    return (
      <div className="all-product__item">
        <div className="all-product__item--title">
          <h4>{Object.values(item)}</h4>
          <a className="see-all" href="/san-pham/phong-khach">
            Xem tất cả
          </a>
        </div>
        <div className="row">
          {listProducts
            .filter((x) => x.category === item)
            .slice(0, 4)
            .map((product) => (
              <Product
                iconProduct={iconProduct}
                product={product}
                key={product.id}
              />
            ))}
        </div>
      </div>
    );
  });
  return (
    <div>
      <section>
        <Slider />
        <div className="box-content all-product">{elementProducts}</div>
      </section>
    </div>
  );
}

export default Products;
