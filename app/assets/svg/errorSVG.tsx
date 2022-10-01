import React, { FC } from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

const ErrorSVG: FC = () => {
    return (
        <Svg
        width="44"
        height="44"
        fill="none"
        viewBox="0 0 44 44"
      >
        <G fill="#00777E" clipPath="url(#clip0_500_381)">
          <Path d="M43.299 33.978L26.48 4.848A5.121 5.121 0 0022 2.263c-1.871 0-3.546.967-4.482 2.587L.701 33.978a5.121 5.121 0 000 5.174 5.121 5.121 0 004.481 2.587h33.636c1.87 0 3.546-.967 4.48-2.587a5.12 5.12 0 000-5.174zm-2.233 3.885a2.57 2.57 0 01-2.248 1.298H5.182a2.57 2.57 0 01-2.248-1.298 2.57 2.57 0 010-2.596l16.818-29.13A2.57 2.57 0 0122 4.84a2.57 2.57 0 012.248 1.298l16.818 29.129a2.57 2.57 0 010 2.596z"></Path>
          <Path d="M23.289 15.126H20.71v12.889h2.578V15.126zM22 30.593a1.72 1.72 0 00-1.719 1.718A1.72 1.72 0 0022 34.03a1.72 1.72 0 001.719-1.719A1.72 1.72 0 0022 30.593z"></Path>
        </G>
        <Defs>
          <ClipPath id="clip0_500_381">
            <Path fill="#fff" d="M0 0H44V44H0z"></Path>
          </ClipPath>
        </Defs>
      </Svg>
    );
};

export default ErrorSVG;