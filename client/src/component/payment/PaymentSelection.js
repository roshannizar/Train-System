import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SampathBank from '../payment/SampathPayment';
import DialogMobile from '../payment/DialogMobile';

import '../landing/style.css';

class PaymentSelection extends Component {

    redirectToCard() {
        ReactDOM.render(<SampathBank />, document.getElementById('apptwo'));
    }

    redirectToDialog() {
        ReactDOM.render(<DialogMobile />, document.getElementById('apptwo'));
    }

    render() {
        return (
            <div className="title-div">
                <div className="title-box">
                    <label className="title">Select your payment type</label>
                </div>
                <div className="selector">
                    <button className="btn primary selector-btn" onClick={() => this.redirectToCard()}>Sampath Bank Card</button>
                    <button className="btn primary selector-btn" onClick={() => this.redirectToDialog()}>Dialog Mobile</button>
                </div>
            </div>
        );
    }
}

export default PaymentSelection;