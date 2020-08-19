import React, { useState } from "react";
import { block } from 'bem-cn';

import "./search-bar.styles.scss";

/*
	Компонент "Строка поиска"
	Функционал - полоатель вводит текст поиска и нажимает Enter, либо  кнопку поиска, 
	что приводит к вызову функции performSearch из пропсов.
*/
const SearchBar = (props) => {
	/* Хук состояния */
	const [searchText, setSearchText] = useState("");

	const {placeholder, searchButtonCaption, performSearch } = props;
	const sb = block('search-bar');
	const fc = block('flex-container');		

	const searchButtonOnClick = () => {
		if (searchText==="") return;
		performSearch(searchText);
	}

	const textFieldOnKeyPress = (e) => {
		if (searchText==="") return;
		if (e.key === "Enter") {
			performSearch(searchText);
		}
	}
	return(
		<div className={sb.mix(fc('flex-item'), fc({horizontal: true}))}>
			<div className={sb('text-field').mix(fc('flex-item'), fc({horizontal: true}))}>
				<input 
					className={sb('input').mix(fc('flex-item'))} 
					placeholder={placeholder}
					onChange={(e)=>setSearchText(e.target.value)}
					onKeyPress={textFieldOnKeyPress}
					value={searchText}>
				</input>
				<button 
					className={sb('clear-text-button').mix(fc('flex-item', {fixed: true}))}
					onClick={()=>{setSearchText("");}}>
					X
				</button>
			</div>
			<button 
				className={sb('submit-button', {disabled: searchText===""})}
				onClick={searchButtonOnClick}>
				{searchButtonCaption}
			</button>
		</div>
	)
}

export default SearchBar;