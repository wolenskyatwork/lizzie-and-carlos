import React, { Component } from 'react';
import './index.css';
import Selector from './Selector';
import SelectorOption from './Selector/SelectorOption';

class RSVP extends Component {

    constructor() {
        super()
        this.state = {
            finished: false,
            first_name: '',
            last_name: '',
            attending: true,
            selected_food_option_id: 1,
            diet_stuff: '',
            food_options: [
                { id: 1, name: 'Chicken', imgSrc: require('../../../images/chicken.png') },
                { id: 2, name: 'Steak', imgSrc: require('../../../images/cow.png') },
                { id: 3, name: 'Veggie', imgSrc: require('../../../images/carrot.png') },
            ],
        };
    }

    handleInputChange = (event) => {
        const target = event.target;

        this.setState({
            [target.name]: target.value.substring(0, 239)
        });
    }

    handleRSVPChange = (event) => {
        this.setState({
            attending: event.target.value,
        })
    }

    attending = () => {
        const {
          diet_stuff,
          food_options,
          selected_food_option_id,
        } = this.state
        return (
            [
                <div className={'rsvp-row'}>
                    <div className={'input-container'}>
                        <Selector label={'Menu Options'}>
                            { food_options.map(({ name, id, imgSrc }) => {
                                return <SelectorOption
                                    key={id}
                                    name={name}
                                    imgSrc={imgSrc}
                                    selected={id == selected_food_option_id}
                                    onClick={() => {
                                        this.selectOption(id)
                                    }}
                                />
                            })}
                        </Selector>
                    </div>
                </div>,
                <div className={'rsvp-row'}>
                    <div className={'input-container'}>
                        <div className={'input-label'}>
                            Any dietary restrictions or anything else we should know about?
                        </div>
                        <div className={'textarea-wrapper'}>
                            <textarea
                                value={diet_stuff}
                                className={'rsvp-notes'}
                                onChange={this.handleInputChange}
                                type='text'
                                name='diet_stuff'
                            >
                            </textarea>
                        </div>
                    </div>
                </div>
            ]
        )
    }

    notAttending = () => {
        return <div className={'rsvp-row'}>
            <div className={'input-container rsvp-sorry'}>
                Sorry you can't make it. You will be missed!
                <img className='rsvp-sorry-icon' src={
                    require('../../../images/circus-llama.png')
                }/>
            </div>
        </div>
    }

    sendRSVP = () => {
        fetch('rsvps', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "rsvp": {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                food_option_id: this.state.selected_food_option_id,
                attending: this.state.attending,
                dietary_note: this.state.diet_stuff,
            }})
        }).then(this.setState({ finished: true }))
    }

    selectOption(id) {
        this.setState({
            selected_food_option_id: id,
        });
    }

    render() {
        const { 
            attending,
            first_name,
            food_options,
            last_name,
            selected_food_option_id,
        } = this.state;

        return (
            <div id='rsvp_here' className='RSVP'>
                <div className={'rsvp_left'}></div>
                <div className={'rsvp_right'}>
                    { !this.state.finished && (
                        <div className={'rsvp-form-wrapper'}>
                            <div className={'rsvp-row rsvp-header'}>
                                Hey there! We hope you can make it!
                            </div>
                            <div className={'rsvp-row rsvp-row--double'}>
                                <div className={'input-container'}>
                                  <div className={'input-label'}>First Name</div>
                                  <input
                                      onChange={this.handleInputChange}
                                      type='text'
                                      name='first_name'
                                      value={first_name}
                                  />
                                </div>
                                <div className={'input-container'}>
                                  <div className={'input-label'}>Last Name</div>
                                  <input
                                      onChange={this.handleInputChange}
                                      type='text'
                                      name='last_name'
                                      value={last_name}
                                  />
                                </div>
                            </div>
                            <div className={'rsvp-row'}>
                                <div className={'input-container'}>
                                  <Selector label={'Attending'}>
                                      <SelectorOption
                                          imgSrc={require('../../../images/like.png')}
                                          name={'I\'ll be there!'}
                                          selected={attending}
                                          onClick={() => this.setState({ attending: true })}
                                      />
                                      <SelectorOption
                                          imgSrc={require('../../../images/close.png')}
                                          name={'I can\'t make it!'}
                                          selected={!attending}
                                          onClick={() => this.setState({ attending: false })}
                                      />
                                  </Selector>
                                </div>
                            </div>
                            { this.state.attending ? this.attending() : this.notAttending() }
                            <div className={'rsvp-row'}>
                                <div className={'input-container button-container'}>
                                    <div
                                        className={'rsvp-button'}
                                        onClick={this.sendRSVP}
                                    >
                                        RSVP
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    { this.state.finished && this.state.attending && (
                        <div className={'rsvp-thanks'}>
                            Thanks! See you in October!
                        </div>
                    ) }
                    { this.state.finished && !this.state.attending && (
                        <div className={'rsvp-thanks'}>
														Thanks! Sorry you can't make it :(
												</div>
										) }
                </div>
            </div>
        );
    }
}

export default RSVP;
