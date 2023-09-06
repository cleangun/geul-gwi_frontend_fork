import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import styled from "styled-components";

const TagButton = ({fontColor, backColor , value , widthPercentage}) => {
    return (
        <ButtonFrame style={{backgroundColor : backColor , color : fontColor , minWidth : `calc(70px * ${widthPercentage})` , width : 'auto'}}>
            {value}
        </ButtonFrame>
    );
};

// Styled component 
const ButtonFrame = styled.div`
    display : flex;
    height : 30px;
    border-radius : 8px;
    justify-content : center;
    align-items : center;
    font-size : 14px;
    margin-right : 10px;
    margin-bottom : 5px;
    cursor : pointer;
    padding : 0px 5px 0px 5px;
`

export default TagButton;