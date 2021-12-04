import React from "react";
import {Grid,Image,Text,Button} from "../elements";




const CommentList = () => {
  return (
    <React.Fragment>
      <Grid padding="16px">
       <CommentItem/>
       <CommentItem/>
       <CommentItem/>
       <CommentItem/>
       <CommentItem/>
       <CommentItem/> 
      </Grid>
    </React.Fragment>
  );
};

export default CommentList;

const CommentItem =  (props) => {

    const {user_profile,user_name,user_id,insert_dt,post_id,contents} = props;

    return(
            <Grid is_flex>
                <Grid is_flex width = "auto">
                    <Image shape ="circle" />
                    <Text bold>{user_name}</Text >
                </Grid>
                <Grid is_flex margin= "0px 4px">
                    <Text margin="0px 3px">{contents}</Text>
                    <Text margin="0px">{insert_dt}</Text>
                </Grid>
            </Grid>
        
    )
}

CommentItem.defaultProps ={
    //유저정보,게시물정보(어떤게시물에 달려있는 코멘트다),코멘트 자체의 내용, 작성시간  있어야함
    user_profile : "",
    user_name : "hae1",
    user_id :"",
    post_id : 1,
    contents : "귀여운 마블리네요!", 
    insert_dt: "2021-12-02 08:00:00",
}