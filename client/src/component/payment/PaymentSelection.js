import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../landing/style.css';

class PaymentSelection extends Component {


    render() {
        return (
            <div className="title-div">
                <div className="title-box">
                    <label className="title">Select your payment type</label>
                </div>
                <div className="selector">
                    <Link to="/card"><button className="btn primary selector-btn">Sampath Bank Card</button></Link>
                    <Link to="/mobile"><button className="btn primary selector-btn">Dialog Mobile</button></Link>
                </div>
            </div>
        );
    }
}

export default PaymentSelection;