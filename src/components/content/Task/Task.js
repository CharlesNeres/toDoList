import React from "react";
import TaskCss from "./TaskCss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

class Task extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            [this.props.index]: false            
        }
    }

    handleClick(e){
        
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
                <li>                 
                    <input type="checkbox" name={index}
                            onChange={this.handleChange} />
                    <span className={this.state[index] ? 'checked' : ''}>{value}</span>
                    <FontAwesomeIcon icon={ faX } onClick={this.handleClick} />
                </li>
            </TaskCss>
        )
    }
}

export default Task;