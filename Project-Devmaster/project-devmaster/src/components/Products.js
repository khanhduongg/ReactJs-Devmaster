import axios from "../Api/api-local";
import React, { useEffect, useState } from "react";
import Product from "../componentsSon/Product";
import slugify from "slugify";
import listNameProducts from "../data/listNameProducts";
import Slider from "../componentsSon/Slider";
import { Link } from "react-router-dom";
function Products() {
  const [listProducts, setListProducts] = useState([]);
  const [iconProduct] = useState("fa-regular fa-heart");
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
      <div className="all-product__item" key={index}>
        <div className="all-product__item--title">
          <h4>{Object.values(item)}</h4>
          <Link className="see-all" to={`/products/${slugify(item)}`}>
            Xem tất cả
          </Link>
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
