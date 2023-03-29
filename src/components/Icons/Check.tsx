import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const Check: FC<Props> = ({
  width = '18',
  height = '18',
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.1347 3.00061L6.55157 13.5825L0.865302 7.89624L0 8.76154L6.55157 15.3131L17.9988 3.86469L17.1347 3.00061Z"
        fill={fill}
      />
    </svg>
  );
};

export default Check;
