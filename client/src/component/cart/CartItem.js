/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { deleteBooking } from '../../action/CartActions';
import { connect } from 'react-redux';
import Pic from '../../images/train.png';
import '../landing/style.css';

class CartItem extends Component {

    constructor() {
        super();
        this.state = {
            id: '',
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

        const newBooking = {
            id: this.state.id
        }

        this.props.deleteBooking(newBooking);
    }

    render() {

        const { cart } = this.props;

        return (
            <div className="card">
                <div className="card-title">
                    <div className="image-slot">
                        <img src={Pic} alt="Train Image" />
                    </div>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                        <div className="train-detail-slot">
                            <div className="main-badge">
                                <label className="card-label">Quantity: </label>
                                <label className="badge dark-green right card-label-right">{cart.quantity}</label>
                            </div>
                            <label className="card-label">Train No:</label>
                            <label className="card-label">{cart.trainid}</label><br /><br />
                            <label className="card-label">Price:</label>
                            <label className="badge card-label lawrencium">{cart.price}</label>
                        </div>
                        <div className="controls">
                            <input type="text" hidden name="id" value={this.state.id = cart._id} onChange={this.onChange}/>
                            <input type="submit" className="btn" value="Remove" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

CartItem.propType = {
    cart: PropTypes.object.isRequired,
    deleteBooking: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, {deleteBooking})(CartItem);