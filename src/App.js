import React from "react";
import background from './images/bg-mobile-light.jpg';
import BackgroundCss from "./components/background/BackgroundCss";

import './App.css';

class App extends React.Component{
    render(){
        return(
            <BackgroundCss>
                <header>
                    <img src={background}/>
                </header>                
            </BackgroundCss>
        )
    }
}

export default App;