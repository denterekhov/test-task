// Core
import React, { Component } from "react";

// Imstruments
import { withSvg } from "../../instruments/withSvg";

//remove to HOC folder
class Logo extends Component {
  render() {
    const { hover, disabled, color1, color2, color3 } = this.props;
    const fill = disabled ? color3 : hover ? color1 : color1;

    return (
      <g fill={fill}>
        <path d="M38.35,7.09A4,4,0,0,1,41.21,8a3.44,3.44,0,0,1,1,2.62V17.7c0,.56.22.84.67.84h.77V19.9a2.6,2.6,0,0,1-1.3.29A2,2,0,0,1,41,19.77a2.11,2.11,0,0,1-.71-1.14H40.2a3.38,3.38,0,0,1-3.07,1.66,5.46,5.46,0,0,1-.83-.07,3.55,3.55,0,0,1-.86-.3,2.94,2.94,0,0,1-.82-.6A3,3,0,0,1,34,18.27a4.83,4.83,0,0,1-.22-1.53,4.42,4.42,0,0,1,.46-2.13,3.06,3.06,0,0,1,1.37-1.29,7,7,0,0,1,2-.63,15.9,15.9,0,0,1,2.57-.18V10.88a2.3,2.3,0,0,0-.43-1.51,1.94,1.94,0,0,0-1.56-.53,1.77,1.77,0,0,0-1.49.58,2.21,2.21,0,0,0-.46,1.41v.29H34.32a3.43,3.43,0,0,1,0-.53A3.16,3.16,0,0,1,35.4,8,4.48,4.48,0,0,1,38.35,7.09Zm1.85,8.33V14.26a8.12,8.12,0,0,0-3.24.5,1.84,1.84,0,0,0-1.08,1.86,2.1,2.1,0,0,0,.42,1.47,1.68,1.68,0,0,0,1.28.45,2.48,2.48,0,0,0,1.83-.83A3.17,3.17,0,0,0,40.2,15.42Z" />
        <path d="M47.26,18.54h-.12L46.87,20H45.38V2.65h2V8.58h.12a2.33,2.33,0,0,1,1-1.1,3.45,3.45,0,0,1,1.66-.39,3.11,3.11,0,0,1,2.72,1.65,9.33,9.33,0,0,1,1,4.92c0,4.42-1.31,6.63-3.91,6.63A2.94,2.94,0,0,1,47.26,18.54Zm4.6-4.4v-.91a7.53,7.53,0,0,0-.55-3.36,1.8,1.8,0,0,0-1.7-1q-2.27,0-2.26,4.49v.81q0,4.39,2.26,4.4a1.81,1.81,0,0,0,1.7-1A7.48,7.48,0,0,0,51.86,14.14Z" />
        <path d="M63.77,7.38v.91l-5.57,10h5.88V20H55.51v-.94l5.55-9.93H55.9V7.38Z" />
        <path d="M68.66,17.41V20h-2.4V17.41Z" />
        <path d="M75.55,7.09A4,4,0,0,1,78.41,8a3.44,3.44,0,0,1,1,2.62V17.7c0,.56.22.84.67.84h.77V19.9a2.6,2.6,0,0,1-1.3.29,2,2,0,0,1-1.28-.42,2.11,2.11,0,0,1-.71-1.14H77.4a3.38,3.38,0,0,1-3.07,1.66,5.46,5.46,0,0,1-.83-.07,3.76,3.76,0,0,1-.87-.3,3,3,0,0,1-.81-.6,2.89,2.89,0,0,1-.58-1.05A4.83,4.83,0,0,1,71,16.74a4.42,4.42,0,0,1,.46-2.13,3,3,0,0,1,1.37-1.29,7,7,0,0,1,2-.63,15.9,15.9,0,0,1,2.57-.18V10.88A2.3,2.3,0,0,0,77,9.37a1.94,1.94,0,0,0-1.56-.53,1.77,1.77,0,0,0-1.49.58,2.21,2.21,0,0,0-.46,1.41v.29H71.52a3.43,3.43,0,0,1,0-.53A3.16,3.16,0,0,1,72.6,8,4.47,4.47,0,0,1,75.55,7.09Zm1.85,8.33V14.26a8.12,8.12,0,0,0-3.24.5,1.84,1.84,0,0,0-1.08,1.86,2.1,2.1,0,0,0,.42,1.47,1.68,1.68,0,0,0,1.28.45,2.48,2.48,0,0,0,1.83-.83A3.22,3.22,0,0,0,77.4,15.42Z" />
        <path d="M89.88,5.34h1.73a3.33,3.33,0,0,1-.57,2A2.52,2.52,0,0,1,89.5,8.36a4.13,4.13,0,0,1,1.12,3,4.26,4.26,0,0,1-1.09,3.08,3.94,3.94,0,0,1-2.94,1.16H85.27a1.1,1.1,0,0,0-.81.33,1.1,1.1,0,0,0,0,1.59,1.07,1.07,0,0,0,.81.34h3.6a2.83,2.83,0,0,1,2.16.85,3,3,0,0,1,.82,2.1,3.58,3.58,0,0,1-1,2.57,3.63,3.63,0,0,1-2.73,1H84.58a3.06,3.06,0,0,1-2.31-.85,3,3,0,0,1-.81-2.15,3.11,3.11,0,0,1,.44-1.67,2.35,2.35,0,0,1,1.19-1,2.1,2.1,0,0,1-1-1.9,2.28,2.28,0,0,1,1.78-2.18,4,4,0,0,1-1.46-3.26,4.25,4.25,0,0,1,1.1-3.12,4,4,0,0,1,3-1.13,3.8,3.8,0,0,1,1.82.45A2.87,2.87,0,0,0,89.88,5.34ZM88.37,19.71H84.89a1.43,1.43,0,0,0-1.1.41,1.54,1.54,0,0,0-.37,1.06,1.49,1.49,0,0,0,.39,1.06,1.37,1.37,0,0,0,1.08.42h3.48a1.49,1.49,0,0,0,1.49-1.48,1.38,1.38,0,0,0-1.49-1.47Zm-.3-10.32a2,2,0,0,0-1.6-.67,1.87,1.87,0,0,0-1.58.7,3,3,0,0,0-.56,1.92,3,3,0,0,0,.56,1.94,1.9,1.9,0,0,0,1.58.67,2,2,0,0,0,1.6-.69,3,3,0,0,0,.56-1.92A3,3,0,0,0,88.07,9.39Z" />
        <path d="M97.85,7.09A3.63,3.63,0,0,1,101,8.49,7.85,7.85,0,0,1,102,13v1.24H95.16a6.2,6.2,0,0,0,.68,3.24,2.29,2.29,0,0,0,2.08,1,1.88,1.88,0,0,0,1.55-.77,3.33,3.33,0,0,0,.58-2.07h2a4.74,4.74,0,0,1-1.14,3.35,3.86,3.86,0,0,1-3,1.24,4.23,4.23,0,0,1-3.59-1.57,8.45,8.45,0,0,1-1.19-5,8.51,8.51,0,0,1,1.18-5A4.12,4.12,0,0,1,97.85,7.09Zm0,1.75a2.18,2.18,0,0,0-1.91.9,5.39,5.39,0,0,0-.76,2.77h4.76C99.94,10.06,99.24,8.84,97.85,8.84Z" />
        <path d="M109.41,7.09c2.08,0,3.13,1.27,3.13,3.81V20h-2V11.05a2.55,2.55,0,0,0-.46-1.72,1.69,1.69,0,0,0-1.32-.49,2,2,0,0,0-1.67.94,4.21,4.21,0,0,0-.68,2.52V20h-2V7.38H106l.26,1.46h.15A3.24,3.24,0,0,1,109.41,7.09Z" />
        <path d="M119.16,7.09a3.41,3.41,0,0,1,2.94,1.25,6.26,6.26,0,0,1,.92,3.72h-2a5.68,5.68,0,0,0-.39-2.46,1.47,1.47,0,0,0-1.43-.76q-2.26,0-2.26,4.39v.91q0,4.39,2.26,4.4a1.54,1.54,0,0,0,1.47-.8,5,5,0,0,0,.45-2.42H123a6.15,6.15,0,0,1-1,3.56,3.26,3.26,0,0,1-2.91,1.41,3.63,3.63,0,0,1-3.28-1.6,9.39,9.39,0,0,1-1-5,9.35,9.35,0,0,1,1-5A3.66,3.66,0,0,1,119.16,7.09Z" />
        <path d="M133.44,7.38l-3.22,12A11.19,11.19,0,0,1,128.64,23a3,3,0,0,1-2.5,1.33,4.57,4.57,0,0,1-1.41-.19V22.81h.69c1.27,0,2.1-.94,2.5-2.81L124.05,7.38h2.16L129,17.17h.09l2.36-9.79Z" />
        <path d="M10.71,16.45l1.3-2h0L20.26,1.87H3.77l3.86,5.9-1.29,2L0,0H24L12,18.42l-1.29-2Zm2.58-8.89-1.3,2h0L3.74,22.13H20.23l-3.86-5.9,1.29-2L24,24H0L12,5.59l1.29,2Z" />
      </g>
    );
  }
}

export default withSvg({
  viewBoxWidth: 133.44,
  viewBoxHeight: 24.37,
  width: 134,
  height: 24
})(Logo);
