import React, { Component } from 'react';
import './index.css';

class SelectorOption extends Component {
    constructor() {
        super()
    }

    getClasses() {
        const classes = ['selector-option'];

        if (this.props.selected) {
            return [
              ...classes,
              'selected',
            ];
        } else {
            return classes;
        }
    }

    render() {
        return (
            <div
                onClick={this.props.onClick}
                className={this.getClasses().join(' ')}
            >
                <img className='selector-option-icon' src={this.props.imgSrc}/>
                {this.props.name}
            </div>
        )
    }
}

export default SelectorOption;
