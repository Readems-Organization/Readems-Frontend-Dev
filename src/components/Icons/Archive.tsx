import React, { type FC, type ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const Archive: FC<Props> = ({
  width = '18',
  height = '18',
  fill = 'white',
}): ReactElement => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.30365 10.9535V0H9.3637V10.9535L12.6986 7.61855L13.4491 8.368L8.83261 12.9824L4.21823 8.368L4.96875 7.61855L8.30365 10.9535ZM3.77376 16.94H13.9354L16.9607 13.9146L17.7091 14.6651L14.3742 18H3.3349L0 14.6651L0.749452 13.9146L3.77376 16.94Z"
        fill={fill}
      />
    </svg>
  );
};

export default Archive;
