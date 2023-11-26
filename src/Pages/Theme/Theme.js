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

		if(count ==0){
			setCount(themeCount)
		}
	}

	function clickUp() {
		if (count < themeCount) {
			setCount(count + 1);
		}

		if (count == themeCount) {
			setCount(0);
		}
	}

	async function selectTheme(event) {
		var themeSelect = event.target.getAttribute('data-image');

		localStorage.setItem('dal-theme', themeSelect);
		window.location.reload();
	}


    switch(count){
        case 0:
        document.querySelector('meta[name="theme-color"]').setAttribute('content', ThemeJson.theme[0].colors.background);
        cssVariable("--background",ThemeJson.theme[0].colors.background);
        cssVariable("--arrow",ThemeJson.theme[0].colors.arrow);
		cssVariable("--particle",ThemeJson.theme[0].colors.particle);
		cssVariable("--choose_theme",ThemeJson.theme[0].colors.choose_theme);
        
        break;
        case 1:
            document.querySelector('meta[name="theme-color"]').setAttribute('content', ThemeJson.theme[1].colors.background);
            cssVariable("--background",ThemeJson.theme[1].colors.background);
            cssVariable("--arrow",ThemeJson.theme[1].colors.arrow);
			cssVariable("--particle",ThemeJson.theme[1].colors.particle);
			cssVariable("--choose_theme",ThemeJson.theme[1].colors.choose_theme);
        
        break;
        case 2:
            document.querySelector('meta[name="theme-color"]').setAttribute('content', ThemeJson.theme[2].colors.background);
            cssVariable("--background",ThemeJson.theme[2].colors.background);
            cssVariable("--arrow",ThemeJson.theme[2].colors.arrow);
			cssVariable("--particle",ThemeJson.theme[2].colors.particle);
			cssVariable("--cho0se_theme",ThemeJson.theme[2].colors.choose_theme);

        break;

		case 3:
            document.querySelector('meta[name="theme-color"]').setAttribute('content', ThemeJson.theme[3].colors.navbar_background);
            cssVariable("--background",ThemeJson.theme[3].colors.background);
            cssVariable("--arrow",ThemeJson.theme[3].colors.arrow);
			cssVariable("--particle",ThemeJson.theme[3].colors.particle);
			cssVariable("--choose_theme",ThemeJson.theme[3].colors.choose_theme);

        break;

		case 4:
            document.querySelector('meta[name="theme-color"]').setAttribute('content', ThemeJson.theme[4].colors.navbar_background);
            cssVariable("--background",ThemeJson.theme[4].colors.background);
            cssVariable("--arrow",ThemeJson.theme[4].colors.arrow);
			cssVariable("--particle",ThemeJson.theme[4].colors.particle);
			cssVariable("--choose_theme",ThemeJson.theme[4].colors.choose_theme);

        break;

    }









	return (
		<Container>
			<div className="row">
				<div className="col">
					<h1 className="text-light text-center fw-bold choose_theme">Choose a Theme</h1>

					<div style={{ position: 'fixed', left: '20px', top: '50%', transform: 'translateY(-50%)',  cursor: 'pointer' }}>
						<i onClick={clickDown} class="ri-arrow-left-circle-line footerIcons rotate_icon arrow" />
					</div>

					<div style={{ position: 'fixed', left: '50%', top: '50%',  transform: 'translate(-50%,-50%)' }}>
						<img
							data-image={dataImage}
							style={{
								cursor: 'pointer',
								width: '100%',
								maxWidth: '70%',
								marginLeft: 'auto',
								marginRight: 'auto',
								display: 'block'
							}}
							onClick={selectTheme}
							width="400px"
							src={'/themes/' + image}
						/>
					</div>

					<div style={{ position: 'fixed', right: '20px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}>
						<i onClick={clickUp} class="ri-arrow-right-circle-line footerIcons rotate_icon arrow" />
					</div>
				</div>
			</div>

			<Particles />
		</Container>
	);
}

export default Theme;
