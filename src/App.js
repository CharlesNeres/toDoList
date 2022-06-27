import React from "react";
import background from './images/bg-mobile-light.jpg';
import BackgroundCss from "./components/background/BackgroundCss";

import './App.css';
import Background from "./components/background/Background";

class App extends React.Component{
    render(){
        return(
<<<<<<< HEAD
            <Background />                
=======
            <BackgroundCss>
                <header>
                    <img src={background}/>
                </header>                
            </BackgroundCss>
>>>>>>> d96db5d395c78874225db65aebe827c1718561c3
        )
    }
}

export default App;