function Card(props) {
	return (
		<div  style={{background:"none",  borderRadius:"10px"}} className="card text-light card_border_color p-4 h-100">
			<div className="d-flex justify-content-between">
			<i style={{fontSize:"35px"}} className="ri-folder-line icon-size cardFolder card_folder_color"></i>
			<a style={{textDecoration:"none"}} href={props.link}><i style={{fontSize:"35px"}} className="ri-external-link-line  icon-size card_nav_icon_color"></i></a>
			
			</div>
			<div className="card-body p-0 mb-2">
				<h5 className="card-title fw-bold card_title_color">{props.title}</h5>
				<p className="card-text paragraph_color">
				{props.about}
				</p>
			</div>
			<div>
				<ul className="d-flex gap-3 p-0 list-group-horizontal ">
					<li className="list-group-item card_technology_color">{props.tech1}</li>
					<li className="list-group-item card_technology_color">{props.tech2}</li>
					<li className="list-group-item card_technology_color">{props.tech3}</li>
				</ul>
			</div>
		</div>
	);
}

export default Card;
