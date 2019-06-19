import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addPayment} from '../../action/PaymentAction';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../landing/style.css';

class SampathPayment extends Component {

    constructor() {
        super();
        this.state = {
            cardname: '',
            cardno: '',
            cvcno: '',
            amount: '',
            email:'',
            errors:{}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({ errors: nextProps.errors});
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const newSampath = {
            cardname: this.state.cardname,
            cardno: this.state.cardno,
            cvcno: this.state.cvcno,
            amount: this.state.amount,
            email: this.state.email
        };

        this.props.addPayment(newSampath);
    }

    render() {
        return(
            <div className="title-div">
                <div className="title-box">
                    <Link to="/payment"><button className="btn primary small">Back</button></Link>
                    <label className="title">Sampath Bank Payment Gateway</label>
                </div>
                <div className="card-large">
                    <form onSubmit={this.onSubmit}>
                        <label>Card Name: </label><br/><br/>
                        <input type="text" placeholder="Enter Holders Card Name" name="cardname" value={this.state.cardname} onChange={this.onChange}/><br/><br/>
                        <label>Card No: </label><br/><br/>
                        <input type="text" placeholder="Enter Card No" name="cardno" value={this.state.cardno} onChange={this.onChange}/><br/><br/>
                        <label>CVC No: </label><br/><br/>
                        <input type="text" placeholder="Enter CVC No" name="cvcno" value={this.state.cvcno} onChange={this.onChange}/><br/><br/>
                        <label>Amount: </label><br/><br/>
                        <input type="text" placeholder="Enter Amount" name="amount" value={this.state.amount} onChange={this.onChange}/><br/><br/>
                        <label>E-Mail: </label><br/><br/>
                        <input type="text" name="email" value={this.state.email} onChange={this.onChange}/><br/><br/>
                        <input type="submit" value="Pay"/>
                    </form>
                </div>
            </div>
        );
    }
}

SampathPayment.propTypes = {
    addPayment: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, {addPayment})(SampathPayment);