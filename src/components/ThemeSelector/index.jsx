import React from "react";
import ThemeButton from "../ThemeButton";
import "./styles.css";

export default function ThemeSelector({themes}) {
	return (
		<div className="ThemeSelector">
			{themes.map(({theme, display}, index) => {
				return (
					<ThemeButton className="ThemeSelector__Item" theme={theme} key={index}>
						{display}
					</ThemeButton>
				);
			})}
		</div>
	);
}
