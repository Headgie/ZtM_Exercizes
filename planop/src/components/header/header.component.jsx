import React from "react";
import "../components-layout.styles.css";
import "../components-visual.styles.css";
import { Link } from "react-router-dom";
import "./header.styles.scss";

import Menu from "../menu/menu.component";

const Header = props => {
	const { text, navBarVisible, handleNavBarToggle, navButtonVisible } = props;
	const buttonText = navBarVisible ? "<<" : ">>";
	const classes = "header MuiAppBar-colorSecondary MuiPaper-elevation4  ";
	const items = [{text: "Главная"}, {text: "Оптимальное планирование"}];
	return (
		<header className={classes}>
			{navButtonVisible ? (
				<button className="navToggleButton" onClick={handleNavBarToggle}>
					{buttonText}
				</button>
			) : null}
			<h3>{text}</h3>
			<Menu items={items}
				selected={1}
				/>
		</header>
	);
};

export default Header;
