import PropTypes from "prop-types";
import React from "react";
import {useDispatch} from "react-redux";
import {addPostCreatorAsync} from "../../redux/reducers/posts";
import cmbcl from "../../utils/cmbcl";
import "./styles.css";

export default function ThemeButton({className, theme, children}) {
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(addPostCreatorAsync(theme));
	};
	return (
		<button className={cmbcl("ThemeButton", className)} onClick={handleClick}>
			{children}
		</button>
	);
}

ThemeButton.propTypes = {
	className: PropTypes.string,
	theme: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

ThemeButton.defaultProps = {
	className: "",
	theme: "",
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};
