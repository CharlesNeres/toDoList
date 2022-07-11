import styled from "styled-components";

const FormCss = styled.form`
    margin-top: 1em;
    margin-bottom: 1em;
    width: 100%;
    background-color: #fff;
    padding: 0em .8em;
    height: 2em;
    border-radius: .2em;
    overflow: hidden;

    input[type="text"]{
        height: 100%;
        width: 90%;
        float: left;
        margin-left: .5em;
        border: none;
        outline: none;        
    }

    input[type="checkbox"]{
        float: left;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
`;

export default FormCss;