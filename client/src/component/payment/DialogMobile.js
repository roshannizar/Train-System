import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addMobile} from '../../action/PaymentAction';
import PropTypes from 'prop-types';

import '../landing/style.css';

class DialogMobile extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            phoneno: '',
            pin: '',
            email: '',
            errors: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({ errors: nextProps.errors});
        }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const newMobile = {
            name: this.state.name,
            phneono: this.state.phoneno,
            pin: this.state.pin,
            email: this.state.email
        };

        this.props.addMobile(newMobile);
    }

    render() {
        return(
            <div className="title-div">
                <div className="title-box">
                    <Link to="/payment"><button className="btn primary small">Back</button></Link>
                    <label className="title">Dialog Mobile Gateway</label>
                </div>
                <div className="card-large">
                    <form>
                        <label>Name: </label><br/><br/>
                        <input type="text" placeholder="Enter your name"/><br/><br/>
                        <label>Mobile Phone: </label><br/><br/>
                        <input type="text" placeholder="Enter Phone No"/><br/><br/>
                        <label>PIN: </label><br/><br/>
                        <input type="text" placeholder="Enter PIN No"/><br/><br/>
                        <input type="submit" value="Pay"/>
                    </form>
                </div>
            </div>
        );
    }
}

DialogMobile.propTypes = {
    addMobile: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, {addMobile})(DialogMobile);