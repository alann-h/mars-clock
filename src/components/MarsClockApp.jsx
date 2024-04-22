import React, { useState, useEffect } from 'react';
import MarsTimeDisplay from './MarsTimeDisplay';
import TimeDifferenceDisplay from './TimeDifferenceDisplay';

function MarsClockApp() {
    const [marsTime, setMarsTime] = useState('');
    const [earthTime, setEarthTime] = useState('');
    const [timeDifference, setTimeDifference] = useState('');

    useEffect(() => {
        updateTimes();
        const interval = setInterval(updateTimes, 1000); // Update every second for precision
        return () => clearInterval(interval);
    }, []);

    const updateTimes = () => {
        const earthDate = new Date();
        const earthTimeStr = earthDate.toISOString().slice(0, 19).replace('T', ' ') + ' GMT';
        setEarthTime(earthTimeStr);

        const jd_ut = 2440587.5 + (earthDate.getTime() / 8.64E7);
        const jd_tt = jd_ut + (37 + 32.184) / 86400;
        const j2000 = jd_tt - 2451545.0;
        const msd = (((j2000 - 4.5) / 1.027491252) + 44796.0 - 0.00096);
        const mtc = (24 * msd) % 24;

        const marsHours = Math.floor(mtc);
        const marsMinutes = Math.floor((mtc - marsHours) * 60);
        const marsSeconds = Math.round(((mtc - marsHours) * 60 - marsMinutes) * 60);
        const marsTimeStr = `${marsHours.toString().padStart(2, '0')}:${marsMinutes.toString().padStart(2, '0')}:${marsSeconds.toString().padStart(2, '0')} MTC`;
        setMarsTime(marsTimeStr);

        const earthTimeInHours = earthDate.getUTCHours() + earthDate.getUTCMinutes() / 60 + earthDate.getUTCSeconds() / 3600;
        const marsTimeInHours = (earthTimeInHours * (24 / 24.65)) % 24;
        const timeDiffHours = Math.abs(marsTimeInHours - earthTimeInHours);
        const timeDiff = `${timeDiffHours.toFixed(2)} hours`;
        setTimeDifference(timeDiff);
    };

    return (
        <div>
            <MarsTimeDisplay marsTime={marsTime} earthTime={earthTime} />
            <TimeDifferenceDisplay timeDifference={timeDifference} />
        </div>
    );
}

export default MarsClockApp;
