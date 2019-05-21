import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import ReactDOM from 'react-dom';
import { getBookings } from '../../action/CartActions';
import Spinner from '../spinner/Spinner';
import PaymentSelection from '../payment/PaymentSelection';

import '../landing/style.css';

class Cart extends Component {

    componentDidMount() {
        this.props.getBookings();
    }

    redirectToPaymentSelection() {
        ReactDOM.render(<PaymentSelection/>, document.getElementById('apptwo'));
    }

    render() {

        const { carts, loading } = this.props.cart;
        let cartItems;

        if (carts === null || loading) {
            cartItems = <Spinner/>
        } else {
            if (carts.length > 0) {
                cartItems = carts.map(cart => (
                    <CartItem key={cart._id} cart={cart} />
                ));
            } else {
                cartItems = <h4 className="center">Cart is empty .....</h4>;
            }
        }

        return(
            <div>
                <div className="title-div">
                    <div className="title-box">
                    <label className="title">Your Cart</label>
                    </div>
                    {cartItems}

                    <div className="payment">
                        <div className="heading-box">
                            <label className="heading">Payment Summary</label>
                        </div>
                        <hr/>
                        <div>
                            <div className="payment-left">
                                <label className="card-label">Total:</label><br/><br/>
                                <label className="card-label">Discounts:</label><br/><br/>
                                <label className="card-label">Total Amount:</label>
                            </div>
                            <div className="payment-right">
                                <label className="card-label-right">40/=</label><br/><br/>
                                <label className="card-label-right">0</label><br/><br/>
                                <label className="card-label-right">40/=</label>
                            </div>
                            <div>
                                <button className="btn primary" onClick={()=> this.redirectToPaymentSelection()}>Pay Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Cart.propTypes = {
    getBookings: PropTypes.func.isRequired,
    cart: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps, { getBookings })(Cart);