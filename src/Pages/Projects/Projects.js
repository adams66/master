import Container from "../../Components/Container/Container";
import NavbarProjects from "../../Components/Navbar/Projects/NavbarProject";
import Particles from "../../Components/Particles/Particles";
import Card from "../../Components/Card/Card";
import webSites from "../../key/projects.json";



function Projects() {

var web = webSites[2].data;

console.log(web);


    return ( 
        <div>
        <NavbarProjects /> 
    <Container >``
       
<div>

<div className="row d-flex mb-4">
    <div className="col">

   
<h3 style={{color: "#ccd6f6"}} className="text-center"> All Projects</h3>
</div>
</div>



<div className="row d-flex">
{web.map((data) =>{

return(
    <div className="col-12 col-md-6 col-lg-4 mb-3">
    <Card title={data.Name} about={data.About} tech1={data.tech.tech1} tech2={data.tech.tech2} tech3={data.tech.tech3} />
    </div>
) 



})}


				</div>




    
</div>


<Particles />
    </Container>
    </div>


     );
}

export default Projects;