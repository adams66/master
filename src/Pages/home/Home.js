import Container from '../../Components/Container/Container';
import NavbarHome from '../../Components/Navbar/Home/NavbarHome';
import Buttons from '../../Components/Buttons/Buttons';
import Card from '../../Components/Card/Card';
import Footer from '../../Components/Footer/Footer';
import Particles from '../../Components/Particles/Particles';
import webSites from "../../key/projects.json";

function Home() {
var web = webSites[2].data.slice(0,3);





	return (
		<div>
		<NavbarHome />
		<Container>
		
				<div style={{height: "100vh"}} className="row p-2 d-flex ">
					<div className="col-12 d-flex flex-column justify-content-center ">
						<h6 className="mb-4" style={{color: "#fc6759", fontWeight:"bolder",}}>Hi, my name is</h6>
						<h1 style={{fontWeight:"bolder", color: "#ccd6f6"}}>Dalton Adams</h1>
						<h1 style={{fontWeight:"bolder", color: "#8892b0"}}>I build things for the web.</h1>
						<p style={{maxWidth: "400px"}} className="mb-4">
							I'm a web developer specializing in frontend layouts, automation and administration. Every
							problem that we face has the opportunity to be fixed.
						</p>
						<div>
							<Buttons url="#projects" text="Check out My Projects" />
						</div>
					</div>
				</div>

				<div id="about" className="row d-flex justify-content-center mt-5 mb-5">
					<div className="col-12 col-md-6 d-flex flex-column">
						<h3>
							<span style={{color:"#fc6759"}}>01. </span>About Me
						</h3>
						<p>
							Hello! My name is Dalton and I enjoy doing projects that involve the web. My interest in web
							development started when I took a css course and I haven't stopped from there. I like to
							code things from scratch, and enjoy bringing ideas to life in the browser.
						</p>
						<p>
							My experience consists of creating responsive layouts with the power of html, css, and
							javascript. I also have experience working with databaes and API integrations using
							technologies like php and mysql.
						</p>
						<p>
							I genuinely care about people, and love helping fellow designers work on their craft. Love
							to hear more about your web project!
						</p>
					</div>

					<div className="col-12 col-md-6 justify-content-center ">
						<img width="100%" src="/me.jpg" />
					</div>
				</div>

				<div id="projects" className="row mb-4">
					<div style={{color: "#ccd6f6"}} className="col-12 d-flex flex-column  ">
						<h3 className="text-center ">
							<span style={{color:"#fc6759"}}>02. </span>Projects
						</h3>
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

				<div className="row mt-5 mb-5">
					<div className="col d-flex justify-content-center">
						<Buttons url="/projects" text="All Projects" />
					</div>
				</div>

				<div id="contact" className="row d-flex justify-content-center ">
					<div className="col-12 col-md-6 p-4">
						<div className="d-flex align-items-center flex-column">
							<h3 style={{color: "#ccd6f6"}} className="text-center">
								<span style={{color:"#fc6759"}}>03. </span>Get In Touch
							</h3>
							<p className="text-center">
								Every great developer you know got there by solving problems they were unqualified to
								solve until they actually did it. Anything is possible!
							</p>
						</div>
					</div>
				</div>

				<div className="row mb-5">
				<div className="col-12">
						<div className="d-flex justify-content-center">
								<Buttons text="Email Me" />
						</div>
					</div>
				</div>




				<Footer />
				<Particles />
				</Container>
				</div>
	);
}

export default Home;