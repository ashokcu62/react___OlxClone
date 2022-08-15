
import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../../store/Context';
import './View.css';
import { PostContext } from '../../store/Postcontext';
import { collection, getDocs, where } from 'firebase/firestore';

function View() {

  const { db } = useContext(FirebaseContext)
  const { postData } = useContext(PostContext)    //destructuring is not working 


  const collectionRef = collection(db, 'users')
  const [seller, setSeller] = useState()

  useEffect(() => {

    console.log("viewspage : ", postData)

    const { userId } = postData
    console.log(userId)
    getDocs(collectionRef, where('id','==', userId)).then((response) => {
      setSeller((response.docs.map((obj) => ({ ...obj.data() }))))
      console.log("seller details :", seller)
    })

  }, [])




  return (


    <div className="viewParentDiv">

      {postData ? postData.map((Obj) => {
        return (
          <div>
            <div className="imageShowDiv">
              <img
                src={Obj.imageUrl}
                alt="image not found"
              />

            </div>

            <div className="rightSection">
              <div className="productDetails">
                <p>&#x20B9;{Obj.price} </p>
                <span>{Obj.name}</span>
                <p>{Obj.category}</p>
                <span>{Obj.createdAt}</span>
              </div>
            </div>
          </div>

        )
      }) : ""}

      {seller ? seller.map((obj)=>{
        return(

          <div className="contactDetails">
          <p>SellerDetails</p>
          <p>{obj.userName}</p>
          <p>{obj.phoneNumber}</p>
         </div>

        ) 
      }):""}

     

    </div>

  );
}
export default View;
