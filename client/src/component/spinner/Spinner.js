/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react';

import '../landing/style.css';
import Pic from '../../images/spinner.gif';

class Spinner extends Component {

    render() {
        return(
            <div className="card-spinner center">
                <img src={Pic}/>
            </div>
        ); 
    }
}

export default Spinner;