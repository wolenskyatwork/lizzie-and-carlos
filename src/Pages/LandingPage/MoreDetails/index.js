import React, { Component } from 'react';
import './index.css';

class MoreDetails extends Component {

    render() {
        return (
            <div className='font'>
                <div id='more_details'>More Details</div>
                <div>
                    <div>Where to celebrate?</div>
                    <div className={'glasbern_container'}>
                        <iframe
                            className={'glasbern_map'}
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d485.64706307440855!2d-75.65773811658705!3d40.59313137285285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1535326897052"
                            allowFullScreen></iframe>

                        <div>
                            <div>Glasbern Inn</div>
                            <div>
                                <div>2141 Packhouse Road</div>
                                <div>Fogelsville, Pennsylvania</div>
                                <div>18051, USA</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>Where to stay?</div>
                        <div className={'glasbern_container'}>
                            <iframe
                                className={'glasbern_map'}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4350.783741757354!2d-75.54508334505333!3d40.57158961950408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8139e3622ef0ac23!2sWingate+by+Wyndham+Allentown!5e1!3m2!1sen!2sus!4v1535327512470"
                                allowFullScreen></iframe>
                            <div>
                                <div>Wyndham by Wingate</div>
                                <div>
                                    <div>4325 Hamilton Blvd</div>
                                    <div>Allentown, PA 18103</div>
                                    <div>(610) 366-1600</div>
                                    <div>Ask for the Wolensky-Gadea wedding room block</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>How to get here?</div>
                        <div>From New York City:</div>
                        <div>Take the Transbridge bus line from Port Authority</div>
                        <div>http://www.transbridgelines.com/pabt-nyc-west.html</div>
                        <div>Please let Liz & Carlos know if you're planning to take this option.</div>
                        <div>We will arrange a group pick-up from the bus station in PA</div>
                        <div>By Plane:</div>
                        <div>Allentown Airport is not far away, and services both domestic and international flights</div>
                        <div>By Car:</div>
                        <div>Located off of Route 78, Glasbern Inn is easily reachable by car!</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MoreDetails;
