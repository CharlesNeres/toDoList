import React from "react";
import ContentCss from "./ContentCss";
import Header from "./header/Header";
import Form from "./form/Form";

class Content extends React.Component{
    render(){
        return(
            <ContentCss>
               <Header />
               <Form />
            </ContentCss>
        )
    }
}

export default Content;