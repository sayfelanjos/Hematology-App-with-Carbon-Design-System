import React, { Suspense } from "react";
const SuppliesModule =
  process.env.NODE_ENV === "devolopment"
    ? () => null
    : React.lazy(() =>
        import("orders/SuppliesModule").then((res) => ({
          default: res.SuppliesModule,
        })),
      );
const SuppliesPage = () => {
  return (
    // TODO: need to put fallback component
    <Suspense>
      <SuppliesModule />
    </Suspense>
  );
};

export default SuppliesPage;
