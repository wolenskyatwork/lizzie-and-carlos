import React, { Component } from 'react';
import './invite.css';

class Invite extends Component {
    render() {
        return (
            <div className="invite">
                <div className="italic">Together</div>
                <div>with their families</div>
                <div className={"bold"}>Elizabeth Anne Wolensky-Barceló</div>
                <div><span className={"italic"}>and </span><span className={"bold"}>Carlos Daniel Gadea-Omelchenko </span></div>
                <div className={"italic"}>invite you to share in their celebration</div>
                <div>ON THEIR WEDDING DAY</div>
                <div>Friday, October 26th</div>
                <div className={"bold"}>2018</div>
                <div className={"italic"}>at 4 o'clock in the afternoon</div>
                <div className={"bold"}>Glasbern Inn</div>
                <div>2141 Packhouse Rd</div>
                <div>Fogelsville, Pennsylvania, 18051, USA</div>
                <div className={"italic"}>Dinner & merriment to follow</div>
            </div>
        );
    }
}

export default Invite;
