import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../store/thunkFunction";
import { AppDispatch, RootState } from "../../store";
import { CartProps } from "../../utils/types";

const CartPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userData = useSelector((state: RootState) => state.user?.userData);

  useEffect(() => {
    const cartItemIds: string[] = [];

    if (userData?.cart && userData.cart.length > 0) {
      userData.cart.forEach((item: CartProps) => {
        cartItemIds.push(item.id);
      });

      const body = {
        cartItemIds,
        userCart: userData.cart,
      };

      dispatch(getCartItems(body));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default CartPage;
