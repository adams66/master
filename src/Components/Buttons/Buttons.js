import "./Buttons.css"
import { Link } from "react-router-dom";


function Buttons(props) {
    return ( 
 <Link className="btn btn-theme p-custom fw-bold" to={props.url}>{props.text}</Link>
     );
}

export default Buttons;