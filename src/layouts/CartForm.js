import { useState, useEffect } from "react";
import "../css/Base.css";

import CartProduct from "../components/CartProduct";
import Invoice from "../components/Invoice";

import EMPTY_CART from "../assets/images/empty-cart.png";
import { getCart } from "../services/user/UserServices";

const CartForm = () => {

  const _idUser = localStorage.getItem("_id");
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);
  const pricePerId = [];
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // const fetchData = async () => {
    //   await getCart(_idUser).then((res) => {
    //     setCart(res.cart);
    //     setProducts(res.products);
    //   });
    // };
    // fetchData();
    let currentProducts = JSON.parse(localStorage.getItem("cart"))
    setProducts(currentProducts);
    setCart({
      _idUser: _idUser,
      cartItem: currentProducts.map(
        (product) => ({_idSp: product._id, amount: 1})
      )
    });
  }, [_idUser]);

  if (products) {
    if (products.length > 0) {
      return (
        <div className="bg-white p-2">
          <div className="wrapper mt-[30px] mb-[30px] flex flex-col lg:flex-row justify-between gap-2">
            <div className="flex flex-col gap-y-[15px]">
              {products.map((item, index) => (
                <CartProduct
                  numPerId={cart.cartItem[index].amount}
                  key={item._id}
                  pricePerId={pricePerId}
                  totalPrice={totalPrice}
                  setTotalPrice={setTotalPrice}
                  cart={cart}
                  setCart={setCart}
                >
                  {item}
                </CartProduct>
              ))}
            </div>
            <Invoice
              pricePerId={pricePerId}
              totalPrice={totalPrice}
              cart={cart}
            ></Invoice>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col bg-white justify-center items-center p-[100px]">
          <img srcSet={`${EMPTY_CART} 1x`} className="w-[6rem] mb-10" alt="empty_cart" />
          <h1 className="font-secondaryFont font-bold text-[30px] text-[#ffcd00]">
            {_idUser ? "Giỏ hàng hiện trống!!!" : "Vui lòng đăng nhập!!!"}
          </h1>
        </div>
      );
    }
  } else {
    return (
      <div className="flex flex-col bg-white justify-center items-center p-[100px] gap-2">
        <img srcSet={`${EMPTY_CART} 1x`} className="w-[6rem] mb-10" alt="empty_cart" />
        <h1 className="font-secondaryFont font-bold text-xl lg:text-[30px] text-[#ffcd00] text-center">
          {_idUser ? "Giỏ hàng hiện trống!!!" : "Vui lòng đăng nhập!!!"}
        </h1>
      </div>
    );
  }
};

export default CartForm;
