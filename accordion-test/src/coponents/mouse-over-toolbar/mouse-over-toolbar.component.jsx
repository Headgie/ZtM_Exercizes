import React, { Fragment} from "react";
import "./mouse-over-toolbar.styles.scss"
import block from "bem-cn"

const MouseOverToolbar = (props) => {
		const fc = block("flex-container");
		const mt=block("mouse-over-toolbar");

		return(
			<div onMouseEnter={()=>props.handlerMouseOverChange(1)} onMouseLeave={()=>props.handlerMouseOverChange(0)} {...props} >
			{props.children}
			</div>
		)


}
export default MouseOverToolbar;