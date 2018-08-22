import React, { Component } from 'react';
import './index.css';

class Navigator extends Component {

    navigatorChoice = (title) => {
        return (
            <div className='navigator_choice'>
                <div className='navigator_title'>{title}</div>
                <img className='chicken_selector absolute' src={require('../../../images/line-drawing-chicken-31.png')}/>
            </div>
        )
    }

    render() {
        return (
            <div className='navigator'>
                {this.navigatorChoice('Our Story')}
                {this.navigatorChoice('More Details')}
                {this.navigatorChoice('RSVP')}
                {this.navigatorChoice('Registry')}
            </div>
        );
    }
}

export default Navigator;
