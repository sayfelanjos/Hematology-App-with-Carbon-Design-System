import React, { Suspense } from "react";
const InvoicesModule =
  process.env.NODE_ENV === "devolopment"
    ? () => null
    : React.lazy(() =>
        import("invoices/InvoicesModule").then((res) => ({
          default: res.InvoicesModule,
        })),
      );
const InvoicesPage = () => {
  return (
    // TODO: need to put fallback component
    <Suspense>
      <InvoicesModule />
    </Suspense>
  );
};

export default InvoicesPage;
