import React from "react";
import { Grid, Text, Image, Button } from "../elements";
import {history} from "../redux/configStore";

const Post = (props) => {

  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex padding="16px">
          <Grid is_flex width="auto">
            <Image shape="circle" src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_flex width="auto">
            <Text>{props.insert_dt}</Text>
            {props.is_me && (
              <Button width="auto" margin="4px" padding="4px" _onClick ={()=> {
                  history.push(`/write/${props.id}`);
              }}>
                수정
              </Button>
            )}
          </Grid>
        </Grid>
        <Grid padding="16px">
          <Text> {props.contents} </Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.image_url} />
        </Grid>
        <Grid padding="16px">
          <Text margin="0px" bold>
            댓글{props.comment_cnt}개
          </Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
// 프롭스가 없을떄를 대비한 기본 프롭스를 주는것 (프롭스값이 안와서 화면이 깨지는 일은 없으나 잘못된 프롭스값이 온다면 방어하기어렵다.)
Post.defaultProps = {
  user_info: {
    user_name: "hae1",
    user_profile:
      "https://s3.ap-northeast-2.amazonaws.com/picapipicca.shop/%E1%84%83%E1%85%A9%E1%86%BC%E1%84%89%E1%85%A5%E1%86%A8%E1%84%92%E1%85%A7%E1%86%BC%E1%84%82%E1%85%B5%E1%86%B7.jpeg",
  },
  image_url:
    "https://s3.ap-northeast-2.amazonaws.com/picapipicca.shop/%E1%84%83%E1%85%A9%E1%86%BC%E1%84%89%E1%85%A5%E1%86%A8%E1%84%92%E1%85%A7%E1%86%BC%E1%84%82%E1%85%B5%E1%86%B7.jpeg",
  contents: "자 가보자!",
  comment_cnt: 10,
  insert_dt: "2021-11-29 21:00:00",
  is_me: false,
};

export default Post;
