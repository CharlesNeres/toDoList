import React from "react";
import HeaderCss from "./HeaderCss";

class Header extends React.Component{
    render(){
        return(
            <HeaderCss>
                <h1>todo</h1>
                <span>teste</span>
            </HeaderCss>
        )
    }
}

export default Header;