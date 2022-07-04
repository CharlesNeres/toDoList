import React from "react";
import FormCss from "./FormCss";
import Task from "../Task/Task";
class Form extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: '',
            items: []
        };
    }

    handleChange(e){
        this.setState({value: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();      

        if(this.state.value){
            this.state.items.push(this.state.value);
        }         
        
        this.setState({value: ''});
    }

    render(){ 
        const items = this.state.items;

        return(
            <>
                <FormCss onSubmit={this.handleSubmit}>
                    <input type="checkbox" disabled />
                    <input type="text" id="task" value={this.state.value} 
                        onChange={this.handleChange} 
                        placeholder="Create a new todo."/>
                </FormCss>   
                <ul>
                    { items.map((item, index) => 
                        <Task key={index.toString()} value={item} index={index} /> 
                    )}
                </ul>
                
            </>
        )
    }
}

export default Form;