import React from "react";
import './App.css';
import Background from "./components/background/Background";
import Content from "./components/content/Content";

class App extends React.Component{
    render(){
        return(
            <>
                <Background />   
                <Content />                         
            </>
        )
    }
}

export default App;