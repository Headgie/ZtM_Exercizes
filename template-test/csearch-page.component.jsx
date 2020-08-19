import React, { Component } from 'react';
import './csearch-page.styles.scss';
import '../../styles/flex-layout.scss'
import { block } from 'bem-cn';
import CSButton from '../../components/button/csbutton.component';
import Caption from '../../components/caption/caption.componenet';
import CSearchString from '../../components/search-string/csearch-string.component';


class CSearchPage extends Component { 
	constructor() {
		super();
		this.state = {
			title: "Поиск СЛ по содержимому",
			titleButton: "Найти",
			placeholder: "Введите текст для поиска",
		};
	}

	

	

	render() {

		const CSearchStringStyle = {
			background: "#fff8f1",
			padding: "5px",
			border: "none",
			flexGrow: "1",
			
		};
		
		const CSearchStringBtnStyle = {
			background: "#fff8f1",
			padding: "5px",
			border: "none",
						
		};

		const CSButtonStyle = {
			marginLeft: "5px",
			background: "#bcf1f4",
			border: "1px solid #7ed6d9",
			borderRadius: "2px",
			padding: "5px 10px",
			color: "#4e7072",
			cursor: "pointer",  
		};
	
		const fc = block('flex-container');		
		const cp = block('csearch-page');		
	
		return (
			// компонент вложен во flex, поэтому он является flex-item
			<div className={cp.mix(fc("flex-item")).mix(fc({vertical: true})) }>
				
					<Caption 
						title={this.state.title}
					/>
			
				<div className={cp('filter').mix(fc('flex-item', {auto: true}), fc({horizontal: true}))}>
					<div className={cp('filter-set').mix(fc({vertical: true}))}>
						<div className={cp('filter-input').mix(fc({horizontal: true}))}>
							<div className={cp('filter-input-bar').mix(fc({horizontal: true}))}>
								<CSearchString 
									style={CSearchStringStyle}
									placeholder={this.state.placeholder}
									// onChangeInput={this.handlerInput.bind(this)}
									// onKeyPressEnter={this.handlerKeyPress.bind(this)} 
								/>								
								<CSButton 
									style={CSearchStringBtnStyle}
									titleButton="x"
								/>
							</div>
							<CSButton 
								style={CSButtonStyle}
								titleButton={this.state.titleButton}
							/>
						</div>
						
						<div className={cp('filter-checkbox-bar').mix(fc('flex-item', {auto: true}))}>checkbox</div>
					</div>
					<div className={fc('flex-item', {auto: true})}></div>
				</div>
				<div className={cp('result').mix(fc('flex-item'), fc({vertical: true}))}>
					<div className={cp('result-count').mix(fc('flex-item', {auto: true}))}>result count</div>
					<div className={cp('result-list')}>result list</div>
				</div>
			</div>
		)
	}
}
export default CSearchPage;