import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import { auth } from "../../shared/firebase";
import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

// actions
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// action creators
// createAction 을 이렇게 쓰면된다

const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false,
};
//유저객체 하나에 대한 초기값
const user_initial = {
  user_name: "haewon",
  user_pwd: "1111",
  user_nickname: "hae1",
};

// 원래 action creators 방식
// const logIn = (user) => {
//     return {
//         type : LOG_IN,
//         user
//     }
// }

//middleware actions (파이어베이스에 넣고 확인해주기)
const loginFB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    const auth = getAuth();
    setPersistence(auth, browserSessionPersistence).then((res)=>{
      signInWithEmailAndPassword(auth, id, pwd)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        dispatch(
          setUser({
            user_name: user.displayName,
            id: id,
            user_profile: "",
            uid: user.uid,
          })
        );

        history.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
      });
    }); 
  };
};

const signupFB = (id, pwd, user_name) => {
  return function (dispatch, getState, { history }) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, id, pwd)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: user_name,
        })
          .then(() => {
            dispatch(
              setUser({
                user_name: user_name,
                id: id,
                user_profile: "",
                uid : user.uid, 
              })
            );
            history.push("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
      });
  };
};

const loginCheckFB = () =>{
  return function ( dispatch, getState, {history} ) {
    auth.onAuthStateChanged((user)=> {
      if(user){
        dispatch(
          setUser({
            user_name : user.displayName,
            user_profile : "",
            id : user.email,
            uid: user.uid,
          })
        );
      }else {
        dispatch(logOut()); 
      }
    })
  }
}

const logoutFB = () => {
  return function (dispatch, getState, { history } ){
    auth.signOut().then(()=> {
      dispatch(logOut());
      history.replace('/');
    })
  }
}



// //auth email&pwd 확인 8버전
// auth
//   .createUserWithEmailAndPassword(id, pwd)
//   .then((user) => {
//     console.log(user);

//auth update 8버전
// auth.currentUser.updateProfile({
//   displayName : user_name,})
//   .then(()=> {
//     dispatch(setUser({user_name : user_name, id : id , user_profile : ""}));
//     history.push('/');
// }).catch((error) => {
//   console.log(error);
// });

// Reducer
// handleActions 쓰는방식
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        //여기서 쿠키를 setCookie 해주면된다 (쿠키저장)
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// 원래 reducer 쓰던방식
// const reducer = (state={}, action={}) => {
//     switch (action.type){
//         case "LOG_IN" : {
//             state.user = action.user;
//         }
//     }
// }

//action creator export (action 생성 함수들 만든것 export 해줘야 컴포넌트에서 가져다 쓴다)
const actionCreators = {
  logOut,
  getUser,
  signupFB,
  loginFB,
  loginCheckFB,
  logoutFB,
};

export { actionCreators };
