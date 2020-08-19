import React, {Fragment} from "react";
import block from "bem-cn"
import "./demo-grid.styles.scss"

const getData = (lines) =>{
  let data = [];
  for (let 
     i= 0; 
     i < lines; 
    i++) {
    const element = {a: `1_${i}`,b: `2_${i}`, c: `3_${i}`};
    data.push(element);
  }

  return  data;
};

const DemoGrid = (props) => {
	const fc=block("flex-container");
  const dg=block("demo-grid");
  const cl = block("composed-list");
  
  const data = props.data?props.data: getData(20);
  console.log(data);
	return(
    <Fragment>
    <div className={fc("flex-item",{fixed: true}).mix(dg("header"))}>	{props.header}	</div>
    <div  className={fc("flex-item", { scrollable: true }).mix(dg)}>
	    <div className={fc("flex-item").mix(fc({vertical: true}), dg, cl("wrapper"))}>
        {data.map((item, index) => {
          return(
          <div className={fc("flex-item").mix(fc({horizontal: true}),cl("item", {selected:index===0}))}>	
            <div className={fc("flex-item",{fixed: true}).mix(cl("field",{smaller: true}))}>	{item.a}	</div>
            <div className={fc("flex-item").mix(cl("field",{smaller: true}))}>	{item.b}	</div>
            <div className={fc("flex-item",{fixed: true}).mix(cl("field",{smaller: true}))}>	{item.c}	</div>
          </div>
          )
        })	}
      </div>
    </div> 
    <div className={fc("flex-item",{fixed: true}).mix(dg("footer"))}>	{props.footer}	</div>
   </Fragment>
	)
  }
  
  export default DemoGrid