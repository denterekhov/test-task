// Core
import React, { Component } from 'react';

// Instruments
import { withSvg } from '../../instruments/withSvg';

class FacebookLogo extends Component {
  render () {
    const { hover, disabled, color1, color2, color3 } = this.props;
    const fill = disabled ? color3 : hover ? color2 : color1;

    return (
      <g fill = { fill }>
        <path d = 'M19.48,0 L6.5,0 C2.90919977,0.0164928064 0.00546111025,2.92916605 0,6.52 L0,19.52 C0.0273388392,23.0952131 2.92471965,25.9836789 6.5,26 L19.5,26 C23.0908002,25.9835072 25.9945389,23.0708339 26,19.48 L26,6.48 C25.9725685,2.89701754 23.0630834,0.00538210981 19.48,0 Z M16.48,13 L14,13 L14,21.05 L10.94,21.05 L10.94,13 L9.29,13 L9.29,9.7 L10.73,9.7 L10.73,8.3 C10.6658193,7.37030647 11.0101041,6.45882183 11.6728924,5.80371807 C12.3356806,5.1486143 13.2511181,4.81498213 14.18,4.89 L16.71,4.89 L16.71,7.63 L14.92,7.63 C14.63,7.63 14.24,7.82 14.24,8.46 L14.24,9.7 L16.78,9.7 L16.48,13 Z' />
      </g>
    );
  }
}

export default withSvg({
  viewBoxWidth:  26,
  viewBoxHeight: 26,
  width:         26,
  height:        26,
})(FacebookLogo);
