import styled from "styled-components";
import React from "react";

const Image = (props) => {

    const {shape,src,size} = props;
    
    const styles = {
        src : src,
        size : size,
    }
    if(shape === "circle" ){
        return (
            <ImageCircle {...styles}></ImageCircle>
        )
    }
    if (shape === "rectangle") {
        return (
            <AspectOutter>
                <AspectInner {...styles}></AspectInner>
            </AspectOutter>
        )
    }

    return (
        <React.Fragment>
            <ImageDefault {...styles}></ImageDefault>
        </React.Fragment>
    );
}

Image.defaultProps = {
    shape : "circle",
    src: "https://s3.ap-northeast-2.amazonaws.com/picapipicca.shop/%E1%84%83%E1%85%A9%E1%86%BC%E1%84%89%E1%85%A5%E1%86%A8%E1%84%92%E1%85%A7%E1%86%BC%E1%84%82%E1%85%B5%E1%86%B7.jpeg",
    size : 36,
};
const ImageDefault = styled.div`
      --size : ${(props)=> props.size}px;
    width : var(--size);
    height : var(--size);
    background-image: url("${(props)=> props.src}");
    background-size: cover;
`;

const AspectOutter =styled.div`
    width: 100%;
    min-width: 250px;
`;

const AspectInner =styled.div`
    position: relative;
    padding-top: 75%;
    overflow: hidden;
    background-image: url("${(props)=> props.src}");
    background-size: cover;
`;

const ImageCircle = styled.div`
    --size : ${(props)=> props.size}px;
    width : var(--size);
    height : var(--size);
    border-radius: var(--size);

    background-image: url("${(props)=> props.src}");
    background-size: cover;
    margin: 4px;
`;

export default Image;