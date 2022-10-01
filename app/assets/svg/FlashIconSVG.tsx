/*eslint-disable*/
import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {

}

const FlashIconSVG: FC<Props> = () => {
    return (
        <Svg
        width={16}
        height={21}
        viewBox="0 0 16 21"
        fill="none"
      >
        <Path
          d="M3.294 12l-1.767 7.068c-.187.746.736 1.256 1.269.701L14.79 7.27A.75.75 0 0014.25 6H9.79L11.462.987A.75.75 0 0010.75 0h-7a.75.75 0 00-.721.544l-3 10.5A.75.75 0 00.75 12h2.544z"
          fill="#fff"
        />
      </Svg>
    );
}

export default FlashIconSVG;
