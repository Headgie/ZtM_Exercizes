import React from 'react';
import "./components.styles.css";
import "../containers/App.css";

const DemoUserTable = (props) => {
	const {data} = props;
	return (
		<div className="MuiPaper-elevation3 MuiPaper-rounded MuiPaper-root">
			<div className="MuiTableContainer-root">
				<table className="MuiTable-root jss1173">
				<thead className="MuiTableHead-root">
					<tr className="MuiTableRow-root MuiTableRow-head">
						<th className="MuiTableCell-root MuiTableCell-head MuiTableCell-alignLeft MuiTableCell-sizeSmall">
							Name
						</th>
						<th className="MuiTableCell-root MuiTableCell-head MuiTableCell-alignRight MuiTableCell-sizeSmall">
							Email
						</th>
						<th className="MuiTableCell-root MuiTableCell-head MuiTableCell-alignRight MuiTableCell-sizeSmall">
							Phone
						</th>
						<th className="MuiTableCell-root MuiTableCell-head MuiTableCell-alignRight MuiTableCell-sizeSmall">
							City
						</th>
					</tr>
				</thead>
				<tbody className="MuiTableBody-root">
					{data.map((user, i) => {
						return (
							<tr className="MuiTableRow-root MuiTableRow-hover" key={i}>
								<th className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall">
									{user.name}
								</th>
								<td className="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeSmall">
									{user.email}
								</td>
								<td className="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeSmall">
									{user.phone}
								</td>
								<td className="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeSmall">
									{user.address.city}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			</div>
		</div>
	)

}

export default DemoUserTable;