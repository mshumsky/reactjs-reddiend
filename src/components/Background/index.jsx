import React from "react";
import "./styles.css";

export default function Background() {
	const boxes = Array.from({length: 10}, (_, k) => k);

	return (
		<div className="Background">
			<ul className="Background__Bubbles">
				{boxes.map((key) => (
					<li key={key} />
				))}
			</ul>
		</div>
	);
}
