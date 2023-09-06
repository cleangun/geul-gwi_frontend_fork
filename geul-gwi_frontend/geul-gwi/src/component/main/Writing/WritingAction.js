import React, { Fragment, useState } from 'react';

// import Page Component
import WritingComponent from 'component/main/Writing/WritingComponent';
const WritingAction = () => {
    // State
    const [FormName, setFormName] = useState('');       //  글의 제목을 담는 State
    const [FormMainText,setFormMainText] = useState('');    // 본문의 내용을 담는 State
    const [fnTags,setFnTags] = useState([]);    // 최종적으로 선택된 태그를 담는 List State 
    const [urlImages,setUrlImages] = useState([]);      // Url로 변환된 이미지 주소 Array


    // Handler
    const FormNameHandler = (e) =>{
        setFormName(e.target.value);
    };
    const FormMainTextHandler = (e) => {
        setFormMainText(e.target.value);
    };



    // Function

    // 이미지
     // 하위 컴포넌트에서 이미지 리스트의 최신정보를 받기 위함
     const ReturnImageList = () => {
        return urlImages;
    }
    // Function : 이미지 상대경로 저장
    const ImageAddHandler = (event) => {
        const selectedImages = event.target.files;
        let imageUrlList = [...urlImages];
        for (let i = 0; i < selectedImages.length; i++){
            const currentImageUrl = URL.createObjectURL(selectedImages[i]);
            imageUrlList.push(currentImageUrl);
        }
        // 이미지 갯수 제한 3개 => 3개 이외에는 slice로 짤려서 안들어감
        if (imageUrlList.length > 3){
            imageUrlList = imageUrlList.slice(0,3);
        }
        // urlImage 배열에 값 재할당
        setUrlImages(imageUrlList);
    }
    // Function : 이미지 삭제
    const ImageDeleteHandler = (idx) => {
        setUrlImages(urlImages.filter( (_, index) => index !== idx ));
        console.log(idx);
    }


    // 태그
    // 태그 설정 Handler
    const FnTagSetHandler = (taglist) => {
        console.log("This is WritingAction");
        console.log(taglist);
        setFnTags(taglist);
    }
    // Final Tag를 Return해주는 함수
    const ReturnFnTags = () => {
        return fnTags;
    }

    // 글 작성완료 버튼
    const OnSubmit = () => {
        let data = {
            "WriteName" : FormName,
            "WriteText" : FormMainText,
            "Images" : urlImages,
            "Tags" : fnTags
        }
    }
    


    return (
        <Fragment>
            <WritingComponent 
            FormNameChange={FormNameHandler}
            FormMainTextChange={FormMainTextHandler}

            ReturnImg={ReturnImageList}
            ImageAdd={ImageAddHandler}
            ImageDelete={ImageDeleteHandler}
            
            SetFnTags={FnTagSetHandler}
            FnTagsState={fnTags}
            />
        </Fragment>
    );
};

export default WritingAction;