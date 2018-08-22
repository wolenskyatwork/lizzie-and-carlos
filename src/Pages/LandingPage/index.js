import React, { Component } from 'react';
import moment from 'moment';
import Navigator from './Navigator';
import './index.css';

class LandingPage extends Component {

    constructor() {
        super();

        this.state = this.makeUpdatedState()
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState(this.makeUpdatedState()), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
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
                    <img className='background_image' src={require('../../images/romantic_pic.jpg')} />
                </div>

                <div className='font'>
                    <div>The Lizzie & Carlos Story</div>
                    <div>Lizzie and Carlos met junior year of high school, in our honors physics class.</div>
                    <div>love at first sight</div>
                    <div>Junior prom</div>
                    <div>Calculus AP</div>
                    <div>Senior prom</div>
                    <div>Carlos went to NYC for school, while Lizzie went outside Philadelphia</div>
                    <div>One fateful day (shitty writing here, first attempt)</div>
                    <div>Lizzie asked Carlos if he was willing to try one more time</div>
                    <div>And here we are, finally(!) getting married</div>
                </div>

                <div className='font'>
                    <div>More Details</div>
                    <div>
                        <div>Where to celebrate?</div>
                        <div>Glasbern Inn</div>
                        <div>When to arrive?</div>
                        <div>At 4:00 pm on Friday, October 26th, 2018</div>
                        <div>Where to stay?</div>
                        <div>Wyndham by Wingate</div>
                    </div>
                </div>

            </div>
        );
    }
}

export default LandingPage;
