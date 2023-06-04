import React from "react";
import "../../sass/themes/_themes.scss";
import { useThemeStore } from "globalStore/globalStore";

const CustomersAndSuppliersIcon = () => {
  const { theme } = useThemeStore();
  return (
    <svg
      name={"customers-and-suppliers-icon"}
      id={`${theme.color}-theme-customers-and-suppliers-icon`}
      width="50"
      height="50"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.603 11.6711L13.7373 11.8521C13.8071 12.0564 13.8898 12.2561 13.9848 12.45L13.3125 13.375C13.2424 13.4715 13.2091 13.5898 13.2186 13.7086C13.228 13.8274 13.2796 13.939 13.364 14.0232L14.7746 15.4292C14.8587 15.5129 14.9698 15.5641 15.0881 15.5735C15.2064 15.5829 15.3242 15.5499 15.4204 15.4805L16.3503 14.8088C16.5458 14.9042 16.7471 14.9871 16.9531 15.0569L17.1342 16.186C17.153 16.3034 17.213 16.4103 17.3035 16.4875C17.394 16.5646 17.509 16.607 17.6279 16.6069H19.623C19.7419 16.607 19.8569 16.5646 19.9474 16.4875C20.0379 16.4103 20.0979 16.3034 20.1167 16.186L20.2978 15.0569C20.5037 14.9871 20.7049 14.9043 20.9004 14.8091L21.8303 15.4805C21.9265 15.55 22.0443 15.5831 22.1626 15.5737C22.2809 15.5643 22.392 15.5131 22.476 15.4292L23.8867 14.0232C23.9711 13.939 24.0226 13.8274 24.0321 13.7086C24.0415 13.5898 24.0082 13.4715 23.9382 13.375L23.2658 12.45C23.3609 12.256 23.4436 12.0563 23.5136 11.8521L24.6479 11.6711C24.7654 11.6525 24.8724 11.5925 24.9496 11.502C25.0269 11.4115 25.0693 11.2965 25.0693 11.1775V9.18921C25.0693 9.07024 25.0269 8.95517 24.9496 8.86468C24.8724 8.77419 24.7654 8.71423 24.6479 8.69556L23.5136 8.51465C23.4436 8.31032 23.3609 8.11055 23.2661 7.91651L23.9382 6.99146C24.0082 6.89499 24.0415 6.77669 24.0321 6.65785C24.0227 6.53901 23.9711 6.42745 23.8867 6.34326L22.4761 4.9375C22.392 4.85368 22.2809 4.80249 22.1626 4.79309C22.0443 4.7837 21.9265 4.81671 21.8303 4.88623L20.9004 5.55762C20.705 5.46232 20.5037 5.37948 20.2978 5.30957L20.1167 4.18067C20.0979 4.06325 20.0379 3.95638 19.9474 3.87923C19.857 3.80209 19.7419 3.75973 19.623 3.75977H17.6279C17.509 3.75973 17.394 3.80209 17.3035 3.87923C17.213 3.95638 17.153 4.06325 17.1343 4.18067L16.9531 5.30957C16.7473 5.37948 16.546 5.46232 16.3506 5.55762L15.4204 4.88626C15.3242 4.81681 15.2064 4.78384 15.0881 4.79323C14.9698 4.80262 14.8587 4.85377 14.7746 4.93753L13.364 6.34326C13.2796 6.42745 13.228 6.53901 13.2186 6.65785C13.2091 6.77668 13.2424 6.89499 13.3125 6.99145L13.9849 7.9165C13.8898 8.11051 13.8071 8.31028 13.7371 8.51465L12.603 8.69555C12.4855 8.71422 12.3785 8.77419 12.3013 8.86468C12.2241 8.95516 12.1816 9.07024 12.1816 9.18921V11.1775C12.1816 11.2965 12.2241 11.4115 12.3013 11.502C12.3785 11.5925 12.4855 11.6525 12.603 11.6711ZM13.1816 9.61572L14.2019 9.45313C14.2969 9.43808 14.3855 9.39593 14.4571 9.33175C14.5288 9.26757 14.5803 9.18409 14.6057 9.09131C14.6519 8.57388 15.2822 8.06696 14.9776 7.58131L14.373 6.74976L15.1797 5.9458L16.0166 6.55005C16.5113 6.84964 17.0076 6.22475 17.5286 6.17905C17.6214 6.1538 17.705 6.10231 17.7693 6.03075C17.8336 5.9592 17.8759 5.87063 17.8911 5.77564L18.0542 4.75976H19.1968L19.3598 5.77563C19.4719 6.31989 20.3086 6.2574 20.6935 6.57892C20.7769 6.62647 20.8722 6.64903 20.9681 6.64391C21.0639 6.63879 21.1563 6.6062 21.2341 6.55004L22.071 5.94579L22.8777 6.74976L22.2734 7.5813C21.9695 8.06504 22.5983 8.5743 22.6449 9.09133C22.6703 9.1841 22.7219 9.26757 22.7935 9.33175C22.8652 9.39592 22.9538 9.43807 23.0488 9.45313L24.0693 9.61597V10.7508L23.0488 10.9136C22.9538 10.9286 22.8652 10.9708 22.7936 11.035C22.7219 11.0992 22.6704 11.1826 22.645 11.2754C22.5988 11.7933 21.9687 12.2997 22.2733 12.7854L22.8777 13.6167L22.071 14.4209L21.2341 13.8164C20.7393 13.5172 20.2439 14.1417 19.7226 14.1872C19.6297 14.2124 19.5461 14.2639 19.4817 14.3355C19.4174 14.4071 19.375 14.4958 19.3598 14.5908L19.1968 15.6069H18.0542L17.8911 14.5908C17.8759 14.4958 17.8336 14.4071 17.7692 14.3355C17.7049 14.2639 17.6212 14.2124 17.5283 14.1873C17.0064 14.1425 16.5124 13.5158 16.0166 13.8163L15.1797 14.4209L14.373 13.6169L14.9775 12.7854C15.2814 12.3018 14.6524 11.7909 14.6058 11.2754C14.5804 11.1826 14.5288 11.0991 14.4572 11.0349C14.3855 10.9708 14.2969 10.9286 14.2019 10.9136L13.1816 10.751L13.1816 9.61572Z"
        strokeWidth="1.0"
      />
      <path
        d="M18.625 13.2841C19.4483 13.2843 20.2381 12.958 20.8211 12.3767C21.4041 11.7954 21.7327 11.0066 21.7349 10.1833C21.5891 6.079 15.6603 6.08006 15.5151 10.1833C15.5173 11.0066 15.8459 11.7954 16.4289 12.3767C17.0119 12.958 17.8017 13.2843 18.625 13.2841ZM18.625 8.08218C19.1798 8.08592 19.7105 8.30891 20.1015 8.70252C20.4924 9.09612 20.7119 9.62838 20.7119 10.1832C20.7118 10.7379 20.4924 11.2702 20.1015 11.6638C19.7105 12.0574 19.1797 12.2804 18.625 12.2841C18.0699 12.2808 17.5388 12.0579 17.1475 11.6643C16.7562 11.2706 16.5365 10.7381 16.5365 10.1831C16.5365 9.62805 16.7562 9.09556 17.1475 8.70192C17.5388 8.30828 18.07 8.08549 18.625 8.08218Z"
        strokeWidth="1.0"
      />
      <path
        d="M29.3723 19.6235C28.1111 19.0339 26.6739 18.9417 25.3477 19.3652L22.2071 20.3694C22.0564 19.8831 21.7546 19.4574 21.3454 19.1544C20.9362 18.8514 20.4411 18.6868 19.9319 18.6846H18.2012C17.6029 18.6842 17.0146 18.5311 16.4919 18.2398L14.6025 17.186C13.9531 16.8244 13.2221 16.6343 12.4788 16.6338H7.6194V16.0591C7.61893 15.6212 7.44478 15.2013 7.13515 14.8916C6.82553 14.582 6.4057 14.4078 5.96779 14.4072H4.01029C3.57233 14.4077 3.15244 14.5819 2.84276 14.8916C2.53307 15.2012 2.35888 15.6211 2.3584 16.0591V25.4739C2.35887 25.9118 2.53305 26.3317 2.84273 26.6414C3.15241 26.9511 3.5723 27.1253 4.01025 27.1258H5.96775C6.40568 27.1252 6.82551 26.951 7.13515 26.6413C7.44479 26.3317 7.61894 25.9118 7.6194 25.4739V25.0365L16.3542 28.0251C16.8621 28.1976 17.3993 28.2666 17.9343 28.228C18.4692 28.1893 18.991 28.0439 19.4687 27.8003L29.4258 22.6934C29.7076 22.5453 29.9428 22.3218 30.105 22.0479C30.2673 21.7739 30.3503 21.4603 30.3447 21.142C30.3392 20.8236 30.2453 20.5131 30.0736 20.245C29.9019 19.9769 29.6591 19.7617 29.3723 19.6235ZM6.6194 25.4739C6.61924 25.6467 6.55055 25.8124 6.42839 25.9346C6.30622 26.0568 6.14057 26.1255 5.96777 26.1258H4.01027C3.83745 26.1255 3.67176 26.0568 3.54956 25.9346C3.42735 25.8124 3.35861 25.6467 3.3584 25.4739V16.0591C3.35861 15.8863 3.42736 15.7206 3.54956 15.5984C3.67176 15.4762 3.83744 15.4074 4.01025 15.4072H5.96775C6.14055 15.4074 6.30621 15.4762 6.42837 15.5984C6.55054 15.7206 6.61924 15.8863 6.6194 16.0591V25.4739ZM28.9709 21.803L19.0127 26.9104C18.6545 27.0929 18.2634 27.2018 17.8625 27.2308C17.4616 27.2597 17.0589 27.2082 16.6782 27.0791L7.6194 23.9795V17.6338H12.4788C13.0516 17.6342 13.6149 17.7807 14.1153 18.0596C15.2796 18.6871 16.8189 19.7735 18.2012 19.6845L19.9319 19.6846C20.3003 19.6906 20.6516 19.8412 20.91 20.1039C21.1684 20.3666 21.3132 20.7203 21.3132 21.0888C21.3132 21.4572 21.1684 21.8109 20.91 22.0736C20.6516 22.3363 20.3003 22.4869 19.9319 22.4929H13.3069C13.1743 22.4929 13.0471 22.5456 12.9533 22.6394C12.8596 22.7331 12.8069 22.8603 12.8069 22.9929C12.8069 23.1255 12.8596 23.2527 12.9533 23.3465C13.0471 23.4402 13.1743 23.4929 13.3069 23.4929H19.9319C20.5147 23.4904 21.0765 23.2755 21.5122 22.8884C21.9478 22.5013 22.2274 21.9687 22.2985 21.3903L25.6516 20.3181C26.5119 19.9713 29.283 19.9692 29.3585 21.1704C29.36 21.3016 29.3244 21.4306 29.2559 21.5425C29.1873 21.6544 29.0886 21.7447 28.9709 21.803Z"
        strokeWidth="1.0"
      />
    </svg>
  );
};

export default CustomersAndSuppliersIcon;
