import React from "react";

import "./styles/flex-layout.scss";
import "./styles/flex-toolbar.scss";
import "./styles/composed-list.scss";
import "./App.scss";

import { Route, Switch } from "react-router-dom";
import { block } from "bem-cn";

import DefectTransferPage from "./pages/defect-transfer-page/defect-transfer-page.component";

function App() {
  const fc = block('flex-container');
  const app = block('app');
	return (
		<div className={fc({vertical:true}).mix(app)}>
			<Switch>
				<Route exact path="/" component={DefectTransferPage} />
			</Switch>
		</div>
	);
}

export default App;
