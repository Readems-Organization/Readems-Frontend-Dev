import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  viewBoxWidth?: string;
  viewBoxHeight?: string;
  fill?: string;
}

const Add: FC<Props> = ({
  width = '18',
  height = '18',
  viewBoxWidth = '18',
  viewBoxHeight = '18',
  fill = 'white',
}): ReactElement => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.25 8.25H2V9.75H8.25V16H9.75V9.75H16V8.25H9.75V2H8.25V8.25Z"
        fill={fill}
      />
    </svg>
  );
};

export default Add;
