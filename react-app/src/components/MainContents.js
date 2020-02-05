import React from "react";
import "./components.styles.css";
import "../containers/App.css";
import "./NoticeTable";
import UserTable from "./UserTable";
import NoticeTable from "./NoticeTable";

const MainContents = props => {
	// const classes = "MuiPaper-root MuiAppBar-root MuiAppBar-positionAbsolute makeStyles-appBar-4 MuiAppBar-colorPrimary MuiPaper-elevation4";
	const classes = "main-contents";
	const { data, demoUsers } = props;
	//  "MuiAppBar-root  makeStyles-appBar-4 MuiAppBar-colorSecondary MuiPaper-elevation4";
	return (
		<main className={classes}>
			<div className="page-caption">
				<h2>Журнал предъявления м/сх в ОУК</h2>
			</div>
			{/*
					ksdjhfj sfhs <br/>ksdjhfj sfhs <br/>ksdjhfj sfhs <br/>ksdjhfj sfhs <br/>ksdjhfj sfhs <br/>ksdjhfj sfhs <br/>ksdjhfj sfhs <br/>ksdjhfj sfhs <br/>ksdjhfj sfhs <br/>
				*/}

			<NoticeTable data={data}></NoticeTable>
		</main>
	);
};

export default MainContents;
