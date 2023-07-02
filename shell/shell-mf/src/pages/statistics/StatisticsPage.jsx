import React, { Suspense } from "react";
const StatisticsModule =
  process.env.NODE_ENV === "devolopment"
    ? () => null
    : React.lazy(() =>
        import("statistics/StatisticsModule").then((res) => ({
          default: res.StatisticsModule,
        })),
      );
const StatisticsPage = () => {
  return (
    // TODO: need to put fallback component
    <Suspense>
      <StatisticsModule />
    </Suspense>
  );
};

export default StatisticsPage;
