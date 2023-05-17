import "./Buttons.css"
import { Link } from "react-router-dom";


function Buttons(props) {
    return ( 
 <Link className="btn button_button_color button_border_color button_background_color p-custom fw-bold" to={props.url}>{props.text}</Link>
     );
}

export default Buttons;