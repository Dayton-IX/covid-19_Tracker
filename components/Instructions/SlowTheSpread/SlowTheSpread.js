import React from 'react';

import classes from './SlowTheSpread.module.css';

const SlowTheSpread = (props) => (
    <div className={classes.SlowTheSpread}>
        <ul>
            <li>Listen and follow the directions of your <strong>STATE AND LOCAL AUTHORITIES</strong></li>
            <li><strong>IF YOU ARE AN OLDER PERSON,</strong> or have a serious underlying health condition, stay home and away from other people.</li>
            <li>Work or study <strong>FROM HOME</strong> whenever possible.</li>
            <li>Avoid eating or drinking at bars and restaurants -- <strong>USE PICKUP OR DELIVERY OPTIONS.</strong></li>
            <li><strong>AVOID DISCRETIONARY TRAVEL,</strong> shopping trips, and social visits.</li>
            <li><strong>DO NOT VISIT </strong> nursing homes or retirement or long-term care facilties unless to provide critical assistance</li>
            <li><strong>IF YOU FEEL SICK,</strong> stay home. Do not go to work.</li>
            <li><strong>IF YOUR CHILDREN ARE SICK,</strong> help them at home. Contact your medical provider.</li>
            <li>If someone in your household has <strong>TESTED POSITIVE,</strong> keep the entire household at home.</li>
            <li><strong>ALWAYS PRACTICE GOOD HYGIENE:</strong></li>
            <ul>
                <li><em>Wash your hands, especially after touching any frequently used item or surface.</em></li>
                <li><em>Avoid touching your face.</em></li>
                <li><em>Sneeze or cough into a tissue, or the inside of your elbow.</em></li>
                <li><em>Disinfect frequently used items and surfaces as much as possible.</em></li>
            </ul>
        </ul>
    </div>
);

export default SlowTheSpread;