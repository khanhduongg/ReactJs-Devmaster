import { useState } from "react";
import axios from "../Api/api-local";
import { toast } from "react-toastify";
function Product({ product, iconProduct }) {
  const [postData, setPostData] = useState({});
  const [responseData, setResponseData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  // Hàm gọi API POST
  const toggleFavorite = async (product) => {
    if (iconProduct == "fa-regular fa-heart") {
      try {
        setIsLoading(true);
        // Thực hiện yêu cầu POST
        const response = await axios.post("wishlist", product);
        // Lưu trạng thái POST thành côn
        setPostData(response.data);
        const data = response.data
        localStorage.setItem("wishlistItems", JSON.stringify(data));
        toast.success("thêm sp thành công");
      } catch (error) {
        toast.error(" Sản phẩm tồn tại ");

        // Xử lý lỗi POST
        console.error("aaa");
      } finally {
        setIsLoading(false);
      }
    } else {
      console.log(1);
    }
  };
  const hanldeToggleFavorite = (product) => {
    toggleFavorite(product);
  };

  return (
    <>
      {isLoading ? (
        <p>Đang tải...</p>
      ) : (
        <div className="col-md-3">
          <div className="product-card">
            <img
              src={`http://cutuananh.devmaster.vn/${product.image}`}
              alt="san pham"
              className="product-card__image "
            />
            <div className="product-card__content" key={product.id}>
              <span className="title">
                {product.product_name}
                <br />
              </span>
              <span
                style={{
                  display: "inline-block",
                  direction: "ltr",
                  touchAction: "none",
                }}
              >
                <span
                  className="react-simple-star-rating"
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    verticalAlign: "middle",
                    userSelect: "none",
                  }}
                >
                  <span
                    className="empty-icons"
                    style={{
                      display: "inline-block",
                      color: "rgb(204, 204, 204)",
                    }}
                  >
                    <svg
                      fill="currentColor"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      className="star-svg"
                    >
                      <path
                        fill="currentColor"
                        stroke="none"
                        strokeMiterlimit={10}
                        strokeWidth={0}
                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                      ></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      className="star-svg"
                    >
                      <path
                        fill="currentColor"
                        stroke="none"
                        strokeMiterlimit={10}
                        strokeWidth={0}
                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                      ></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      className="star-svg"
                    >
                      <path
                        fill="currentColor"
                        stroke="none"
                        strokeMiterlimit={10}
                        strokeWidth={0}
                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                      ></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      className="star-svg"
                    >
                      <path
                        fill="currentColor"
                        stroke="none"
                        strokeMiterlimit={10}
                        strokeWidth={0}
                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                      ></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      className="star-svg"
                    >
                      <path
                        fill="currentColor"
                        stroke="none"
                        strokeMiterlimit={10}
                        strokeWidth={0}
                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                      ></path>
                    </svg>
                  </span>
                  <span
                    className="filled-icons"
                    title="1 out of 5"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      color: "rgb(189, 148, 95)",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      display: "inline-block",
                      width: "0%",
                    }}
                  >
                    <svg
                      fill="currentColor"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      className="star-svg"
                    >
                      <path
                        fill="currentColor"
                        stroke="none"
                        strokeMiterlimit={10}
                        strokeWidth={0}
                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                      ></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      className="star-svg"
                    >
                      <path
                        fill="currentColor"
                        stroke="none"
                        strokeMiterlimit={10}
                        strokeWidth={0}
                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                      ></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      className="star-svg"
                    >
                      <path
                        fill="currentColor"
                        stroke="none"
                        strokeMiterlimit={10}
                        strokeWidth={0}
                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                      ></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      className="star-svg"
                    >
                      <path
                        fill="currentColor"
                        stroke="none"
                        strokeMiterlimit={10}
                        strokeWidth={0}
                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                      ></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      className="star-svg"
                    >
                      <path
                        fill="currentColor"
                        stroke="none"
                        strokeMiterlimit={10}
                        strokeWidth={0}
                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                      ></path>
                    </svg>
                  </span>
                </span>
              </span>
              <br />
              <span className="old-price">
                {Intl.NumberFormat("it-IT", {
                  style: "currency",
                  currency: "VND",
                }).format(product.old_price)}
              </span>
              <br />
              <span className="new-price">
                {Intl.NumberFormat("it-IT", {
                  style: "currency",
                  currency: "VND",
                }).format(product.price)}
              </span>
            </div>
            <div className="product-card__group-btn">
              <a>
                <>
                  <button className="btn">
                    <i className="fa-solid fa-magnifying-glass" />
                  </button>
                  <button
                    onClick={() => hanldeToggleFavorite(product)}
                    className="btn"
                  >
                    <i class={iconProduct} />
                  </button>
                </>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Product;
