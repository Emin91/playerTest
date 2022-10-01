/*eslint-disable*/
import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
    color?: string;
}

const BackArrowIcon: FC<Props> = ({ color }) => {
    return (
        <Svg
            width={8}
            height={14}
            viewBox="0 0 8 14"
            fill="none"
        >
            <Path
                d="M7 13L1 7l6-6"
                stroke={color ? color : "#FFFFFF"}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

export default BackArrowIcon;
