import React from "react";
import ContentCss from "./ContentCss";
import Header from "./header/Header";
class Content extends React.Component{
    render(){
        return(
            <ContentCss>
               <Header />
            </ContentCss>
        )
    }
}

export default Content;