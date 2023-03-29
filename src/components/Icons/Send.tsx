import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const Send: FC<Props> = ({
  width = '25',
  height = '24',
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
      <g clipPath="url(#clip0)">
        <path
          d="M1.34259 22.5335L5.34259 12.0001L1.34259 1.4668L22.4093 11.8668L1.34259 22.5335Z"
          stroke={fill}
          strokeWidth="1.05"
          strokeMiterlimit="10"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.00927734)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Send;
