import { common } from "@material-ui/core/colors";

export const emailCheck = (email) => {
    //aa_-.123Aaa@aa.com

 let regEmail =  /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/;
    
 return regEmail.test(email);
 }

 
 
 