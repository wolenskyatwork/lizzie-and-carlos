import React, { Component } from 'react';
import './index.css';

class Navigator extends Component {

    navigatorChoice = (title, anchor) => {
        return (
            <div className='navigator_choice'>
                <a className='navigator_title' href={anchor}>{title}</a>
                {/* <img className='chicken_selector absolute' src={require('../../../images/line-drawing-chicken-31.png')}/> */}
            </div>
        )
    }

    render() {
        return (
            <div className='navigator'>
                { /* this.navigatorChoice('Our Story', '#our_story') */ }
                {this.navigatorChoice('More Details', '#more_details')}
                {this.navigatorChoice('RSVP', '#rsvp_here')}
                {this.navigatorChoice('Registry', 'https://www.zola.com/registry/wolenskygadeawedding')}
            </div>
        );
    }
}

export default Navigator;
