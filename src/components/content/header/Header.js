import React from "react";
import HeaderCss from "./HeaderCss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component{
    render(){
        return(
            <HeaderCss>
                <h1>todo</h1>
                <FontAwesomeIcon className="icon-day-night" icon={faMoon}/>
            </HeaderCss>
        )
    }
}

export default Header;