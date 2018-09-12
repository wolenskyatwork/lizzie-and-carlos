import React, { Component } from 'react';
import moment from 'moment';
import Navigator from './Navigator';
import RSVP from './RSVP';
import './index.css';
import MoreDetails from "./MoreDetails";
import OurStory from './OurStory';

class LandingPage extends Component {

    constructor() {
        super();

        this.state = this.makeUpdatedState()
    }

    componentDidMount() {
        // this.interval = setInterval(() => this.setState(this.makeUpdatedState()), 1000);
    }

    componentWillUnmount() {
        // clearInterval(this.interval);
    }

    makeUpdatedState = () => {
        const now = moment();
        const weddingDate = moment('2018-10-26 04:00:00 PM', 'YYYY-MM-DD hh:mm:ss a');

        const days = weddingDate.diff(now, 'days');
        const hours = weddingDate.subtract(days, 'days').diff(now, 'hours');
        const minutes = weddingDate.subtract(hours, 'hours').diff(now, 'minutes');
        const seconds = weddingDate.subtract(minutes, 'minutes').diff(now, 'seconds');

        return {
            days,
            hours,
            minutes,
            seconds,
        }
    }

    timerStuff = () => {
        const { days, hours, minutes, seconds } = this.state;

        return (
            <div>
                <div className='final_countdown'>In {days} days, {hours} hours, {minutes} minutes, and {seconds} seconds</div>
                <div className="header">we're getting MARRIED</div>
            </div>
        )
    }

    render() {
        return (
            <div className="landing_page">
                <div className='navigator_wrapper'>
                    <Navigator />
                </div>
                <div>
                    <img alt='Romantic' className='background_image' src={require('../../images/romantic_pic.jpg')} />
                </div>

                <div id='rsvp_here'></div>
                <RSVP />

                <div id='more_details'></div>
                <MoreDetails />

                <div className={'font'}>Come back soon for an updated day-of timeline!</div>
            </div>
        );
    }
}

export default LandingPage;
