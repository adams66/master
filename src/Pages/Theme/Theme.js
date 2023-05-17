import { useEffect, useState } from "react";
import Container from "../../Components/Container/Container";
import ThemeJson from "../../key/theme.json";
import Particles from "../../Components/Particles/Particles";
import "./theme.css";







function Theme() {
 const [count,setCount] = useState(0);
 const image = ThemeJson.theme[count].image;
const dataImage = ThemeJson.theme[count].name;
 const themeCount = ThemeJson.theme.length -1;
 console.log(themeCount);




 

 useEffect(()=>{
    // var requestOptions = {
    //     method: 'GET',
    //     redirect: 'follow'
    //   };

    // fetch("https://homebase.dal-10.com/", requestOptions)
    // .then(response => response.json())
    // .then(result => console.log(result.Peter))
    // .catch(error => console.log('error', error));


 },[])





  


 function clickDown(){

    if(count > 0){
        setCount(count - 1);

    }
    else{
        console.log("min");
    }
 }


function clickUp(){
    if(count < themeCount){
        setCount(count + 1);

    }

    else{
        console.log("Maxed Out")
    }
}


function selectTheme(event){
    var themeSelect = event.target.getAttribute("data-image");

    localStorage.setItem("dal-theme",themeSelect);
    window.location.reload();

}

    return ( 
        <Container>
<div className="row">
    <div className="col">
<h1 className="text-light text-center fw-bold">Choose a Theme</h1>


<div style={{position:"fixed", left:"20px", top:"50%", cursor:"pointer"}}>
<i onClick={clickDown} class="ri-arrow-left-circle-line footerIcons rotate_icon"></i>

</div>

<div style={{position:"fixed", left: "50%", top:"50%",transform:"translate(-50%,-50%)"}}>
    <img data-image={dataImage} style={{cursor:"pointer", width: "100%", maxWidth:"75%", marginLeft:"auto", marginRight:"auto", display:"block"}} onClick={selectTheme} width="400px" src={"/themes/" + image} />
</div>

<div style={{position:"fixed", right:"20px", top:"50%", cursor: "pointer"}}>
<i onClick={clickUp} class="ri-arrow-right-circle-line footerIcons rotate_icon"></i>
</div>



    </div>

</div>

<Particles />
        </Container>




     );
}

export default Theme;