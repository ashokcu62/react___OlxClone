import React, { useContext, useEffect, useState } from 'react';
import Heart from '../../assets/Heart';
import { FirebaseContext } from '../../store/Context';
import './Post.css';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../../store/Postcontext';
import { collection, getDocs } from 'firebase/firestore';

function Posts() {


  const navigate = useNavigate()


  // product and seller states

  const [products, setProducts] = useState([])
  const [seller, setSellerDetails] = useState([])
  const{setPostData,postdata}=useContext(PostContext)


  const { db } = useContext(FirebaseContext)

  useEffect(() => {


// fetching product  data from firebase

    getDocs(collection(db, "products")).then((data) => {
      console.log(data.docs)
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }).catch((err) => {
      alert(err.message)
    })
  console.log("post page")
    console.log( "post context",postdata)

  }, [])

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards" >
 
        {/* fetching datas fron database */}

          {products.map((obj) =>
            <div className="card"
              onClick={() => {

                // adding product detaits to postcontext

                setPostData(products) 
                navigate('/view')
              }}>
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image" >
                <img src={obj.imageUrl} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9;{obj.price}</p>
                <span className="kilometer">{obj.category}</span>
                <p className="name"> {obj.name}</p>
              </div>
              <div className="date">
                <span>{obj.createdAt}</span>
              </div>
            </div>
          )}

        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">                        {/*// ======================card */}
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Posts;
