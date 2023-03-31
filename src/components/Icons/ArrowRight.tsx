import React, { type FC, type ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const ArrowRight: FC<Props> = ({
  width = '13',
  height = '14',
  fill = '#778594',
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
        d="M5.65674 1L11.3136 6.65685L5.65674 12.3137"
        stroke={fill}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default ArrowRight;
