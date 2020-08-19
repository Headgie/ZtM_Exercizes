import React, { Component, Fragment } from "react";
import { block } from "bem-cn";

import "./accordion.styles.scss"

const Accordion = ({children, collapsed,handlerAccordionClose }) => {
	const ac = block('accordion');
	const fc = block('flex-container');
	return(
		
	
		<div className={ac}>
			{/*	onClick={handlerAccordionClose}>
		
				<div className={fc("flex-item",{fixed: true}).mix(ac("card-header"))}>
				ghjkdhgkdhg
				</div>
				<div className={fc("flex-item").mix(ac("card-content", {collapsed:collapsed}))}>
				etrtertert
				</div>

				<div className={fc("flex-item",{fixed: true}).mix(ac("card-header"))}>
				ghjkdhgkdhg
				</div>			
				<div className={fc("flex-item",{fixed: true}).mix(ac("card-header"))}>
				ghjkdhgkdhg
			</div>
		*/}
			
	
				{children}
		</div>)
}

export default Accordion

