import React, { Fragment, memo, useState } from 'react';
import styled from 'styled-components';

// 컴포넌트 임포트
import AddTagListComponent from 'component/main/Writing/AddTagListComponent';

const AddTagButton = (props) => {
    // Icon Public 경로
    const PublicWritingIconPath = process.env.PUBLIC_URL + "/icon/Writing/"

    
    const [showTagList, setShowTagList] = useState(false); // 태그 추가 리스트를 보여줄지 True False
    
    // Function
    // 태그 추가 리스트 , 열고 닫기
    const ShowList = () => {
        setShowTagList(!showTagList);
    }


    return (
        <Fragment>
            <AddTagFrame>
                {/* 태그를 추가하라는 설명 */}
                태그 지정
                
                {/* 태그 추가 버튼 */}
                <ShowButton onClick={ShowList}>
                    <ButtonTextContainer>태그추가</ButtonTextContainer>
                    <ButtonIconContainer>
                        <Iconimg src={PublicWritingIconPath + "plus.svg"}/>
                    </ButtonIconContainer>
                </ShowButton>
        
                {/* 태그 추가 리스트 보기 */}
                {
                    showTagList?  
                    <AddTagListContainer>
                        <AddTagListComponent    
                        ShowFunc={ShowList}
                        SetFnTags={props.SetFnTags}
                        />
                    </AddTagListContainer> :
                    ""
                }

                
                

            </AddTagFrame>
            {/* 선택된 태그 보여주기 */}
            <FnTagsShowContainer>
                {
                    props.FnTagsState.map((element,idx) => (
                        <FnTagItem key={`${idx}-${element.tagname}}`}>{`#${element.tagname}`}</FnTagItem>
                    ))
                }
            </FnTagsShowContainer>

            {/* 작성완료 */}
            <SubmitContainer>
                <SubmitBtn>완료 </SubmitBtn>
            </SubmitContainer>
        </Fragment>
    );
};
// Frame
const AddTagFrame = styled.div`
    position : relative;
    display : flex;
    width : 100%;
    height : 40px;

    justify-content : flex-start; 
    align-items: center;
    font-size : 20px;
    color : black;//#6F6A6A;
`

// 태그 추가하기 버튼 Frame - Leevl 1
const ShowButton = styled.div`
    position : absolute;
    display : flex;
    top : 0px; right : 0px;
    width : 140px;
    height : 100%;
    padding : 0px 10px 0px 10px;
    border-radius: 16px;
    background: #FFF;
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.25);
    align-items: center; justify-content: space-between;
    cursor : pointer;
    transition : 0.2s;
    &:hover{    
        background-color : mistyrose;
    }
`
// 태그 추가하는 영억 - Level 1
const AddTagListContainer = styled.div`
    position : absolute; display : flex;
    width : 100%;
    min-height : 300px; height : auto;
    top : 50px; right : 0px;
    padding : 0px 0px 10px 0px;

    border-radius : 12px;
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.25);
    background-color : white;

    justify-content: center;
`



// 태그 추가하기 버튼 - 텍스트 Container - Level 2
const ButtonTextContainer = styled.div`
    display : flex;
    width : 60%;
    height : 100%;
    justify-content: center; align-items: center;
    font-size : 12px; color : black;
`
// 태그 추가하기 버튼 - Icon Container - Level 2
const ButtonIconContainer = styled.div`
    display : flex;
    width : 15px;
    height : 15px;
    justify-content: center;
    align-items: center;
`
// 태그 추가하기 버튼의 Icon 이미지
const Iconimg = styled.img`
    width : 100%;
    height : 100%;
    object-fit: contain;
`

// 선택된 태그를 보여주는 Container - FnTags
const FnTagsShowContainer = styled.div`
    display : flex;
    width : 100%;
    height : 50px;
    justify-content: flex-end;
    align-items : center;
    gap : 5px;
`
const FnTagItem = styled.div`
    display : flex;
    min-width : 20px; width : auto;
    padding : 5px 10px 5px 10px;
    font-size : 14px;color : white;
    justify-content : center; align-items : center;
    border-radius : 12px;
    background-color : #B5B5B5;
`

// 작성완료 - OnSubmit
const SubmitContainer = styled.div`
    display : flex;
    width : 100%;
    height : 80px;
    justify-content : flex-end;
    align-items : end;
`
const SubmitBtn = styled.div`
    display : flex;
    width : 100px;
    height : 30px;
    border-radius : 12px;
    background-color : #FF9E9E;
    justify-content : center; align-items : center;
    font-size : 14px; color : white;
    box-shadow : 1px 1px 8px 0px #B5B5B5;
    cursor : pointer;
    &:hover{
        background-color : #FFB1B1;
    }
`
export default AddTagButton;