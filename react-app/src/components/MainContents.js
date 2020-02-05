import React from "react";
import "./components.styles.css";
import "../containers/App.css";
import "./NoticeTable";
import UserTable from "./UserTable";
import NoticeTable from "./NoticeTable";

const MainContents = props => {
	// const classes = "MuiPaper-root MuiAppBar-root MuiAppBar-positionAbsolute makeStyles-appBar-4 MuiAppBar-colorPrimary MuiPaper-elevation4";
	const classes = "main-contents MuiPaper-elevation3 MuiPaper-rounded MuiPaper-root";
	const { data, demoUsers, filterVisible, handleFilterToggle } = props;
	//  "MuiAppBar-root  makeStyles-appBar-4 MuiAppBar-colorSecondary MuiPaper-elevation4";
	const filterClasses = "filter" + (filterVisible?" filter-visible":" filter-hidden");
	return (
		<main className={classes}>
			<div className="page-caption">
				<h2>Журнал предъявления м/сх в ОУК</h2>
				<button 
				className="filterToggleButton"
				onClick={handleFilterToggle} 
				>Фильтр</button>
			</div>
			<div
        className=	{filterClasses}
      >
			jsdfhjhsdj<br/>
			skfjsjdfks
			</div>
			<NoticeTable 
				data={data}
				windowHeight={props.windowHeight}
				windowWidth={props.windowWidth}
				>
			</NoticeTable>

			
		</main>
	);
};

export default MainContents;
