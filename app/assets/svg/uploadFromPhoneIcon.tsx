import React, {FC} from "react";
import Svg, {ClipPath, Defs, G, Path} from "react-native-svg";

const UploadFromPhoneIcon: FC = () => {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
        >
            <G clipPath="url(#clip0_536_53)" fill="#fff">
                <Path
                    d="M20.933 0H3.067A3.07 3.07 0 000 3.067v17.866A3.07 3.07 0 003.067 24h17.866A3.07 3.07 0 0024 20.933V3.067A3.07 3.07 0 0020.933 0zm1.654 20.933c0 .912-.742 1.654-1.654 1.654H3.067a1.655 1.655 0 01-1.653-1.654v-2.578l4.652-3.959a.457.457 0 01.59-.003l2.914 2.42a.707.707 0 00.951-.044l6.925-6.936a.453.453 0 01.348-.133c.075.004.22.03.331.168l4.462 5.494v5.572zm0-7.814l-3.364-4.142a1.874 1.874 0 00-2.777-.143l-6.47 6.48-2.418-2.009a1.868 1.868 0 00-2.408.015l-3.736 3.179V3.067c0-.912.741-1.653 1.653-1.653h17.866c.912 0 1.654.741 1.654 1.653v10.052z"/>
                <Path
                    d="M7.555 2.953a3.412 3.412 0 00-3.409 3.409A3.412 3.412 0 007.555 9.77a3.412 3.412 0 003.408-3.408 3.412 3.412 0 00-3.408-3.409zm0 5.403c-1.1 0-1.995-.894-1.995-1.994s.895-1.995 1.995-1.995 1.995.895 1.995 1.995-.895 1.994-1.995 1.994z"/>
            </G>
            <Defs>
                <ClipPath id="clip0_536_53">
                    <Path fill="#fff" d="M0 0H24V24H0z"/>
                </ClipPath>
            </Defs>
        </Svg>
    );
}

export default UploadFromPhoneIcon;