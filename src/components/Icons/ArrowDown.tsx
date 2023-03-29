import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const ArrowDown: FC<Props> = ({ width = '18', height = '18', fill = 'white' }): ReactElement => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.03704 5L9 10.963L14.963 5L16 6.03704L9 13.037L2 6.03704L3.03704 5Z"
        fill={fill}
      />
    </svg>
  );
};
export default ArrowDown;
