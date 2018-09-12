import React, { Component } from 'react';
import './index.css';

class MoreDetails extends Component {

    render() {
        return (
            <div className='font'>
                <div id='more_details'>More Details</div>
                <div className={'details-container'}>
                    <div className={'glasbern-container'}>
                        <div>
                            <div className={'title'}>Where to celebrate?</div>
                            <div>Glasbern Inn</div>
                            <div>
                                <div>2141 Packhouse Road</div>
                                <div>Fogelsville, Pennsylvania</div>
                                <div>18051, USA</div>
                            </div>
                        </div>
                        <iframe
                            className={'glasbern_map'}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.6636552848368!2d-75.66010504919119!3d40.59317905271201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c433a564cbc165%3A0xcf9fec6f1c80f5f2!2sGLASBERN+-+Official+Site+-+GUARANTEED+BEST+Rates+Here!5e0!3m2!1sen!2sus!4v1536723394486"
                            allowfullscreen
                        >
                        </iframe>
                    </div>

                    <div className={'glasbern-container'}>
                        <div>
                            <div className={'title'}>Where to stay?</div>
                            <div>Hawthorn Suites</div>
                            <div>7720 Main Street</div>
                            <div>Fogelsville, PA 18051</div>
                            <div>(610) 366-9422</div>
                            <div>Ask for the Wolensky-Gadea wedding room block</div>
                        </div>
                        <iframe
                            className={'glasbern_map'}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d446.7195539521871!2d-75.62775604941864!3d40.58244575730948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c433d3fc3b9963%3A0xa618477b64f6a79e!2sHawthorn+Suites+by+Wyndham+Allentown-Fogelsville!5e0!3m2!1sen!2sus!4v1536449020598"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className={'directions'}>
                        <div className={'title'}>How to get here?</div>
                        <div className={'title'}>From New York City:</div>
                        <div>Take the Transbridge bus line from Port Authority</div>
                        <div>http://www.transbridgelines.com/pabt-nyc-west.html</div>
                        <div>Please let Liz & Carlos know if you're planning to take this option.</div>
                        <div>We will arrange a group pick-up from the bus station in PA</div>
                        <div className={'title'}>By Plane:</div>
                        <div>Allentown Airport is not far away, and services both domestic and international flights</div>
                        <div className={'title'}>By Car:</div>
                        <div>Located off of Route 78, Glasbern Inn is easily reachable by car!</div>
                        <div style={{ "font-size": "12px" }}>
                            <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                            <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                            <div>Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                            <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Circus Llama">Circus Llama</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"     title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MoreDetails;
