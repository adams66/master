import "./footer.css"

function Footer() {

    function resetTheme(){
        console.log("reset Theme");
        localStorage.removeItem("dal-theme");
        window.location = "/"
    }



    return (
        <div className="row">
            <div className="col">
            <div className="social sticky-left flex">
           
           <a className="text-decoration-none" href="https://github.com/adams66" target="_blank"> <i className="ri-github-fill footer_icon_color icon-size"></i></a>
           <a className="text-decoration-none" href="https://www.linkedin.com/in/dalton-adams-b99502117" target="_blank"> <i className="ri-linkedin-box-line footer_icon_color   icon-size"></i></a>
            <a className="text-decoration-none" href="https://www.facebook.com/dadams12345/" target="_blank"><i className="ri-facebook-box-line footer_icon_color  icon-size"></i></a>
            <i onClick={resetTheme} style={{cursor:"pointer"}} className="ri-refresh-line footer_icon_color  icon-size"></i>

            < i class=""></i>
            <div className="footer_line_color footerLine"></div>
        </div>
            <div className="footer_copyright_color text-center p-0 p-md-3">Copyright © Dal10. All Rights Reserved
            
            <button className="resetButton d-block d-md-none" style={{"margin" :"0 auto"}} onClick={resetTheme}>Reset Theme</button>
            </div> 


            <div className="email sticky-right .footerLine">
                
                <a  className="email-link footer_email_color fw-bold" href="mailto: dalton@dal-10.com">dalton@dal-10.com</a>
                <div className="footer_line_color footerLine"></div>
             </div>

            </div>


        </div>
      );
}

export default Footer;