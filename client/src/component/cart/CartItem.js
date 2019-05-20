/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Pic from '../../images/train.png';
import '../landing/style.css';

class CartItem extends Component {

    render() {

        const { cart } = this.props;

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
                                <label className="badge left-badge green card-label">{cart.bookingid}</label>
                                 <label className="badge dark-green right card-label-right">{cart.quantity}</label>
                            </div>
                            <label className="card-label">Train No:</label>
                            <label className="card-label">{cart.trainid}</label><br /><br />
                            <label className="card-label">Price:</label>
                            <label className="badge card-label lawrencium">{cart.price}</label>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

CartItem.propType = {
    cart: PropTypes.object.isRequired
};

export default CartItem;