import React, {Component} from 'react';

import '../landing/style.css';

class SampathPayment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardname: '',
            cardno: '',
            cvcno: '',
            amount: ''
        };
    }

    render() {
        return(
            <div className="title-div">
                <div className="title-box">
                    <label className="title">Sampath Bank Payment Gateway</label>
                </div>
                <div className="card-large">
                    <form>
                        <label>Card Name: </label><br/><br/>
                        <input type="text" name="cardname"/><br/><br/>
                        <label>Card No: </label><br/><br/>
                        <input type="text" name="cardno"/><br/><br/>
                        <label>CVC No: </label><br/><br/>
                        <input type="text" name="cvcno"/><br/><br/>
                        <label>Amount: </label><br/><br/>
                        <input type="text" name="amount"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default SampathPayment;