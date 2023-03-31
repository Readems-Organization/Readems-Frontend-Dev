import React, { type FC, type ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const Refresh: FC<Props> = ({
  width = '24',
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0V1.41176C17.8391 1.41176 22.5882 6.16094 22.5882 12C22.5882 17.8391 17.8391 22.5882 12 22.5882C6.16094 22.5882 1.41176 17.8391 1.41176 12C1.41176 8.66118 2.99435 5.55106 5.64706 3.55341V8.47059H7.05882V1.41176H0V2.82353H4.28612C1.58824 5.09224 0 8.43388 0 12C0 18.6169 5.38306 24 12 24C18.6169 24 24 18.6169 24 12C24 5.38306 18.6169 0 12 0Z"
        fill={fill}
      />
    </svg>
  );
};

export default Refresh;
