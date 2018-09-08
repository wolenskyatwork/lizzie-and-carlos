import React, { Component } from 'react';
import './index.css';

class RSVP extends Component {

    constructor() {
        super()
        this.state = {
            finished: false,
            first_name: '',
            last_name: '',
            attending: true,
            foodChoice: 2,
            diet_stuff: '',
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log()
        this.setState({
            [name]: value
        });
    }

    handleRSVPChange = (event) => {
        this.setState({
            attending: event.target.value,
        })
    }

    handleFoodChange = (event) => {
        this.setState({
            foodChoice: event.target.value,
        })
    }

    attending = () => {
        const { foodChoice } = this.state
        return (
            <div>
                <div className={'food_box lazy_spacing'}>
                    <div className={'center_vertical choice_title'}>
                        Menu options:
                    </div>
                    <div className='food_choices'>
                        <div
                            onClick={() => this.setState({ foodChoice: 2 }) }
                            className='food_choice'>
                            <img className={`circle_selector ${foodChoice === 2 ? 'show' : 'hide' }`} src={require('../../../images/scribble-circle-3.png')}/>
                            <img className='cow_selector' src={require('../../../images/cow.svg')}/>
                            Steak
                        </div>
                        <div
                            onClick={() => this.setState({ foodChoice: 1 }) }
                            className='food_choice'>
                            <img className={`circle_selector ${foodChoice === 1 ? 'show' : 'hide' }`} src={require('../../../images/scribble-circle-3.png')}/>
                            <img className='chicken_selector' src={require('../../../images/line-drawing-chicken-31.png')}/>
                            Chicken
                        </div>
                        <div
                            onClick={() => this.setState({ foodChoice: 3 }) }
                            className='food_choice'>
                            <img className={`circle_selector ${foodChoice === 3 ? 'show' : 'hide' }`} src={require('../../../images/scribble-circle-3.png')}/>
                            <img className='chicken_selector' src={require('../../../images/root.png')}/>
                            Veggie
                        </div>
                    </div>
                </div>
                <div className={''}>
                    Any dietary restrictions or anything else we should know about in advance?
                    <div className={'lazy_spacing'}>
                        <textarea
                           onChange={this.handleInputChange}
                           className={'diet_input'}
                           type='text'
                           name='diet_stuff'></textarea>
                    </div>
                </div>
            </div>
        )
    }

    notAttending = () => {
        return <div>Sorry you can't make it. You will be missed! :)</div>
    }

    sendRSVP = () => {
        console.log(JSON.stringify({
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            food_option_id: 1, // this.state.foodChoice,
            attending: this.state.attending,
            dietary_note: this.state.diet_stuff,
        }))

        // this.setState({
        //     finished: true,
        // })

        fetch('rsvps', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "rsvp": {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                food_option_id: this.state.foodChoice,
                attending: this.state.attending,
                dietary_note: this.state.diet_stuff,
            }})
        }).then(this.setState({ finished: true }))
    }

    render() {
        const { attending } = this.state

        return (
            <div id='rsvp_here' className='RSVP'>
                <div className={'rsvp_left'}></div>
                <div className={'rsvp_right'}>
                    { !this.state.finished && (
                        <div>
                            <div className={'rsvp_header lazy_spacing'}>Hey there! We hope you can make it!</div>
                            <div className={'name_box'}>
                                <div className={'name_box_title'}>First Name:</div>
                                    <input
                                        className={'input_box name_box_input'}
                                        onChange={this.handleInputChange}
                                        type='text'
                                        name='first_name'
                                    />
                            </div>
                            <div className={'name_box'}>
                                <div className={'name_box_title'}>Last Name:</div>
                                <input
                                    className={'input_box name_box_input'}
                                    onChange={this.handleInputChange}
                                    type='text'
                                    name='last_name'
                                />
                            </div>
                            <div className={'attending_box lazy_spacing'}>
                                <div className={'center_vertical choice_title'}>Attending:</div>
                                <div className={'attending_options'}>
                                    <div
                                        onClick={() => this.setState({ attending: true })}
                                        className={'center_vertical attending_option'}>
                                        <img className={`circle_selector ${attending ? 'show' : 'hide' }`} src={require('../../../images/scribble-circle-3.png')}/>
                                        <img className='chicken_selector' src={require('../../../images/line-drawing-chicken-31.png')}/>
                                        <div>Yes, I'll be there! :D</div>
                                    </div>
                                    <div
                                        onClick={() => this.setState({ attending: false })}
                                        className={'center_vertical attending_option'}>
                                        <img className={`circle_selector ${attending ? 'hide' : 'show' }`} src={require('../../../images/scribble-circle-3.png')}/>
                                        <img className='chicken_selector' src={require('../../../images/sad.png')}/>
                                        <div>Sorry, I can't make it :(</div>
                                    </div>
                                </div>
                            </div>
                            <div className={'bottom_rsvp'}>
                                { this.state.attending ? this.attending() : this.notAttending() }
                            </div>
                            <div className={'rsvp_button'} onClick={this.sendRSVP}>RSVP!</div>
                         </div>
                    )}
                    { this.state.finished && this.state.attending && (<div>Thanks! See you in October!</div>) }
                    { this.state.finished && !this.state.attending && (<div>Thanks! Sorry you can't make it :(</div>) }
                </div>
            </div>
        );
    }
}

export default RSVP;
