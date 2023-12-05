import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Header(){
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 830);
    var [clicked,setClicked] = React.useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 830);
      };
      function setHeader(){
        setClicked(prev => !prev);
      }
    
      React.useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

      var classChange = ()=>{
        if(isMobile && clicked){
            return "changeStyle";
        }
        else{
            return "header-list";
        }
      }
    return(
        <div className="header">
            <nav>
                <span class="material-symbols-outlined">shopping_bag<p>ShopEasy</p></span>
                {isMobile && <FontAwesomeIcon icon={clicked ? faXmark :faBars} style={{color: "#ffffff",padding:"10px"}} onClick={setHeader} />}
                    <ul className={classChange()}>
                        <li><a href="#home" >Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#terms">Terms of Service</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                    </ul>
            </nav>
        </div>
    )
}