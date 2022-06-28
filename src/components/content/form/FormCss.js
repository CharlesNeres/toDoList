import styled from "styled-components";

const FormCss = styled.form`
    margin-top: 1em;
    margin-bottom: .5em;
    width: 100%;
    background-color: #fff;
    /* padding: 0 1em; */
    height: 2em;
    border-radius: .2em;
    overflow: hidden;

    input[type="text"]{
        height: 100%;
        width: 90%;
        float: right;
        border: none;
        outline: none;        
    }

    input[type="checkbox"]{
        float: left;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        left: 4%;        
    }
`;

export default FormCss;