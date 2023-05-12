import "./Buttons.css"

function Buttons(props) {
    return ( 
<a  href={props.url} className="btn btn-theme p-custom fw-bold">{props.text}</a>

     );
}

export default Buttons;