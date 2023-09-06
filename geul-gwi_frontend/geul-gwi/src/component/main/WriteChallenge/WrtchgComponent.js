import React from 'react';
import styled from 'styled-components';

// import Component
import SelectChg from 'component/main/WriteChallenge/SelectChallenge/SelectChg';
import WrtChgInfo from 'component/main/WriteChallenge/WrtChgInfo/WrtChgInfo';
import PostContainer from 'component/main/WriteChallenge/PostManager/PostContainer';

const WrtchgComponent = (props) => {
    return (
        <Frame>
            <FlexManager>
                <SelectChg
                prevButtonClick={props.prevButtonClick}
                nextButtonClick={props.nextButtonClick}
                selectedChallenge={props.selectedChallenge}
                />

                <WrtChgInfo
                selectedChallenge={props.selectedChallenge}
                />

                <PostContainer
                    postList = {props.postList}
                    likeBtnClick = {props.likeBtnClick}
                />
                
            </FlexManager>
        </Frame>
    );
};

// Frame
const Frame = styled.div`
    display : flex;
    width : 100%;
    min-height : 500px; height : auto;
    border-radius : 16px;
    background-color: white ;
    justify-content: center;
`
const FlexManager = styled.div`
    display : flex;
    width : 92%;
    min-height : calc(100% - 20px);
    height : auto;
    padding : 10px 0px 10px 0px;
    flex-direction: column;
    align-items : center;
    gap : 20px;
    /* justify-content: space-between; */
`


export default WrtchgComponent;