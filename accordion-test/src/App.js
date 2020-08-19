import React from "react";

import "./styles/flex-layout.scss";
import "./styles/flex-toolbar.scss";
import "./styles/composed-list.scss";
import "./App.scss";

import { Route, Switch } from "react-router-dom";
import { block } from "bem-cn";

import DefectTransferPage2 from "./pages/defect-transfer2-page/defect-transfer2-page.component";
import AccTestPage from "./pages/acc-test/acc-test.component";

function App() {
  const fc = block('flex-container');
  const app = block('app');
	return (
		<div className={fc({vertical:true}).mix(app)}> 
			<Switch>
				<Route exact path="/" component={AccTestPage} />
				<Route exact path="/2" component={DefectTransferPage2} />
			</Switch>
		</div>
	);
}

export default App;
