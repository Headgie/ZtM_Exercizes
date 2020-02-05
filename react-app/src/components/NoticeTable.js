import React, {Component} from "react";
import "./components.styles.css";
import "../containers/App.css";
import TableRow from "./TableRow";

class NoticeTable extends Component {
  constructor(props){
		super(props);
			this.state = {
				containerSize: 				{
					height: 110,
					width: 110
				}
			}
	}


	componentDidMount() {
		this.saveContainerSize();
	}
	
	saveContainerSize()  {
		const height = this.divRef.clientHeight;
		const width = this.divRef.clientWidth;
		this.setState(
			{ containerSize: 
				{
					height: height,
					width: width
				}
			}
		);
	}



	render() {
		const classes = "main-contents";
		// const data = [];
		const headStyles =
			"MuiTableCell-root MuiTableCell-head MuiTableCell-alignLeft MuiTableCell-sizeSmall MuiTableCell-stickyHeader";

			let curHeight = (this.state.containerSize.height - 10) + "px";
			let curWidth = (this.state.containerSize.width - 10)+ "px";
			var style = {
				height: curHeight,
				width: curWidth
			};
			const cellStyles =
			"MuiTableCell-root MuiTableCell-head MuiTableCell-alignLeft MuiTableCell-sizeSmall";
		return (
			<div ref={element => this.divRef = element} className="page-contents MuiPaper-elevation3 MuiPaper-rounded MuiPaper-root">
				<div className="border-bottom"></div>
				<div className="MuiTableContainer-root" style={style} >
					<table className="MuiTable-root jss1173 MuiTable-stickyHeader">
						<thead className="MuiTableHead-root">
							<tr className="MuiTableRow-root MuiTableRow-head">
								<th className={headStyles}>id</th>
								<th className={headStyles}>index</th>
								<th className={headStyles}>specification</th>
								<th className={headStyles}>testActNo</th>
							</tr>
						</thead>
						<tbody className="MuiTableBody-root">
							{this.props.data.map((product, i) => {
								return (
									<TableRow
										key={product.id}
										id={product.id}
										index={product.index}
										specification={product.specification}
										testActNo={product.testActNo}
									></TableRow>
								);
							})}
						</tbody>
					</table>
				</div>
				<div className="border-top"></div>
			</div>
		);
	};
};

export default NoticeTable;
