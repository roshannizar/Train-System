import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TrainItem from '../train/TrainItem';
import { getTrains } from '../../action/TrainActions';
import Spinner from '../spinner/Spinner';

import './style.css';

class Home extends Component {

    componentDidMount() {
        this.props.getTrains();
    }

    render() {

        const { trains, loading } = this.props.train;
        let trainItems;

        if (trains === null || loading) {
            trainItems = <Spinner/>
        } else {
            if (trains.length > 0) {
                trainItems = trains.map(train => (
                    <TrainItem key={train._id} train={train} />
                ));
            } else {
                trainItems = <h4>No Trains Found .....</h4>;
            }
        }

        return(
            <div>
                <div className="title-div">
                    <div className="title-box">
                    <label className="title">Train Informations</label>
                    </div>
                    {trainItems}
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    getTrains: PropTypes.func.isRequired,
    train: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    train: state.train
});

export default connect(mapStateToProps, { getTrains })(Home);