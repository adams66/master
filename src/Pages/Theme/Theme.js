import { useEffect, useState } from 'react';
import Container from '../../Components/Container/Container';
import ThemeJson from '../../key/theme.json';
import Particles from '../../Components/Particles/Particles';
import './theme.css';

function Theme() {
	const [ count, setCount ] = useState(0);
	const image = ThemeJson.theme[count].image;
	const dataImage = ThemeJson.theme[count].name;
	const themeCount = ThemeJson.theme.length - 1;

    
    function cssVariable(variable, value){
        var updateColor = document.querySelector(":root").style.setProperty(variable,value);
        }

	function clickDown() {
		if (count > 0) {
			setCount(count - 1);
		}
	}

	function clickUp() {
		if (count < themeCount) {
			setCount(count + 1);
		}
	}

	function selectTheme(event) {
		var themeSelect = event.target.getAttribute('data-image');

		localStorage.setItem('dal-theme', themeSelect);
		window.location.reload();
	}


    // switch(count){
    //     case 0:
    //     document.querySelector('meta[name="theme-color"]').setAttribute('content', ThemeJson.theme[0].colors.background);
    //     cssVariable("--background",ThemeJson.theme[0].colors.background);
    //     cssVariable("--arrow",ThemeJson.theme[0].colors.arrow);

        
    //     break;
    //     case 1:
    //         document.querySelector('meta[name="theme-color"]').setAttribute('content', ThemeJson.theme[1].colors.background);
    //         cssVariable("--background",ThemeJson.theme[1].colors.background);
    //         cssVariable("--arrow",ThemeJson.theme[1].colors.arrow);

        
    //     break;
    //     case 2:
    //         document.querySelector('meta[name="theme-color"]').setAttribute('content', ThemeJson.theme[2].colors.background);
    //         cssVariable("--background",ThemeJson.theme[2].colors.background);
    //         cssVariable("--arrow",ThemeJson.theme[2].colors.arrow);
    //     break;

    // }









	return (
		<Container>
			<div className="row">
				<div className="col">
					<h1 className="text-light text-center fw-bold">Choose a Theme</h1>

					<div style={{ position: 'fixed', left: '20px', top: '50%', cursor: 'pointer' }}>
						<i onClick={clickDown} class="ri-arrow-left-circle-line footerIcons rotate_icon arrow" />
					</div>

					<div style={{ position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}>
						<img
							data-image={dataImage}
							style={{
								cursor: 'pointer',
								width: '100%',
								maxWidth: '75%',
								marginLeft: 'auto',
								marginRight: 'auto',
								display: 'block'
							}}
							onClick={selectTheme}
							width="400px"
							src={'/themes/' + image}
						/>
					</div>

					<div style={{ position: 'fixed', right: '20px', top: '50%', cursor: 'pointer' }}>
						<i onClick={clickUp} class="ri-arrow-right-circle-line footerIcons rotate_icon arrow" />
					</div>
				</div>
			</div>

			<Particles />
		</Container>
	);
}

export default Theme;
