import React from "react";
import { Grid, Text, Button } from "../elements";
import { getCookie, deleteCookie } from "../shared/Cookie";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import {history} from "../redux/configStore"; 
import { apiKey } from "../shared/firebase";

const Header = (props) => {
  //쿠키가 있다 없다(로그인을 했다 하지않았다) 유무를 state에 넣어준다
  //is_login : state 값, setIsLogin : is_login의 state값을 수정하는 함수, useState(초기값)
  //useState(false)  -> false 인것은 "처음에는 로그인안함" 이라고 주는것.
  // const [is_login,setIsLogin] = React.useState(false);
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  
  const is_session = sessionStorage.getItem(_session_key)? true : false;  

  //useEffect 훅 사용해서 is_login을 쿠키를 확인해서 true,false 하는 애를 만듦
  // React.useEffect(()=>{
  //     let cookie = getCookie("user_id");
  //     console.log(cookie);

  //     if(cookie){
  //         setIsLogin(true);
  //     }else{
  //         setIsLogin(false);
  //     }
  // });

  console.log(is_session);

  if (is_login && is_session) {
    return (
      <React.Fragment>
        <Grid is_flex padding="4px 16px">
          <Grid>
            <Text size="24px" bold margin="0px">
              Ministagram
            </Text>
          </Grid>
          <Grid is_flex>
            <Button bgcolor="#b2cef7" color="#212121" text="내정보"></Button>
            <Button _onClick = {() => {
              history.push('/noti');
            }} bgcolor="#8dafe0" color="#212121" text="알림"></Button>
            <Button
              bgcolor="#6f98b0"
              color="#212121"
              text="로그아웃"
              _onClick={() => {
                dispatch(userActions.logoutFB());
              }}
            ></Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text size="24px" bold margin="0px" margin="0px">
            Ministagram
          </Text>
        </Grid>
        <Grid is_flex>
          <Button bgcolor="#b2cef7" color="#212121" text="로그인" _onClick= {()=> {
            history.push('/login');
          }}></Button>
          <Button bgcolor="#8dafe0" color="#212121" text="회원가입" _onClick= {()=> {
            history.push('/signup');}}></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
Header.defaultProps = {}

export default Header;
