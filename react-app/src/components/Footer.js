import React from 'react';
import './components.styles.css';
import '../containers/App.css'

const Footer = (props) => {
	// const classes = "MuiPaper-root MuiAppBar-root MuiAppBar-positionAbsolute makeStyles-appBar-4 MuiAppBar-colorPrimary MuiPaper-elevation4";
	const classes = "footer";
	// "MuiAppBar-root  makeStyles-appBar-4 MuiAppBar-colorSecondary MuiPaper-elevation4";
	return(
		<footer className={classes}>{props.text}</footer>
	)
}

export default Footer;