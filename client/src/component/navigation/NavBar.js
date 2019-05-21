/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import '../landing/style.css';

class NavBar extends Component {
    render() {
        return(
            <div>
                <div className="nav-bar">
                    <div className="left">
                        <label>TRAIN INFORMATION SYSTEM</label>
                    </div>
                    <div className="right">
                        <Link to="/" className="link-style-two"><a href="/" className="link-style">HOME</a></Link>
                        <a href="" className="link-style">TICKET</a>
                        <Link to="/payment" className="link-style-two"><a href="" className="link-style">PAYMENT</a></Link>
                        <Link to="/cart" className="link-style-two"><a href="" className="link-style">CART</a></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;