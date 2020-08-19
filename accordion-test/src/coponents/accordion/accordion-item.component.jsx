import React, { Component, Fragment } from "react";
import { block } from "bem-cn";

import "./accordion.styles.scss"

const AccordionItem = ({children, index, currentItem, accordionCollapsed, handlerClick}) => {
	const fc = block('flex-container');
	const ac = block('accordion')
	return(
		<div className={fc("flex-item",{fixed: currentItem!==index}).mix(fc({vertical: true}),ac("card"))}> 				
			<div className={fc("flex-item",{fixed: true}).mix(ac("card-header", {collapsed:currentItem!==index || accordionCollapsed }))}
			onClick={()=> handlerClick(index)}
			> 
			 {children[0]}
			</div>
			<div className={fc("flex-item").mix(fc({vertical: true}), ac("card-content", {collapsed:currentItem!==index || accordionCollapsed }))}> 
				{children[1]}
			</div>
		</div>
	)
}

export default AccordionItem