import React, { useEffect } from 'react';
import '../App.scss';

export default function Clock({ minute, second }) {
		const oneMetricDeg = 360 / 60;
		const minuteDeg = minute * oneMetricDeg + 180;
		const secondDeg = second * oneMetricDeg + 180;
    return (
			<div className="clock">
				<div className="minute-hand" style={{ transform: `rotate(${minuteDeg}deg)` }}></div>
				<div className="second-hand" style={{ transform: `rotate(${secondDeg}deg)` }}></div>
			</div>
    )
}