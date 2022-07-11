import React from "react";
import background from '../../images/bg-mobile-light.jpg';
import BackgroundCss from "./BackgroundCss";

class Background extends React.Component{
    render(){
        return(
            <BackgroundCss>
                <header>
                    {/* <img src={background}/> */}
                </header>                
            </BackgroundCss>
        )
    }
}

export default Background;