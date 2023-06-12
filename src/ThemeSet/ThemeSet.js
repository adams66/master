import ThemeColors from "../key/theme.json"
import { useState } from "react";


function ThemeSet(props) {
 var [ projects, SetProjects ] = useState([]);

useState(()=>{
    fetch('https://homebase.dal-10.com/company')
    .then((response) => response.json())
    .then((data) => { SetProjects(data)});

},[])


    function cssVariable(variable, value){
    var updateColor = document.querySelector(":root").style.setProperty(variable,value);
    }


    var getTheme = localStorage.getItem("dal-theme");


    switch(getTheme){
        case "Pizza Planet":
        document.querySelector('meta[name="theme-color"]').setAttribute('content', ThemeColors.theme[0].colors.background);
        cssVariable("--background",ThemeColors.theme[0].colors.background);
        cssVariable("--navbar_background",ThemeColors.theme[0].colors.navbar_background);
        cssVariable("--logo_color",ThemeColors.theme[0].colors.logo_color);
        cssVariable("--hamburger_color",ThemeColors.theme[0].colors.hamburger_color);
        cssVariable("--link_number_color",ThemeColors.theme[0].colors.link_number_color);
        cssVariable("--link_color",ThemeColors.theme[0].colors.link_color);
        cssVariable("--button_button_color",ThemeColors.theme[0].colors.button_background_color);
        cssVariable("--button_button_color",ThemeColors.theme[0].colors.button_button_color);
        cssVariable("--button_border_color",ThemeColors.theme[0].colors.button_border_color);
        cssVariable("--intro_hi_color",ThemeColors.theme[0].colors.intro_hi_color);
        cssVariable("--my_name_color",ThemeColors.theme[0].colors.my_name_color);
        cssVariable("--slogan_color",ThemeColors.theme[0].colors.slogan_color);
        cssVariable("--paragraph_color",ThemeColors.theme[0].colors.paragraph_color);
        cssVariable("--section_heading_color",ThemeColors.theme[0].colors.section_heading_color);
        cssVariable("--section_number_color",ThemeColors.theme[0].colors.section_number_color);
        cssVariable("--card_border_color",ThemeColors.theme[0].colors.card_border_color);
        cssVariable("--card_folder_color",ThemeColors.theme[0].colors.card_folder_color);
        cssVariable("--card_nav_icon_color",ThemeColors.theme[0].colors.card_nav_icon_color);
        cssVariable("--card_title_color",ThemeColors.theme[0].colors.card_title_color);
        cssVariable("--card_technology_color",ThemeColors.theme[0].colors.card_technology_color);
        cssVariable("--footer_icon_color",ThemeColors.theme[0].colors.footer_icon_color);
        cssVariable("--footer_email_color",ThemeColors.theme[0].colors.footer_email_color);
        cssVariable("--footer_line_color",ThemeColors.theme[0].colors.footer_line_color);
        cssVariable("--footer_background_color",ThemeColors.theme[0].colors.footer_background_color);
        cssVariable("--footer_copyright_color",ThemeColors.theme[0].colors.footer_copyright_color);
        cssVariable("--particle",ThemeColors.theme[0].colors.particle);
        cssVariable("--scroll_color",ThemeColors.theme[0].colors.scroll_color);
        
        break;
        case "Oreo":
            document.querySelector('meta[name="theme-color"]').setAttribute('content', ThemeColors.theme[1].colors.background);
            cssVariable("--background",ThemeColors.theme[1].colors.background);
            cssVariable("--navbar_background",ThemeColors.theme[1].colors.navbar_background);
            cssVariable("--logo_color",ThemeColors.theme[1].colors.logo_color);
            cssVariable("--hamburger_color",ThemeColors.theme[1].colors.hamburger_color);
            cssVariable("--link_number_color",ThemeColors.theme[1].colors.link_number_color);
            cssVariable("--link_color",ThemeColors.theme[1].colors.link_color);
            cssVariable("--button_button_color",ThemeColors.theme[1].colors.button_background_color);
            cssVariable("--button_button_color",ThemeColors.theme[1].colors.button_button_color);
            cssVariable("--button_border_color",ThemeColors.theme[1].colors.button_border_color);
            cssVariable("--intro_hi_color",ThemeColors.theme[1].colors.intro_hi_color);
            cssVariable("--my_name_color",ThemeColors.theme[1].colors.my_name_color);
            cssVariable("--slogan_color",ThemeColors.theme[1].colors.slogan_color);
            cssVariable("--paragraph_color",ThemeColors.theme[1].colors.paragraph_color);
            cssVariable("--section_heading_color",ThemeColors.theme[1].colors.section_heading_color);
            cssVariable("--section_number_color",ThemeColors.theme[1].colors.section_number_color);
            cssVariable("--card_border_color",ThemeColors.theme[1].colors.card_border_color);
            cssVariable("--card_folder_color",ThemeColors.theme[1].colors.card_folder_color);
            cssVariable("--card_nav_icon_color",ThemeColors.theme[1].colors.card_nav_icon_color);
            cssVariable("--card_title_color",ThemeColors.theme[1].colors.card_title_color);
            cssVariable("--card_technology_color",ThemeColors.theme[1].colors.card_technology_color);
            cssVariable("--footer_icon_color",ThemeColors.theme[1].colors.footer_icon_color);
            cssVariable("--footer_email_color",ThemeColors.theme[1].colors.footer_email_color);
            cssVariable("--footer_line_color",ThemeColors.theme[1].colors.footer_line_color);
            cssVariable("--footer_background_color",ThemeColors.theme[1].colors.footer_background_color);
            cssVariable("--footer_copyright_color",ThemeColors.theme[1].colors.footer_copyright_color);
            cssVariable("--particle",ThemeColors.theme[1].colors.particle);
            cssVariable("--scroll_color",ThemeColors.theme[1].colors.scroll_color);
        
        break;
        case "Sour Patch":
            document.querySelector('meta[name="theme-color"]').setAttribute('content', ThemeColors.theme[2].colors.background);
            cssVariable("--background",ThemeColors.theme[2].colors.background);
            cssVariable("--navbar_background",ThemeColors.theme[2].colors.navbar_background);
            cssVariable("--logo_color",ThemeColors.theme[2].colors.logo_color);
            cssVariable("--hamburger_color",ThemeColors.theme[2].colors.hamburger_color);
            cssVariable("--link_number_color",ThemeColors.theme[2].colors.link_number_color);
            cssVariable("--link_color",ThemeColors.theme[2].colors.link_color);
            cssVariable("--button_background_color",ThemeColors.theme[2].colors.button_background_color);
            cssVariable("--button_button_color",ThemeColors.theme[2].colors.button_button_color);
            cssVariable("--button_border_color",ThemeColors.theme[2].colors.button_border_color);
            cssVariable("--intro_hi_color",ThemeColors.theme[2].colors.intro_hi_color);
            cssVariable("--my_name_color",ThemeColors.theme[2].colors.my_name_color);
            cssVariable("--slogan_color",ThemeColors.theme[2].colors.slogan_color);
            cssVariable("--paragraph_color",ThemeColors.theme[2].colors.paragraph_color);
            cssVariable("--section_heading_color",ThemeColors.theme[2].colors.section_heading_color);
            cssVariable("--section_number_color",ThemeColors.theme[2].colors.section_number_color);
            cssVariable("--card_border_color",ThemeColors.theme[2].colors.card_border_color);
            cssVariable("--card_folder_color",ThemeColors.theme[2].colors.card_folder_color);
            cssVariable("--card_nav_icon_color",ThemeColors.theme[2].colors.card_nav_icon_color);
            cssVariable("--card_title_color",ThemeColors.theme[2].colors.card_title_color);
            cssVariable("--card_technology_color",ThemeColors.theme[2].colors.card_technology_color);
            cssVariable("--footer_icon_color",ThemeColors.theme[2].colors.footer_icon_color);
            cssVariable("--footer_email_color",ThemeColors.theme[2].colors.footer_email_color);
            cssVariable("--footer_line_color",ThemeColors.theme[2].colors.footer_line_color);
            cssVariable("--footer_background_color",ThemeColors.theme[2].colors.footer_background_color);
            cssVariable("--footer_copyright_color",ThemeColors.theme[2].colors.footer_copyright_color);
            cssVariable("--particle",ThemeColors.theme[2].colors.particle);
            cssVariable("--scroll_color",ThemeColors.theme[2].colors.scroll_color);

        break;


        case "Wildcat":
            document.querySelector('meta[name="theme-color"]').setAttribute('content', ThemeColors.theme[3].colors.background);
            cssVariable("--background",ThemeColors.theme[3].colors.background);
            cssVariable("--navbar_background",ThemeColors.theme[3].colors.navbar_background);
            cssVariable("--logo_color",ThemeColors.theme[3].colors.logo_color);
            cssVariable("--hamburger_color",ThemeColors.theme[3].colors.hamburger_color);
            cssVariable("--link_number_color",ThemeColors.theme[3].colors.link_number_color);
            cssVariable("--link_color",ThemeColors.theme[3].colors.link_color);
            cssVariable("--button_background_color",ThemeColors.theme[3].colors.button_background_color);
            cssVariable("--button_button_color",ThemeColors.theme[3].colors.button_button_color);
            cssVariable("--button_border_color",ThemeColors.theme[3].colors.button_border_color);
            cssVariable("--intro_hi_color",ThemeColors.theme[3].colors.intro_hi_color);
            cssVariable("--my_name_color",ThemeColors.theme[3].colors.my_name_color);
            cssVariable("--slogan_color",ThemeColors.theme[3].colors.slogan_color);
            cssVariable("--paragraph_color",ThemeColors.theme[3].colors.paragraph_color);
            cssVariable("--section_heading_color",ThemeColors.theme[3].colors.section_heading_color);
            cssVariable("--section_number_color",ThemeColors.theme[3].colors.section_number_color);
            cssVariable("--card_border_color",ThemeColors.theme[3].colors.card_border_color);
            cssVariable("--card_folder_color",ThemeColors.theme[3].colors.card_folder_color);
            cssVariable("--card_nav_icon_color",ThemeColors.theme[3].colors.card_nav_icon_color);
            cssVariable("--card_title_color",ThemeColors.theme[3].colors.card_title_color);
            cssVariable("--card_technology_color",ThemeColors.theme[3].colors.card_technology_color);
            cssVariable("--footer_icon_color",ThemeColors.theme[3].colors.footer_icon_color);
            cssVariable("--footer_email_color",ThemeColors.theme[3].colors.footer_email_color);
            cssVariable("--footer_line_color",ThemeColors.theme[3].colors.footer_line_color);
            cssVariable("--footer_background_color",ThemeColors.theme[3].colors.footer_background_color);
            cssVariable("--footer_copyright_color",ThemeColors.theme[3].colors.footer_copyright_color);
            cssVariable("--particle",ThemeColors.theme[3].colors.particle);
            cssVariable("--scroll_color",ThemeColors.theme[3].colors.scroll_color);

        break;






    }



    return (<div>{props.children}</div>)  
            
}

export default ThemeSet;