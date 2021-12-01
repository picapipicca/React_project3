import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

// actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

// action creators
// createAction 을 이렇게 쓰면된다
const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false,
};

// 원래 action creators 방식
// const logIn = (user) => {
//     return {
//         type : LOG_IN,
//         user
//     }
// }

// Reducer
// handleActions 쓰는방식
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        //여기서 쿠키를 setCookie 해주면된다 (쿠키저장)
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) => produce(state, (draft) => {}),
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
  logIn,
  logOut,
  getUser,
};

export { actionCreators };
