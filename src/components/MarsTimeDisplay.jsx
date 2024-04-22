import React, { useState } from 'react';
import '../style/MarsTimeDisplay.css';

function MarsTimeDisplay({ marsTime, earthTime }) {
    const [showEarthTooltip, setShowEarthTooltip] = useState(false);
    const [showMarsTooltip, setShowMarsTooltip] = useState(false);

    return (
        <div className="time-display-container">
            <h2>Earth Time (UTC)</h2>
            <p onMouseEnter={() => setShowEarthTooltip(true)}
               onMouseLeave={() => setShowEarthTooltip(false)}>
                {earthTime}
                {showEarthTooltip && <span className="custom-tooltip">This is the current time on Earth in GMT (Greenwich Mean Time).</span>}
            </p>
            <h2>Mars Time (MTC)</h2>
            <p onMouseEnter={() => setShowMarsTooltip(true)}
               onMouseLeave={() => setShowMarsTooltip(false)}>
                {marsTime}
                {showMarsTooltip && (
                    <span className="custom-tooltip">
                        Mars Time (MTC) is calculated as follows:<br />
                        JD_UT = 2440587.5 + (Earth Time in ms / 86400000)<br />
                        JD_TT = JD_UT + (TAI-UTC offset + 32.184) / 86400<br />
                        J2000 = JD_TT - 2451545.0<br />
                        MSD = (((J2000 - 4.5) / 1.027491252) + 44796.0 - 0.00096)<br />
                        MTC = (24 * MSD) % 24
                    </span>
                )}
            </p>
        </div>
    );
}

export default MarsTimeDisplay;
