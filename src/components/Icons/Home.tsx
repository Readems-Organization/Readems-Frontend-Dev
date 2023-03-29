import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  viewBoxWidth?: string;
  viewBoxHeight?: string;
  fill?: string;
}

const Home: FC<Props> = ({
  width = '16',
  height = '16',
  viewBoxWidth = '16',
  viewBoxHeight = '16',
  fill = '#213245',
}): ReactElement => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.10514 13.8476V11.8032C6.10512 11.2831 6.52907 10.8606 7.05433 10.8571H8.97838C9.50615 10.8571 9.934 11.2807 9.934 11.8032V11.8032V13.854C9.93387 14.2955 10.2898 14.6564 10.7357 14.6667H12.0184C13.2971 14.6667 14.3337 13.6405 14.3337 12.3746V12.3746V6.5586C14.3268 6.06059 14.0906 5.59294 13.6923 5.28873L9.30547 1.79024C8.53695 1.18108 7.44446 1.18108 6.67594 1.79024L2.30834 5.29508C1.9085 5.59806 1.67192 6.06648 1.66699 6.56495V12.3746C1.66699 13.6405 2.70358 14.6667 3.98227 14.6667H5.26497C5.72189 14.6667 6.09231 14.3 6.09231 13.8476V13.8476"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Home;
