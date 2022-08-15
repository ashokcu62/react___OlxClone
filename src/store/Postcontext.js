import { createContext, useState } from "react";



export const PostContext=createContext(null)




export default function Post({children}){

    const [postData,setPostData]=useState(null)

    return(
   <PostContext.Provider value={{setPostData,postData}}>
   {children}
   </PostContext.Provider>
   )    

}