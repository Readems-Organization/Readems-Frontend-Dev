import React, { FC, ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const Insights: FC<Props> = ({
  width = '15',
  height = '16',
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.3331 0H11.3778C10.8868 0 10.6669 0.397688 10.6669 0.888739V15.9991H14.2218V0.888739C14.2218 0.397688 13.8232 0 13.3331 0ZM7.99992 5.33343H6.0438C5.55275 5.33343 5.33371 5.73111 5.33371 6.22217V15.9992H8.88866V6.22217C8.88866 5.73111 8.49097 5.33343 7.99992 5.33343ZM2.66712 10.6669H0.710992C0.219941 10.6669 0 11.0645 0 11.5556V16.0002H3.55586V11.5556C3.55586 11.0645 3.15817 10.6669 2.66712 10.6669Z"
        fill={fill}
      />
    </svg>
  );
};

export default Insights;
