import { useEffect } from "react";
import Container from "../../Components/Container/Container";
import {Navigate, useNavigate} from "react-router-dom";

function NotFound() {
const navigate = useNavigate();


function delayFunction(){


    setTimeout(()=>{

        navigate("/");


    },4000)

}


useEffect(()=>{
    delayFunction();
},[])






    return ( 
<Container>
<div style={{height: "100vh"}} className="  row">
    <div className="col d-flex justify-content-center align-items-center">
    <h4>Well. This awkward! </h4>
    <h4>Let me Fix that</h4>
    </div>



</div>





</Container>

     );
}

export default NotFound;


