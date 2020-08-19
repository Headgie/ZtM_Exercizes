import React, { Component, Fragment } from "react";
import { block } from "bem-cn";

import "./accordion.styles.scss"

const Accordion = ({children, collapsed}) => {
	const ac = block('accordion');
	const fc = block('flex-container');
	return(
		<div className={fc("flex-item",{fixed: true}).mix(fc({vertical:true}), ac( {collapsed: collapsed}))}>
			{children} 
		</div>)
}

export default Accordion

