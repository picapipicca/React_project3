// 키값 기준으로 쿠키에 저장된 값을 가져오는 함수
const getCookie = (name) => {
 // 쿠키 값을 가져옵니다.
    let value = "; "+ document.cookie
// 키 값을 기준으로 파싱합니다.
    let parts = value.split(`; ${name}=`);
// value를 return! 왜 2랑 같아야 하냐면 parts에서 우리 원하는 value값이 없으면 스플릿해도 2개로 나눠지지 않기떄문에 2일때만 값을 가져와라 하는것임.   
// pop 제일 뒤에놈만 가져와라 shift 제일 앞에놈만 가져와라
    if (parts.length===2){
        return parts.pop().split(";").shift();
    }
};
// 쿠키에 저장하는 함수
const setCookie = (name,value,exp = 5) => {
    // 날짜를 만들어줍니다.
    let date = new Date();
    date.setTime(date.getTime() + exp * 24 * 1000 * 60 * 60 );
    // 저장!
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}`;
};
// 만료일을 예전으로 설정해 쿠키를 지웁니다.
const deleteCookie = (name) => {
    let date = new Date("2020-01-01").toUTCString();
    console.log(date);

    document.cookie = name + "=; expires=" + date;
};

export {getCookie,setCookie,deleteCookie};


    // //전체쿠키 가지고 오기
    // let cookies = document.cookie;
    // //쿠키 세미콜론 사용해서 문자열 쪼개주기(파싱하기)
    // cookies.split(";");
    
    // let date = new Date();
    
    
    // //만료시간 (3일뒤)
    // expires= date.setTime(date.getTime() + 86400000);

