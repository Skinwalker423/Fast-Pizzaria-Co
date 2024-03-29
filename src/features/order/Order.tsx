// Test ID: IIDSAT

import {
  FetcherWithComponents,
  useFetcher,
  useLoaderData,
} from "react-router-dom";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { MenuData, OrderItem as OrderItemProps } from "../../types";
import OrderItem from "./OrderItem";
import { useEffect } from "react";
import UpdateOrder from "./UpdateOrder";

function Order() {
  const order = useLoaderData() as OrderItemProps;
  const fetcher: FetcherWithComponents<MenuData> = useFetcher({
    key: "menu",
  });

  console.log("order", order);

  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle") {
      fetcher.load("/menu");
    }
  }, [fetcher]);

  console.log("fetcher", fetcher.data);
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap justify-between gap-3">
        <h2 className="text-xl font-semibold">Order #{id} Status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold tracking-wide text-red-100">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold tracking-wide text-green-100">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-3 bg-stone-200 px-5 py-6">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y divide-stone-200 border-b border-t">
        {cart.map((item) => {
          return (
            <OrderItem
              item={item}
              key={item.pizzaId}
              ingredients={
                fetcher.data?.find((menuItem) => menuItem.id === item.pizzaId)
                  ?.ingredients
              }
              isLoadingIngredients={fetcher.state === "loading"}
            />
          );
        })}
      </ul>

      <div className="space-y-2 bg-stone-200 px-5 py-6">
        <p className="text-sm font-medium text-stone-600">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-600">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="text-lg font-semibold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      {!priority && status === "preparing" && <UpdateOrder order={order} />}
    </div>
  );
}

export default Order;
