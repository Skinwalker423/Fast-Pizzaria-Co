// https://uibakery.io/regex-library/phone-number

import { Form, useActionData, useNavigation } from "react-router-dom";
import Button from "../../ui/Button";
import useUser from "../user/useUser";
import { useDispatch, useSelector } from "react-redux";
import { getCart, getCartTotalPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import { fetchAddress } from "../user/userSlice";
import { AppDispatch } from "../../app/store";

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);
  const dispatch = useDispatch<AppDispatch>();
  const totalCartPrice = useSelector(getCartTotalPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;
  const { username, address, status, position, error } = useUser();
  const navigation = useNavigation();
  const formErrors = useActionData() as any;

  const isSubmitting = navigation.state === "submitting";

  const isLoadingAddress = status === "loading";

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="mx-5 my-10 w-full">
      <h2 className="mb-8 text-xl font-semibold">
        Ready to order? Let&apos;s go!
      </h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 max-sm:w-80 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <div className="grow">
            <input
              className="form-input"
              type="text"
              name="customer"
              required
              defaultValue={username}
            />
          </div>
        </div>

        <div className={`mb-5 flex flex-col gap-2 sm:flex-row sm:items-center`}>
          <label className={`sm:basis-40 ${formErrors?.phone && "sm:mb-10"}`}>
            Phone number
          </label>
          <div className="grow max-sm:w-80">
            <input className="form-input" type="tel" name="phone" required />
            {formErrors?.phone && (
              <p className=" mt-2 w-fit rounded-full bg-red-100 px-4 py-2 text-xs text-red-700">
                {formErrors?.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="relative grow max-sm:w-80">
            <input
              disabled={isLoadingAddress}
              className="form-input"
              type="text"
              name="address"
              required
              defaultValue={address}
            />
            {status === "error" && (
              <p className=" mt-2 w-fit rounded-full bg-red-100 px-4 py-2 text-xs text-red-700">
                {error}
              </p>
            )}
            <Button
              disabled={
                isLoadingAddress || !!position.latitude || !!position.longitude
              }
              className="absolute right-0 top-0 z-10 rounded-l-none"
              size="medium"
              onClick={(e) => {
                e.preventDefault();
                dispatch(fetchAddress());
              }}
            >
              {isLoadingAddress ? "Loading..." : "Get Position"}
            </Button>
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-500 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2"
            // value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={`${position.latitude}, ${position.longitude}`}
          />
          <Button disabled={isSubmitting}>
            {isSubmitting
              ? "Creating order..."
              : `Order now for ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
