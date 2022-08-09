import React, { useContext, useEffect, useState } from 'react';
import { collection, doc, getDocs } from "firebase/firestore";
import Heart from '../../assets/Heart';
import { FirebaseContext } from '../../store/Context';
import './Post.css';

function Posts() {
  const [products, setProducts] = useState([])
  const { db } = useContext(FirebaseContext)
  useEffect(() => {
    getDocs(collection(db, "products")).then((data) => {
      console.log(data.docs)
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }).catch((err) => {
      alert(err.message)
    })

  }, [])

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">

          {products.map((obj) =>
           <div className="card">
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={obj.imageUrl} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9;{obj.price}</p>
                <span className="kilometer">{obj.category}</span>
                <p className="name"> {obj.name}</p>
              </div>
              <div className="date">
                <span>{obj.name}</span>
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
