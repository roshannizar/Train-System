/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reserve } from '../../action/reserveAuth';
import { connect } from 'react-redux';

import Pic from '../../images/train.png';
import '../landing/style.css';

class TrainItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trainid: '',
            bookingid: '',
            price: '',
            quantity: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const { train } = this.props;

        const newBooking = {
            trainid: train.trainid,
            price: train.price,
            quantity: this.state.quantity
        };

        this.props.reserve(newBooking);
    }

    render() {

        const { train } = this.props;

        return (
            <div className="card">
                <div className="card-title">
                    <div className="image-slot">
                        <img src={Pic} alt="Train Image" />
                    </div>
                    <hr />
                    <form>
                        <div className="train-detail-slot">
                            <div className="main-badge">
                                <label className="badge left-badge green card-label">{train.status}</label>
                                <label className="badge dark-green right card-label-right">{train.destination}</label>
                            </div>
                            <label className="card-label">Train No:</label>
                            <label className="card-label">{train.trainid}</label><br /><br />
                            <label className="card-label">Price:</label>
                            <label className="badge card-label lawrencium">{train.price}</label>
                        </div>
                        <div className="controls">
                            <label className="card-label">No of ticket: </label>
                            <input type="number" className="ticket-box" /><br /><br />
                            <input type="submit" className="btn" value="Reserve" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

TrainItem.propType = {
    train: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {reserve})(TrainItem);