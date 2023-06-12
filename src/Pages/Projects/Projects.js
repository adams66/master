import Container from '../../Components/Container/Container';
import NavbarProjects from '../../Components/Navbar/Projects/NavbarProject';
import Footer from '../../Components/Footer/Footer';
import Particles from '../../Components/Particles/Particles';
import Card from '../../Components/Card/Card';
import webSites from '../../key/projects.json';
import { useEffect, useState } from 'react';

function Projects() {


	useEffect(() => {
		window.scroll(0, 0);

	}, []);

	var web = webSites[2].data;

	return (
		<div>
			<NavbarProjects />
			<Container>
				<div>
					<div className="row d-flex mb-4">
						<div className="col">
							<h3 className="text-center section_heading_color"> All Projects</h3>
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
				</div>

				<Footer />
				<Particles />
			</Container>
		</div>
	);
}

export default Projects;
