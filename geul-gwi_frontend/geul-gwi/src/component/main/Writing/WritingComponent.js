import React, { useState } from 'react';
import styled from 'styled-components';

// Import Component
import WritingForm from 'component/main/Writing/WritingForm';
import ImageUploadForm from 'component/main/Writing/ImageUploadForm';
import AddTagButton from 'component/main/Writing/AddTagButton';

const WritingComponent = (props) => {
    
    return (
        <Frame>
            <FlexFrame>
                {/* Component Name TItle */}
                <TitleContainer style={{marginBottom : '50px'}}>
                    <ComponentName>
                        글 작성
                    </ComponentName>
                    <ComponentIntro>
                        사람들에게 당신의 <span style={{color : '#FD7474'}}>영향</span>을 전파하세요
                    </ComponentIntro>
                </TitleContainer>

                <WritingForm 
                FormNameChange={props.FormNameChange}   // Writing Action의 FormName Handler넘겨주기
                FormMainTextChange={props.FormMainTextChange}   // Writing Action의 FormMainTtext Handler넘겨주기
                />
                {/* 이미지 업로드 하는 Component에 Handler 넘겨주기 */}
                <ImageUploadForm 
                style={{marginBottom : '20px'}}
                returnImageList={props.ReturnImg}
                imageAddHandler={props.ImageAdd}
                imageDeleteHandler={props.ImageDelete}
                />

                <AddTagButton
                SetFnTags={props.SetFnTags}     // list State값 변경하는 함수 넘겨주기
                FnTagsState={props.FnTagsState} // WritingAction의 list State넘겨주지
                />
                
            </FlexFrame>
        </Frame>
    );
};
// Frame
const Frame = styled.div`
    position : relative;
    display : flex;
    width : 100%;
    min-height : 700px;

    background-color : white;
    border-radius : 16px;

    justify-content : center;
    padding-top: 20px; padding-bottom: 20px;
    margin-bottom : 60px;
`

const FlexFrame = styled.div`
    display : flex;
    width : 90%;
    height : calc(100%);

    flex-direction: column;
`

// level 1
const ItemContainer = styled.div`
    width : 100%;
    min-height : 20px;
    height : auto;
`

const TitleContainer = styled.div`
    display : flex;
    width : 100%;
    height : 50px;

    flex-direction: column;
    justify-content : space-between;
`


// level 2
    // Title Contanier
    const ComponentName = styled.div`
        width : 100%;
        min-height : 20px;
        height : auto;
        font-size: 24px;
        font-family: "Nanum Square";
        font-style : "bold";
    `
    const ComponentIntro = styled.div`
        width : 100%;
        min-height : 10px;
        height : auto;

        font-size : 14px;
        color : #BCBABA;
    `

export default WritingComponent;