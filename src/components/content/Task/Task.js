import React from "react";
import TaskCss from "./TaskCss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

class Task extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        
    }

    render(){
        const items = this.props.items;

        return(
            <TaskCss>
                {items.map((item)=>
                    <li key={item.toString()}>
                        <input type="checkbox" onClick={this.handleClick}/>
                        <span>{item}</span>
                        <FontAwesomeIcon icon={ faX }/>
                    </li>
                )}                
            </TaskCss>
        )
    }
}

export default Task;