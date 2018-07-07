import React, { Component } from 'react';
import './invite.css';

class Invite extends Component {

    render() {
        const linebreak = <div className={"line-break"}></div>
        return (
            <div className="invite">
                {/* <img src={require('./images/chicken.png')} alt={'flowers'} height={'50px'} />*/ }
                <div className="italic">Together</div>
                <div>with their families</div>
                <div className={"bold name"}>Elizabeth Anne Wolensky-Barceló</div>
                <div><span className={"italic and"}>and</span><span className={"bold name"}>Carlos Daniel Gadea-Omelchenko </span></div>
                <div className={"italic"}>invite you to share in their celebration</div>
                <div>ON THEIR WEDDING DAY</div>
                {linebreak}
                <div>Friday, October 26th</div>
                <div className={"bold date"}>2018</div>
                <div className={"italic"}>at 4 o'clock in the afternoon</div>
                {linebreak}
                <div className={"bold name"}>Glasbern Inn</div>
                <div>2141 Packhouse Road</div>
                <div>Fogelsville, Pennsylvania, 18051, USA</div>
                <div className={"italic"}>Dinner & merriment to follow</div>
            </div>
        );
    }
}

export default Invite;
