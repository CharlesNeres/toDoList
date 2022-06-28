import React from "react";
import FormCss from "./FormCss";

class Form extends React.Component{
    render(){
        return(
            <FormCss>
                <input type="checkbox" disabled />
                <input type="text" placeholder="Create a new todo."/>
            </FormCss>
        )
    }
}

export default Form;