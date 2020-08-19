import React, { Component, Fragment } from "react";
import { block } from "bem-cn";

import Accordion from "../../components/accordion/accordion.component";
import AccordionItem from "../../components/accordion/accordion-item.component";

import "./acc-test.styles.scss";


class AccTestPage extends Component {
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
    const at = block('acc-test-page');


		return(
      <div className={fc("flex-item").mix(fc({vertical: true}))}>
      <div className={fc("flex-item",{fixed: true}).mix(at("header"))} >
      222
      </div>
      <div className={fc("flex-item",{fixed: true}).mix(fc({vertical:true}))}
      >

      <Accordion collapsed={this.state.filterClosed}>
      <AccordionItem index={0} currentItem={this.state.filterStage}
    accordionCollapsed={this.state.filterClosed} handlerClick={this.clickAccordionHandler.bind(this)}>
        <div>header</div>
        <div></div>
      </AccordionItem>
      <AccordionItem index={1} currentItem={this.state.filterStage}
    accordionCollapsed={this.state.filterClosed} handlerClick={this.clickAccordionHandler.bind(this)}>
        <div>header</div>
        <div></div>
      </AccordionItem>
      <AccordionItem index={2} currentItem={this.state.filterStage}
    accordionCollapsed={this.state.filterClosed} handlerClick={this.clickAccordionHandler.bind(this)}>
        <div>header</div>
        <div></div>
      </AccordionItem>      
      </Accordion>
      </div>
      <div className={fc("flex-item").mix(at("section"))} >
      units list
    
      </div>
      </div>
      )
    }
  }
  
  export default AccTestPage