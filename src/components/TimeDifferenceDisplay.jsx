import React, { useState } from 'react';
import '../style/MarsTimeDisplay.css';

function TimeDifferenceDisplay({ timeDifference }) {
    const [showTimeDiffTooltip, setShowTimeDiffTooltip] = useState(false);
    return (
        <div className="time-display-container">
           <h2>Time Difference with Earth</h2>
            <p onMouseEnter={() => setShowTimeDiffTooltip(true)}
               onMouseLeave={() => setShowTimeDiffTooltip(false)}>
                {timeDifference}
                {showTimeDiffTooltip && <span className="custom-tooltip">
                The time difference is calculated as follows:<br />
                    Earth Time in Hours = Earth UTC Hours + (Earth UTC Minutes / 60) + (Earth UTC Seconds / 3600)<br />
                    Mars Time in Hours = (Earth Time in Hours * (24 / 24.65)) % 24<br />
                    Time Difference = Absolute Value of (Mars Time in Hours - Earth Time in Hours)
                    </span>}
            </p>
        </div>
    );
}

export default TimeDifferenceDisplay;
