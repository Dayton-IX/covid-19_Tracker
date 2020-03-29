import React from 'react';

import SlowTheSpread from './SlowTheSpread/SlowTheSpread';

const Instructions = (props) => (
    <div>
        <h2>Stop the Spread</h2>
        <h3>What you should do:</h3>
        <SlowTheSpread />
        <h3>Links and Resources</h3>
        <ul>
            <li><a href="https://www.coronavirus.gov/" target="_blank">coronavirus.gov</a></li>
            <li><a href="https://www.cdc.gov/coronavirus/2019-ncov/" target="_blank">CDC Coronavirus Website</a></li>
            <li><a href="https://www.apple.com/covid19" target="_blank">Apple + CDC COVID Screening Tool</a></li>
        </ul>
    </div>
);

export default Instructions;