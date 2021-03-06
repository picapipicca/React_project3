import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore, storage } from "../../shared/firebase";
import { collection, getDocs, addDoc , doc, docs } from "firebase/firestore";
import moment from "moment";

import { actionCreators as imageActions } from "./image";

//액션타입;목록 가지고온걸 리덕스에 넣어주는애, 리덕스 데이트에 뭔가를 하나 더 추가해주는애
const BRING_POST = "BRING_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const LOADING = "LOADING";

//action creator
const bringPost = createAction(BRING_POST, (post_list,paging) => ({ post_list ,paging }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post_id, post) => ({
  post_id,
  post,
}));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState = {
  list: [],
  paging: { start: null, next: null, size: 3 },
  is_loading: false,
};

const initialPost = {
  // id: 0,
  // user_info: {
  //   user_name: "hae1",
  //   user_profile:
  //     "https://s3.ap-northeast-2.amazonaws.com/picapipicca.shop/%E1%84%83%E1%85%A9%E1%86%BC%E1%84%89%E1%85%A5%E1%86%A8%E1%84%92%E1%85%A7%E1%86%BC%E1%84%82%E1%85%B5%E1%86%B7.jpeg",
  // },
  image_url:
    "https://s3.ap-northeast-2.amazonaws.com/picapipicca.shop/%E1%84%83%E1%85%A9%E1%86%BC%E1%84%89%E1%85%A5%E1%86%A8%E1%84%92%E1%85%A7%E1%86%BC%E1%84%82%E1%85%B5%E1%86%B7.jpeg",
  contents: "",
  comment_cnt: 0,
  insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
};

//middleware actions
const editPostFB = (post_id = null, post = {}) => {
  return function (dispatch, getState, { history }) {
    if (!post_id) {
      console.log("게시글 정보가 없어요!");
      return;
    }

    const _image = getState().image.preview;

    const _post_idx = getState().post.list.findIndex((p) => p.id === post_id);
    const _post = getState().post.list[_post_idx];

    console.log(_post);

    const postDB = firestore.collection("post");

    if (_image === _post.image_url) {
      postDB
        .doc(post_id)
        .update(post)
        .then((doc) => {
          dispatch(editPost(post_id, { ...post }));
          history.replace("/");
        });

      return;
    } else {
      const user_id = getState().user.user.uid;
      const _upload = storage
        .ref(`images/${user_id}_${new Date().getTime()}`)
        .putString(_image, "data_url");

      _upload.then((snapshot) => {
        snapshot.ref
          .getDownloadURL()
          .then((url) => {
            console.log(url);

            return url;
          })
          .then((url) => {
            postDB
              .doc(post_id)
              .update({ ...post, image_url: url })
              .then((doc) => {
                dispatch(editPost(post_id, { ...post, image_url: url }));
                history.replace("/");
              });
          })
          .catch((err) => {
            window.alert("앗! 이미지 업로드에 문제가 있어요!");
            console.log("앗! 이미지 업로드에 문제가 있어요!", err);
          });
      });
    }
  };
};

const addPostFB = (contents = "") => {
  return function (dispatch, getState, { history }) {
    const _user = getState().user.user;

    const user_info = {
      user_name: _user.user_name,
      user_id: _user.uid,
      user_profile: _user.user_profile,
    };

    const _post = {
      ...initialPost,
      contents: contents,
      insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
    };

    const _image = getState().image.preview;

    console.log(_image);

    const _upload = storage
      .ref(`images/${user_info.user_id}_${new Date().getTime()}`)
      .putString(_image, "data_url");

    _upload
      .then((snapshot) => {
        snapshot.ref
          .getDownloadURL()
          .then((url) => {
            console.log(url);

            return url;
          })
          .then((url) => {
            const docRef = addDoc(collection(firestore, "post"), {
              ...user_info,
              ..._post,
              image_url: url,
            });
            let post = { user_info, ..._post, id: docRef.id, image_url: url };

            dispatch(addPost(post));
            history.replace("/");

            dispatch(imageActions.setPreview(null));
          })
          .catch((err) => {
            window.alert("앗! 게시글 작성에 문제가 있어요!");
            console.log("게시글 작성에 실패했어요!", err);
          });
      })
      .catch((err) => {
        window.alert("앗! 이미지 업로드에 문제가 있어요!");
        console.log("앗! 이미지 업로드에 문제가 있어요!", err);
      });
  };
};

const getPostFB = (start = null, size = 3) => {
  return function (dispatch, getState, { history }) {

    let _paging = getState().post.paging;
    if(_paging.start && !_paging.next) {
      return;
    }
    dispatch(loading(true));
    
    const postDB = firestore.collection("post");

    let query = postDB.orderBy("insert_dt", "desc");

    // 시작점 정보가 있으면? 시작점부터 가져오도록 쿼리 수정!
    if(start){
      query = query.startAt(start);
    }

    // 사이즈보다 1개 더 크게 가져옵시다. 
    // 3개씩 끊어서 보여준다고 할 때, 4개를 가져올 수 있으면? 앗 다음 페이지가 있겠네하고 알 수 있으니까요.
    // 만약 4개 미만이라면? 다음 페이지는 없겠죠! :)
    query.limit(size+1).get().then((docs) => {
      let post_list = [];

      // 새롭게 페이징 정보를 만들어줘요.
      // 시작점에는 새로 가져온 정보의 시작점을 넣고,
      // next에는 마지막 항목을 넣습니다.
      // (이 next가 다음번 리스트 호출 때 start 파라미터로 넘어올거예요.)
      let paging = {
        start: docs.docs[0],
        next: docs.docs.length === size+1? docs.docs[docs.docs.length - 1] : null,
        size: size,
      };

      docs.forEach((doc) => {
        let _post = doc.data();

        let post = Object.keys(_post).reduce(
          (acc, cur) => {
            if (cur.indexOf("user_") !== -1) {
              return {
                ...acc,
                user_info: { ...acc.user_info, [cur]: _post[cur] },
              };
            }
            return { ...acc, [cur]: _post[cur] };
          },
          { id: doc.id, user_info: {} }
        );

        post_list.push(post);
      });

      // 마지막 하나는 빼줍니다.
      // 그래야 size대로 리스트가 추가되니까요!
      // 마지막 데이터는 다음 페이지의 유무를 알려주기 위한 친구일 뿐! 리스트에 들어가지 않아요!
      post_list.pop();

      dispatch(bringPost(post_list, paging));
    });
  };
};

//reducer (handleActions)
export default handleActions(
  {
    [BRING_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.post_list);
        draft.paging = action.payload.paging;
        draft.is_loading = false;
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }),
    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        let index = draft.list.findIndex(
          (p) => p.id === action.payload.post_id
        );

        draft.list[index] = { ...draft.list[index], ...action.payload.post };
      }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading;
      }),
  },
  initialState
);

//action creator export
const actionCreators = {
  bringPost,
  addPost,
  editPost,
  getPostFB,
  addPostFB,
  editPostFB,
};

export { actionCreators };
