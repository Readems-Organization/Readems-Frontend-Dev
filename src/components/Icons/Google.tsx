import React, { type FC, type ReactElement } from 'react';

interface Props {
  width?: string;
  height?: string;
  fill?: string;
}

const Google: FC<Props> = ({
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
        d="M16.3541 7.53113H15.75V7.5H9V10.5H13.2386C12.6203 12.2464 10.9586 13.5 9 13.5C6.51487 13.5 4.5 11.4851 4.5 9C4.5 6.51488 6.51487 4.5 9 4.5C10.1471 4.5 11.1908 4.93275 11.9854 5.63963L14.1068 3.51825C12.7673 2.26988 10.9755 1.5 9 1.5C4.85812 1.5 1.5 4.85813 1.5 9C1.5 13.1419 4.85812 16.5 9 16.5C13.1419 16.5 16.5 13.1419 16.5 9C16.5 8.49713 16.4482 8.00625 16.3541 7.53113Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.36475 5.50913L4.82887 7.31625C5.49562 5.6655 7.11037 4.5 9 4.5C10.1471 4.5 11.1907 4.93275 11.9854 5.63963L14.1067 3.51825C12.7672 2.26988 10.9755 1.5 9 1.5C6.11925 1.5 3.621 3.12638 2.36475 5.50913Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.00012 16.4998C10.9374 16.4998 12.6976 15.7584 14.0285 14.5528L11.7072 12.5885C10.9289 13.1804 9.97791 13.5005 9.00012 13.4998C7.04937 13.4998 5.39299 12.2559 4.76899 10.52L2.32324 12.4044C3.56449 14.8333 6.08524 16.4998 9.00012 16.4998Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.3541 7.53113H15.75V7.5H9V10.5H13.2386C12.9428 11.3312 12.41 12.0574 11.706 12.5891L11.7071 12.5884L14.0284 14.5526C13.8641 14.7019 16.5 12.75 16.5 9C16.5 8.49713 16.4482 8.00625 16.3541 7.53113Z"
        fill={fill}
      />
    </svg>
  );
};

export default Google;
