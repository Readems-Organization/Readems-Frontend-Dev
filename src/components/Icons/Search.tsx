import React, { type FC, type ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const Search: FC<Props> = ({
  width = '18',
  height = '18',
  fill = 'white'
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
        d="M7.47597 13.8839C3.94197 13.8839 1.068 11.01 1.068 7.47597C1.068 3.94197 3.94197 1.068 7.47597 1.068C11.01 1.068 13.8839 3.94197 13.8839 7.47597C13.8839 11.01 11.01 13.8839 7.47597 13.8839ZM13.1193 12.3642C14.2577 11.0527 14.9519 9.34496 14.9519 7.47597C14.9519 3.35457 11.5974 0 7.47597 0C3.35457 0 0 3.35457 0 7.47597C0 11.5974 3.35457 14.9519 7.47597 14.9519C9.34496 14.9519 11.0527 14.2577 12.3642 13.1193L17.2439 18L18 17.2439L13.1193 12.3642Z"
        fill={fill}
      />
    </svg>
  );
};

Search.defaultProps = {
  width: '18',
  height: '18',
  fill: 'white',
};

export default Search;
