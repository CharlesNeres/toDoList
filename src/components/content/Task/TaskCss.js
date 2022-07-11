import styled from "styled-components";

const TaskCss = styled.li`
    &:first-child{
        border-radius: .3em .3em 0 0;
    }

    &:last-child{
        border-radius: 0 0 .3em .3em;        
    }

    border-bottom: 1px solid var(--light-grayish-blue);
    list-style: none;
    padding: .5em .8em;
    background-color: #fff;
    color: var(--very-dark-grayish-blue);

    li .checked{
        text-decoration: line-through;
    }

    span{
        margin-left: .5em;
    }

    .icone{
        font-size: 80%;
        float: right;
        cursor: pointer;
    }
`;

export default TaskCss;