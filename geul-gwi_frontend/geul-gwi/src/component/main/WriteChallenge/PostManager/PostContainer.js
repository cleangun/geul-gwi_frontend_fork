import React, { useState } from 'react';
import styled from 'styled-components';

// import React icons
import {AiFillHeart,AiOutlineHeart} from "react-icons/ai"
import { MdPanoramaPhotosphere } from 'react-icons/md';


const PostContainer = (props) => {
    return (
        <PostManager>
            {
                props.postList.map((element, idx) => (
                    <PostItem>
                        {/* 글의 Title , Profile */}
                        <ItemProfile>{element.postUser}</ItemProfile>
                        {/* 글의 본문 */}
                        <ItemMainText>{element.mainText}</ItemMainText>
                        {/* 글의 하단부분 */}
                        <ItemBottom>
                            <LikeViewCount>{element.likeCount}</LikeViewCount>
                            <LikeButtonContainer>
                                {
                                    element.isLikeClicked ? <AiFillHeart class="likebtn" size={20} color={"red"} onClick={() => props.likeBtnClick(element.postNumber)}/> :
                                    <AiOutlineHeart class="likebtn" size={20} color={"#444444"} onClick={() => props.likeBtnClick(element.postNumber)}/>
                                }
                            </LikeButtonContainer>
                        </ItemBottom>
                    </PostItem>
                ))
            }

        </PostManager>
    );
};

const PostManager = styled.div`
    display : flex;
    width : 100%;
    min-height : 40px; height : auto;
    padding : 20px 0px 20px 0px;

    flex-direction : row;
    justify-content : center;
    gap : 20px;
    flex-wrap : wrap;
`

const PostItem = styled.div`
    display : flex;
    width : 40%;   
    height : 140px;
    flex-direction : column;
    padding : 5px 10px 5px 10px;
    border-radius : 12px;
    box-shadow : 1px 1px 10px 0px rgba(70,70,70,0.2);
`
// PostItem의 공통적인 부분 Frame으로 묶은 것
const PartFrame = styled.div`
    width : calc(100% - 20px); // padding 20px 값을 뺌
    padding : 5px 10px 5px 10px;
`

// PostItem의 제목부분
const ItemProfile = styled(PartFrame)`
    display : flex;height : 20px;
    align-items : center;
    color : rgba(10,10,10, 1);
    font-size : 16px;
`
// PostItem의 본문부분
const ItemMainText = styled(PartFrame)`
    height : 70px;
    color : rgba(120,120,120,1);
    font-size : 12px;
    line-height : 20px;
`
// PostItem의 하단 부분 ( 좋아요 , 좋아요 갯수 )
const ItemBottom = styled.div`
    display : flex;
    width : 100%;
    height : 30px;
    justify-content : space-between;
    align-items : center;
`
// PostItem의 하단 부분의 왼쪽 ( 좋아요 수 표시 )
const LikeViewCount = styled.div`
    display : flex;
    min-width : 10px; width : auto;
    padding : 0px 0px 0px 5px;
    align-items : center;
    color : rgba(10,10,10,0.7); font-size : 10px;
`
const LikeButtonContainer = styled.div`
    display : flex;
    width : 30px;
    height : 100%;
    justify-content : center; align-items : center;
    border-radius : 50%;
    cursor : pointer;

    &:hover{
        background-color : rgba(50,50,50,0.1);    
    }
`


export default PostContainer;