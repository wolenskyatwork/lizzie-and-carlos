import React, { Component } from 'react';
import './index.css';

class Selector extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            [
              <div className={'input-label'}>
                  {this.props.label}
              </div>,
              <div className={'selector'}>
                  {this.props.children}
              </div>
            ]
        )
    }
}

export default Selector;
