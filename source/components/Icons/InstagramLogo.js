// Core
import React, { Component } from "react";

// Imstruments
import { withSvg } from "../../instruments/withSvg";

//remove to HOC folder
class InstagramLogo extends Component {
  render() {
    const { hover, disabled, color1, color2, color3 } = this.props;
    const fill = disabled ? color3 : hover ? color2 : color1;

    return (
      <g fill={fill}>
        <path d="M15.3,11.32 C14.7722708,10.5663332 13.9100607,10.1174981 12.99,10.1174981 C12.0699393,10.1174981 11.2077292,10.5663332 10.68,11.32 C10.3310448,11.8109066 10.1424294,12.3977102 10.14,13 C10.14,14.5740115 11.4159885,15.8499999 12.99,15.8499999 C14.5640115,15.8499999 15.84,14.5740115 15.84,13 C15.8375706,12.3977102 15.6489552,11.8109066 15.3,11.32 Z" />
        <path d="M17.09,11.34 C17.3171443,11.8634612 17.4296627,12.4294627 17.42,13 C17.42,15.4466214 15.4366214,17.43 12.99,17.43 C10.5433786,17.43 8.56,15.4466214 8.56,13 C8.54894702,12.4325683 8.66155427,11.869532 8.89,11.35 L6.39,11.35 L6.39,18 C6.43576145,18.8661414 7.13335431,19.5550685 8,19.59 L18,19.59 C18.8588477,19.5451003 19.5451003,18.8588477 19.59,18 L19.59,11.34 L17.09,11.34 Z" />
        <polygon points="18.84 6.76 16.45 6.76 16.45 9.51 19.18 9.51 19.18 7.11 19.18 6.74" />
        <path d="M19.46,7.28306304e-16 L6.52,7.28306304e-16 C2.92138684,0.00550668626 0.00550668626,2.92138684 0,6.52 L0,19.52 C0.0274315433,23.1029825 2.93691658,25.9946179 6.52,26 L19.52,26 C23.1107807,25.9725091 26.0056043,23.0508815 26,19.46 L26,6.52 C25.9780675,2.92042909 23.0596212,0.0109076877 19.46,7.28306304e-16 Z M21,11.32 L21,18 C21,19.6568542 19.6568542,21 18,21 L8,21 C6.34314575,21 5,19.6568542 5,18 L5,8 C5,6.34314575 6.34314575,5 8,5 L18,5 C19.6568542,5 21,6.34314575 21,8 L21,11.3 L21,11.32 Z" />
      </g>
    );
  }
}

export default withSvg({
  viewBoxWidth: 26,
  viewBoxHeight: 26,
  width: 26,
  height: 26
})(InstagramLogo);
