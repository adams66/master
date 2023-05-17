import { useEffect } from 'react';
import Container from '../../Components/Container/Container';
import NavbarHome from '../../Components/Navbar/Home/NavbarHome';
import Buttons from '../../Components/Buttons/Buttons';
import Card from '../../Components/Card/Card';
import Footer from '../../Components/Footer/Footer';
import Particles from '../../Components/Particles/Particles';
import webSites from '../../key/projects.json';

function Home() {
	var web = webSites[2].data.slice(0, 3);
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<div>
			<NavbarHome />
			<Container>
				<div style={{ height: '100vh' }} className="row p-2 d-flex ">
					<div className="col-12 d-flex flex-column justify-content-center ">
						<h6 className="mb-4 intro_hi_color" style={{ fontWeight: 'bolder' }}>
							Hi, my name is
						</h6>
						<h1 className="my_name_color" style={{ fontWeight: 'bolder' }}>
							Dalton Adams
						</h1>
						<h1 className="slogan_color" style={{ fontWeight: 'bolder' }}>
							I build things for the web.
						</h1>
						<p style={{ maxWidth: '400px' }} className="mb-4 paragraph_color">
							I'm a web developer specializing in frontend layouts, automation and administration. Every
							problem that we face has the opportunity to be fixed.
						</p>
						<div>
							<a
								className="btn button_button_color button_border_color button_background_color p-custom fw-bold"
								href="#projects"
							>
								Check out my projects
							</a>
						</div>
					</div>
				</div>

				<div id="about" className="row d-flex justify-content-center mt-5 mb-5">
					<div className="col-12 col-md-6 d-flex flex-column mb-3 mb-md-0">
						<h3 className="section_heading_color">
							<span className="section_number_color">01. </span>About Me
						</h3>
						<p className="paragraph_color">
							Hello! My name is Dalton and I enjoy doing projects that involve the web. My interest in web
							development started when I took a css course and I haven't stopped from there. I like to
							code things from scratch, and enjoy bringing ideas to life in the browser.
						</p>
						<p className="paragraph_color">
							My experience consists of creating responsive layouts with the power of html, css, and
							javascript. I also have experience working with databaes and API integrations using
							technologies like php and mysql.
						</p>
						<p className="paragraph_color">
							I genuinely care about people, and love helping fellow designers work on their craft. Love
							to hear more about your web project!
						</p>
					</div>

					<div className="col-12 col-md-6 justify-content-center ">
						<img width="100%" src="/me.jpg" />
					</div>
				</div>

				<div id="projects" className="row mb-4">
					<div className="col-12 d-flex flex-column  ">
						<h3 className="text-center section_heading_color ">
							<span className="section_number_color">02. </span>Projects
						</h3>
					</div>
				</div>

				<div className="row d-flex">
					{web.map((data) => {
						return (
							<div className="col-12 col-md-6 col-lg-4 mb-3">
								<Card
									link={data.link}
									title={data.Name}
									about={data.About}
									tech1={data.tech.tech1}
									tech2={data.tech.tech2}
									tech3={data.tech.tech3}
								/>
							</div>
						);
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
							<h3 className="text-center section_heading_color">
								<span className="section_number_color">03. </span>Get In Touch
							</h3>
							<p className="text-center paragraph_color">
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
