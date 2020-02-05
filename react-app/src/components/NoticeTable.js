import React, { Component } from "react";
import "./components.styles.css";
import "../containers/App.css";
import TableRow from "./TableRow";

class NoticeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containerHeight: 0,
      containerWidth: 0,
      windowHeight: 0,
      windowWidth: 0,
      needRender: true
    };
  }

  componentDidMount() {
    const height = this.divRef.clientHeight;
    const width = this.divRef.clientWidth;
    this.setState({
      containerHeight: height,
      containerWidth: width
    });
  }

  saveContainerSize() {}

  render() {
		if ((this.state.windowHeight === 0 || !this.state.windowHeight )
			&& this.props.windowHeight
		 && this.state.needRender) {
      this.setState({
        windowHeight: this.props.windowHeight,
				windowWidth: this.props.windowWidth,
				needRender: false
      });
    }
    const classes = "main-contents";
    // const data = [];
    const headStyles =
			"MuiTableCell-root MuiTableCell-head MuiTableCell-alignLeft MuiTableCell-sizeSmall MuiTableCell-stickyHeader";
			let curHeight = 0; //this.divRef ? this.divRef.clientHeight - 12 + "px" : "10px";
			let curWidth = 0; //this.divRef ? this.divRef.clientWidth + "px" : "10px";
		if (!this.state.needRender)
		{
			curHeight = this.state.containerHeight - (this.state.windowHeight - this.props.windowHeight) - 12;
			curWidth = this.state.containerWidth - (this.state.windowWidth - this.props.windowWidth);
		}

			

    //let curHeight = (this.state.containerSize.height - 12) + "px";
    //let curWidth = (this.state.containerSize.width )+ "px";
    var style = {
      height: curHeight,
      width: curWidth
    };

    return (
      <div
        ref={element => (this.divRef = element)}
        className="page-contents" // MuiPaper-elevation3 MuiPaper-rounded MuiPaper-root"
      >
        <div className="border-bottom"></div>
        <div className="MuiTableContainer-root" style={style}>
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
  }
}

export default NoticeTable;
