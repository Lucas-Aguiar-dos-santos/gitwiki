import styled from "styled-components";

export const InputContainer = styled.div`
    border: 1px solid #FAFAFA;
    border-radius:20px;

    height: 62px;
    width: 80%;
    

    margin: 20px;
    
    input {
        background:transparent;
        border:0;
        width:100%;
        height:62px;
        padding: 0 20px; 
        color: #FFFFFF;
        font-size:20px;
    }
    input:focus{
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    } 

`