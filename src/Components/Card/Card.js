function Card(props) {
	return (
		<div style={{background:"none", border:"1px solid #55f7f7", borderRadius:"10px"}} className="card text-light p-4 h-100">
			<div className="d-flex justify-content-between">
			<i style={{fontSize:"35px", color:"#fc6759"}} className="ri-folder-line icon-size cardFolder"></i>
			<a style={{textDecoration:"none"}} href={props.link}><i style={{fontSize:"35px", color: "white"}} className="ri-external-link-line cardLinkIcon icon-size"></i></a>
			
			</div>
			<div className="card-body p-0 mb-2">
				<h5 className="card-title fw-bold">{props.title}</h5>
				<p className="card-text">
				{props.about}
				</p>
			</div>
			<div>
				<ul className="d-flex gap-3 p-0 list-group-horizontal">
					<li className="list-group-item ">{props.tech1}</li>
					<li className="list-group-item">{props.tech2}</li>
					<li className="list-group-item">{props.tech3}</li>
				</ul>
			</div>
		</div>
	);
}

export default Card;
