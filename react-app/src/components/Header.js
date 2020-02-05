import React from 'react';
import './components.styles.css';
import '../containers/App.css'

const Header = (props) => {
	const { text, navBarVisible, handleNavBarToggle} = props;
	const buttonText = navBarVisible?"<<":">>";
	// const classes = "MuiPaper-root MuiAppBar-root MuiAppBar-positionAbsolute makeStyles-appBar-4 MuiAppBar-colorPrimary MuiPaper-elevation4";
	const classes = "header MuiAppBar-root  makeStyles-appBar-4 MuiAppBar-colorSecondary MuiPaper-elevation4  ";
	return(
		<header className={classes}>
			<button 
				className="navToggleButton"
				onClick={handleNavBarToggle} 
				>{buttonText}</button>
			<h3>{text}</h3>
		</header>
	)
}

export default Header;