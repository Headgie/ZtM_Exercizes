import React from "react";
import "./collection-item.component.styles.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => (
	<div className="collection-item">
		<div
			className="image"
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
		></div>
		<div className="collection-footer">
			<span classNam="name">{name}</span>
			<span classNam="price">{price}</span>
		</div>
	</div>
);

export default CollectionItem;
