import React, { type FC, type ReactElement } from 'react';

interface DesktopProps {
  width?: string;
  height?: string;
}

export const Desktop: FC<DesktopProps> = ({ width, height }): ReactElement => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.00006 19.5H27V2.99999H3.00006V19.5ZM16.5 22.5V25.5H22.5V28.4999H7.50005V25.5H13.5V22.5H1.48806C1.29109 22.4988 1.09628 22.4587 0.914816 22.3821C0.733347 22.3055 0.56878 22.1939 0.430547 22.0535C0.292314 21.9132 0.183133 21.747 0.109262 21.5644C0.0353905 21.3818 -0.00171872 21.1864 6.11188e-05 20.9895V1.5105C6.11188e-05 0.676499 0.68256 0 1.48806 0H28.512C29.334 0 30 0.673499 30 1.5105V20.9895C30 21.8235 29.3175 22.5 28.512 22.5H16.5Z"
        fill="url(#paint0_linear_4994_37065)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4994_37065"
          x1="33.4511"
          y1="1.54934e-07"
          x2="-1.64883"
          y2="22.95"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#36C5F0" />
          <stop offset="1" stopColor="#ECB22E" />
        </linearGradient>
      </defs>
    </svg>
  );
};

Desktop.defaultProps = {
  width: '30',
  height: '29',
};

export default Desktop;
