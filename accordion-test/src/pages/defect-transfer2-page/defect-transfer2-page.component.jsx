import React, { Component, Fragment } from "react";
import { block } from "bem-cn";

import "./defect-transfer2-page.styles.scss";


class DefectTransferPage5 extends Component {
	constructor() {
		super();
		this.state ={
			filterStage: 0, //0- выбор листа 1-выбор операций  2-выбор операций на которых был брак и кодов брака
			filterClosed: false
	};

	}

	clickAccordionHandler =(index) => {
		let filterClosed = false;
		if (this.state.filterClosed) {filterClosed=false}
		else {filterClosed = this.state.filterStage===index?!this.state.filterClosed:this.state.filterClosed}


		this.setState({
			filterClosed,
			filterStage:index});
	}

	render(){

		const fc = block('flex-container');
		const ft = block('flex-toolbar');
		const dt = block('defects-transfer-page');
		const ac = block('accordion2')
		return(
			<div className={fc("flex-item").mix(fc({vertical: true}), dt)}>
				<div className={fc("flex-item",{fixed: true}).mix(dt("header"))} >
				222
				</div>
				<div className={fc("flex-item", {fixed: this.state.filterClosed}).mix(fc({vertical:true}), ac( {collapsed: this.state.filterClosed}))}
				>
						<div className={fc("flex-item",{fixed: true}).mix(ac("card-header"))}
						onClick={()=> this.clickAccordionHandler(0)}
						> 
							sjdfhushfu ysui
						</div>
						<div className={fc("flex-item").mix(fc({vertical:true}),ac("card-content", {collapsed:this.state.filterStage!==0 || this.state.filterClosed}))}> 
							
								<InnerGrid header="hhhh" data="datadata" footer="ffff"></InnerGrid>
							
						</div>
	
						<div className={fc("flex-item",{fixed: true}).mix(ac("card-header"))}
						onClick={()=> this.clickAccordionHandler(1)}
						> 
							sjdfhushfu ysui <br/> kdgy fsdruyi
						</div>
						<div className={fc("flex-item").mix(ac("card-content", {collapsed:this.state.filterStage!==1 || this.state.filterClosed }))}> 
							<div className={ac("content-container")}>	
								111111111sjdfhushfu ysui
							</div>
						</div>

						<div className={fc("flex-item",{fixed: true}).mix(ac("card-header"))}
						onClick={()=> this.clickAccordionHandler(2)}
						> 
						sjdfhushfu ysui
						</div>
						<div className={fc("flex-item").mix(ac("card-content", {collapsed:this.state.filterStage!==2 || this.state.filterClosed}))}> 
							<div className={ac("content-container")}>
							22222222222sjdfhushfu ysui <br/> kdgy fsdruyi<br/> kdgy fsdruyi<br/>
							</div>
						</div>

					</div>
					<div className={fc("flex-item").mix(dt("units"))} >
						units list
					
				</div>
			</div>
		)
	}
}

// этот работает
class DefectTransferPage22 extends Component {
	constructor() {
		super();
		this.state ={
			filterStage: 0, //0- выбор листа 1-выбор операций  2-выбор операций на которых был брак и кодов брака
			filterClosed: false
	};

	}

	clickAccordionHandler =(index) => {
		let filterClosed = false;
		if (this.state.filterClosed) {filterClosed=false}
		else {filterClosed = this.state.filterStage===index?!this.state.filterClosed:this.state.filterClosed}


		this.setState({
			filterClosed,
			filterStage:index});
	}

	render(){

		const fc = block('flex-container');
		const ft = block('flex-toolbar');
		const dt = block('defects-transfer-page');
		const ac = block('accordion2')
		return(
			<div className={fc("flex-item").mix(fc({vertical: true}), dt)}>
				<div className={fc("flex-item",{fixed: true}).mix(dt("header"))} >
				222
				</div>
				<div className={fc("flex-item",{fixed: true}).mix(fc({vertical:true}), ac( {collapsed: this.state.filterClosed}))}
				>
					<div className={fc("flex-item", {fixed: this.state.filterStage!==0}).mix(fc({vertical: true}),ac("card"))}> 
						<div className={fc("flex-item",{fixed: true}).mix(ac("card-header"))}
						onClick={()=> this.clickAccordionHandler(0)}
						> 
							sjdfhushfu ysui
						</div>
						<div className={fc("flex-item").mix(fc({vertical:true}),ac("card-content", {collapsed:this.state.filterStage!==0 || this.state.filterClosed}))}> 
							
								<InnerGrid header="hhhh" data="datadata" footer="ffff"></InnerGrid>
							
						</div>
					</div>
					<div className={fc("flex-item",{fixed: this.state.filterStage!==1}).mix(fc({vertical: true}),ac("card"))}> 				
						<div className={fc("flex-item",{fixed: true}).mix(ac("card-header"))}
						onClick={()=> this.clickAccordionHandler(1)}
						> 
							sjdfhushfu ysui <br/> kdgy fsdruyi
						</div>
						<div className={fc("flex-item").mix(ac("card-content", {collapsed:this.state.filterStage!==1 || this.state.filterClosed }))}> 
							<div className={ac("content-container")}>	
								111111111sjdfhushfu ysui
							</div>
						</div>
					</div>
					<div className={fc("flex-item",{fixed: this.state.filterStage!==2}).mix(fc({vertical: true}),ac("card"))}> 
						<div className={fc("flex-item",{fixed: true}).mix(ac("card-header"))}
						onClick={()=> this.clickAccordionHandler(2)}
						> 
						sjdfhushfu ysui
						</div>
						<div className={fc("flex-item").mix(ac("card-content", {collapsed:this.state.filterStage!==2 || this.state.filterClosed}))}> 
							<div className={ac("content-container")}>
							22222222222sjdfhushfu ysui <br/> kdgy fsdruyi<br/> kdgy fsdruyi<br/>
							</div>
						</div>
					</div>
					</div>
					<div className={fc("flex-item").mix(dt("units"))} >
						units list
					
				</div>
			</div>
		)
	}
}

class DefectTransferPage2 extends Component {
	constructor() {
		super();
		this.state ={
			filterStage: 0, //0- выбор листа 1-выбор операций  2-выбор операций на которых был брак и кодов брака
			filterClosed: false
	};

	}

	clickAccordionHandler =(index) => {
		let filterClosed = false;
		if (this.state.filterClosed) {filterClosed=false}
		else {filterClosed = this.state.filterStage===index?!this.state.filterClosed:this.state.filterClosed}


		this.setState({
			filterClosed,
			filterStage:index});
	}

	render(){

		const fc = block('flex-container');
		const ft = block('flex-toolbar');
		const dt = block('defects-transfer-page');
		const ac = block('accordion2')
		return(
			<div className={fc("flex-item").mix(fc({vertical: true}), dt)}>
				<div className={fc("flex-item",{fixed: true}).mix(dt("header"))} >
				222
				</div>
				<Accordion collapsed={this.state.filterClosed}>
					<div className={fc("flex-item", {fixed: this.state.filterStage!==0}).mix(fc({vertical: true}),ac("card"))}> 
						<div className={fc("flex-item",{fixed: true}).mix(ac("card-header"))}
						onClick={()=> this.clickAccordionHandler(0)}
						> 
							sjdfhushfu ysui
						</div>
						<div className={fc("flex-item").mix(fc({vertical:true}),ac("card-content", {collapsed:this.state.filterStage!==0 || this.state.filterClosed}))}> 
							
								<InnerGrid header="hhhh" data="datadata" footer="ffff"></InnerGrid>
							
						</div>
					</div>
					
					<div className={fc("flex-item",{fixed: this.state.filterStage!==1}).mix(fc({vertical: true}),ac("card"))}> 				
						<div className={fc("flex-item",{fixed: true}).mix(ac("card-header"))}
						onClick={()=> this.clickAccordionHandler(1)}
						> 
							sjdfhushfu ysui <br/> kdgy fsdruyi
						</div>
						<div className={fc("flex-item").mix(ac("card-content", {collapsed:this.state.filterStage!==1 || this.state.filterClosed }))}> 
							<div className={ac("content-container")}>	
								111111111sjdfhushfu ysui
							</div>
						</div>
					</div>
					<div className={fc("flex-item",{fixed: this.state.filterStage!==2}).mix(fc({vertical: true}),ac("card"))}> 
						<div className={fc("flex-item",{fixed: true}).mix(ac("card-header"))}
						onClick={()=> this.clickAccordionHandler(2)}
						> 
						sjdfhushfu ysui
						</div>
						<div className={fc("flex-item").mix(ac("card-content", {collapsed:this.state.filterStage!==2 || this.state.filterClosed}))}> 
							<div className={ac("content-container")}>
							22222222222sjdfhushfu ysui <br/> kdgy fsdruyi<br/> kdgy fsdruyi<br/>
							</div>
						</div>
					</div>
					<AccordionItem index={3} currentItem={this.state.filterStage}
						accordionCollapsed={this.state.filterClosed} handlerClick={this.clickAccordionHandler.bind(this)}>
						<div> header </div>
						<div> content </div>
					
					</AccordionItem>

					</Accordion>
					<div className={fc("flex-item").mix(dt("units"))} >
						units list
					
				</div>
			</div>
		)
	}
}

const Accordion = ({children, collapsed}) => {
	const ac = block('accordion2');
	const fc = block('flex-container');
	return(
		<div className={fc("flex-item",{fixed: true}).mix(fc({vertical:true}), ac( {collapsed: collapsed}))}>
			{children} 
		</div>)
}

const AccordionItem = ({children, index, currentItem, accordionCollapsed, handlerClick}) => {
	const fc = block('flex-container');
	const ac = block('accordion2')
	return(
		<div className={fc("flex-item",{fixed: currentItem!==index}).mix(fc({vertical: true}),ac("card"))}> 				
			<div className={fc("flex-item",{fixed: true}).mix(ac("card-header"))}
			onClick={()=> handlerClick(index)}
			> 
			 {children[0]}
			</div>
			<div className={fc("flex-item").mix(ac("card-content", {collapsed:currentItem!==index || accordionCollapsed }))}> 
				<div className={ac("content-container")}>	
					{children[1]}
				</div>
			</div>
		</div>
	)
}

const InnerGrid = (props) => {
	const fc=block("flex-container")
	const ig=block("inner-grid")
	return(
		<div className={fc("flex-item").mix(fc({vertical: true}), ig)}>
			<div className={fc("flex-item",{fixed: true}).mix(ig("header"))}>	{props.header}	</div>
			<div className={fc("flex-item").mix(ig("data"))}>	{props.data}	</div>
			<div className={fc("flex-item",{fixed: true}).mix(ig("footer"))}>	{props.footer}	</div>
		</div>
	)
	}
	
class DefectTransferPage3 extends Component {
	constructor() {
		super();
		this.state ={
			filterStage: 0, //0- выбор листа 1-выбор операций  2-выбор операций на которых был брак и кодов брака
			filterClosed: false
	};

	}

	clickAccordionHandler =(index) => {
		let filterClosed = false;
		if (this.state.filterClosed) {filterClosed=false}
		else {filterClosed = this.state.filterStage===index?!this.state.filterClosed:this.state.filterClosed}


		this.setState({
			filterClosed,
			filterStage:index});
	}

	render(){

		const fc = block('flex-container');
		const ft = block('flex-toolbar');
		const dt = block('defects-transfer-page');
		const ac = block('accordion')
		return(
			<div className={fc("flex-item").mix(fc({vertical: true}), dt)}>
				<div className={fc("flex-item",{fixed: true}).mix(dt("header"))} >
				222
				</div>
				<div className={fc("flex-item",{fixed: true}).mix(ac({collapsed: this.state.filterClosed}))}
					>
					<div className={ac("card", {collapsed: this.state.filterStage!==0 })}
						style={{backgroundColor: "lightblue"}}
						>
						<div className={ac("header")} onClick={()=>  this.clickAccordionHandler(0)}>jkfh </div>
						<div className={ac("body", {hidden: this.state.filterStage!==0 || this.state.filterClosed})}>	
							<div className={fc("flex-item").mix(fc({vertical: true}))}>
								sdfyhuisd h <br/> sdfyhuisd h <br/>sdfyhuisd h <br/>sdfyhuisd h <br/>sdfyhuisd h <br/>sdfyhuisd h <br/>sdfyhuisd h <br/>sdfyhuisd h <br/>sdfyhuisd h <br/>sdfyhuisd h <br/>sdfyhuisd h <br/>sdfyhuisd h <br/>sdfyhuisd h <br/>sdfyhuisd h <br/>sdfyhuisd h <br/>sdfyhuisd h <br/>sdfyhuisd h <br/>sdfyhuisd h <br/>sdfyhuisd h <br/>sdfyhuisd h <br/>sdfyhuisd h <br/>sdfyhuisd h <br/>sdfyhuisd h <br/>
							</div>
						</div>
					</div>
					<div className={ac("card", {collapsed: this.state.filterStage!==1})}
					style={{backgroundColor: "lightgrey"}}
					>
						<div className={ac("header")} onClick={()=>  this.clickAccordionHandler(1)}> djkghkdjfh yhdf</div>
						<div className={ac("body", {hidden: this.state.filterStage!==1 || this.state.filterClosed})}>	
							<div className={ac("content-container")}>
								iuisduf iousiodfu
							</div>
						</div>
					</div>
					<div className={ac("card", {collapsed: this.state.filterStage!==2})}
					
					style={{backgroundColor: "lightpink"}}
					>
						<div className={ac("header")} onClick={()=>  this.clickAccordionHandler(2)}>
							iklhsfh hufuieiu<br/>  hufuieiu<br/> hufuieiu<br/></div>
							<div className={ac("body", {hidden: this.state.filterStage!==2 || this.state.filterClosed})}>	
								<div className={ac("content-container")}>
									sdiusdi uysdf  hufuieiu<br/> hufuieiu<br/> hufuifslhs udfysuidfy hufuieiu<br/>fslhs udfysuidfy hufuieiu<br/>fslhs udfysuidfy hufuieiu<br/>fslhs udfysuidfy hufuieiu<br/>fslhs udfysuidfy hufuieiu<br/>fslhs udfysuidfy hufuieiu<br/>fslhs udfysuidfy hufuieiu<br/>fslhs udfysuidfy hufuieiu<br/>fslhs udfysuidfy hufuieiu<br/>fslhs udfysuidfy hufuieiu<br/>fslhs udfysuidfy hufuieiu<br/>fslhs udfysuidfy hufuieiu<br/>fslhs udfysuidfy hufuieiu<br/>eiu<br/>
								</div>
							</div>
					</div>
					<div className={ac("card", {collapsed: this.state.filterStage!==3})}
					style={{backgroundColor: "lightseagreen"}}
					>
					<div className={ac("header")} onClick={()=>  this.clickAccordionHandler(3)}>fslhs udfysuidfy </div>
					<div className={ac("body", {hidden: this.state.filterStage!==3 || this.state.filterClosed})}>
						<div className={ac("content-container")}>
							sfkdy siofuyiosdy fi hufuieiu<br/> hufuieiu<br/> hufuieiu<br/> hufuieiu<br/>
						</div>
					</div>
					</div>
				</div>
				<div className={fc("flex-item").mix(dt("units"))} >
					units list
				
				</div>
			</div>
		)
	}
}

const AccordionItem2 = (props) => {
	const {expanded, hidden, enabled, collapsedText} = props;
	const fc = block("flex-container");
	const ac = block("accordion");
	return(
		<Fragment>
			{!props.children || props.children.length!==2? <div></div>:
				<Fragment>
					<div className={fc("flex-item",{fixed: true}).mix(ac("header", {hidden: hidden}))} >
						<Fragment> {props.children[0]}</Fragment>
					</div>
					<div className={fc("flex-item",{fixed: true}).mix(fc({vertical: true}), ac("body", {hidden: !expanded}))} >
					{props.children[1]}
					</div> 
				</Fragment>
			}
		</Fragment>
	)
}


export default DefectTransferPage2;

