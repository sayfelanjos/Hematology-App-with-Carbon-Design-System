import React, { Suspense } from "react";
const OrdersModule =
  process.env.NODE_ENV === "devolopment"
    ? () => null
    : React.lazy(() =>
        import("orders/OrdersModule").then((res) => ({
          default: res.OrdersModule,
        })),
      );
const OrdersPage = () => {
  return (
    // TODO: need to put fallback component
    <Suspense>
      <OrdersModule />
    </Suspense>
  );
};
export default OrdersPage;
