import React from "react";
import "./components.styles.css";

// Компонент строки таблицы (функциональный компонент)
const TableRow = (props) => {
	const { id, index, specification, testActNo } = props;
	const cellStyles = "MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft MuiTableCell-sizeSmall";
  // const handleClick =() => {
  //   onClick(props);
  // }
  return (
    <tr className={"MuiTableRow-root MuiTableRow-hover"} 
			key={id} >
			<td className={cellStyles}>{id}</td>
			<td className={cellStyles}>{index}</td>
			<td className={cellStyles}>{specification}</td>
			<td className={cellStyles}>{testActNo}</td>
    </tr>
  );
};

export default TableRow;
