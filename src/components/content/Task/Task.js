import React from "react";
import TaskCss from "./TaskCss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

class Task extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.remove = this.remove.bind(this);
        this.state = {
            [this.props.index]: false            
        }
    }

    remove(key){
        this.props.delete(key);        
    }

    handleChange(e){
        const name = e.target.name;        
        
        this.setState({
            [name]: !this.state[name]
        });
    }

    render(){
        const index = this.props.index; 
        const value = this.props.value;  
        
        return(
            <TaskCss>                              
                <input type="checkbox" name={index}
                        onChange={this.handleChange} />
                <span className={this.state[index] ? 'checked' : ''}>{value}</span>
                <FontAwesomeIcon className="icone" onClick={()=>this.remove(index)} icon={ faX } />                                
            </TaskCss>
        )
    }
}

export default Task;