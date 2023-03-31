import React, { type FC, type ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const ArrowLeft: FC<Props> = ({
  width = '14',
  height = '13',
  fill = 'white',
}): ReactElement => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.65674 1L1.99988 6.65685L7.65674 12.3137"
        stroke="#B5BBC1"
        strokeWidth="1.5"
        fill={fill}
      />
    </svg>
  );
};

export default ArrowLeft;
