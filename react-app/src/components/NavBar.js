import React from 'react';
import './components.styles.css';
import '../containers/App.css'

const NavBar = (props) => {
	// const classes = "MuiPaper-root MuiAppBar-root MuiAppBar-positionAbsolute makeStyles-appBar-4 MuiAppBar-colorPrimary MuiPaper-elevation4";
	//  "MuiAppBar-root  makeStyles-appBar-4 MuiAppBar-colorSecondary MuiPaper-elevation4";
		const {visible} = props;
		const classes = "nav-bar" 
			+ (visible?" nav-bar-visible":" nav-bar-hidden");
	
	return(
		<nav className={classes}>
		nav
		</nav>
	)
}

export default NavBar;