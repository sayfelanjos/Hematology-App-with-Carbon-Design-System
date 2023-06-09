import React from "react";
import "../../sass/themes/_themes.scss";
import { useThemeStore } from "globalStore/globalStore";

const StatisticsIcon = () => {
  const { theme } = useThemeStore();

  return (
    <svg
      name={"statistics-icon"}
      id={`${theme.color}-theme-statistics-icon`}
      width="37"
      height="36"
      viewBox="0 0 37 36"
      fill=""
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.9834 23.625V32.625H7.1084V23.625H5.9834ZM3.7334 23.0625C3.7334 22.1305 4.48892 21.375 5.4209 21.375H7.6709C8.60288 21.375 9.3584 22.1305 9.3584 23.0625V33.1875C9.3584 34.1195 8.60288 34.875 7.6709 34.875H5.4209C4.48892 34.875 3.7334 34.1195 3.7334 33.1875V23.0625Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.7334 16.875V32.625H22.8584V16.875H21.7334ZM19.4834 16.3125C19.4834 15.3805 20.2389 14.625 21.1709 14.625H23.4209C24.3529 14.625 25.1084 15.3805 25.1084 16.3125V33.1875C25.1084 34.1195 24.3529 34.875 23.4209 34.875H21.1709C20.2389 34.875 19.4834 34.1195 19.4834 33.1875V16.3125Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.6084 9V32.625H30.7334V9H29.6084ZM27.3584 8.4375C27.3584 7.50552 28.1139 6.75 29.0459 6.75H31.2959C32.2279 6.75 32.9834 7.50552 32.9834 8.4375V33.1875C32.9834 34.1195 32.2279 34.875 31.2959 34.875H29.0459C28.1139 34.875 27.3584 34.1195 27.3584 33.1875V8.4375Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.8584 3.375V32.625H14.9834V3.375H13.8584ZM11.6084 2.8125C11.6084 1.88052 12.3639 1.125 13.2959 1.125H15.5459C16.4779 1.125 17.2334 1.88052 17.2334 2.8125V33.1875C17.2334 34.1195 16.4779 34.875 15.5459 34.875H13.2959C12.3639 34.875 11.6084 34.1195 11.6084 33.1875V2.8125Z"
      />
    </svg>
  );
};
export default StatisticsIcon;
