
import React, { Fragment, useContext, useEffect, useState } from 'react';
import './Create.css';
import Header from '../Header/Header'
import { FirebaseContext, AuthContext } from '../../store/Context';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


const Create = () => {

  const [imgUrl, setImgUrl] = useState("")
  const [image, setImage] = useState("")
  const [name, setName] = useState("")
  const [category, setCategory] = useState("''")
  const [price, setPrice] = useState(0)
  const date = new Date()
  const { storage, db } = useContext(FirebaseContext)
  const { user } = useContext(AuthContext)
  const navigate = useNavigate("")
  useEffect(() => {

  }, [])

  const handleSubmit = (e) => {                                                    //file submit
    e.preventDefault()
    const imageRef = ref(storage, `image/${image.name}`)
    uploadBytes(imageRef, image)
      .then((snapShot) => {

        getDownloadURL(snapShot.ref).then((url) => {
          console.log(url)
          setImgUrl(url)
        }).catch((err) => {
          console.log("error url")
          alert(err.message)
        })
        addDoc(collection(db, "products")
          , {
            name: name,
            price: price,
            category: category,
            imageUrl: imgUrl,
            userId: user.uid,
            createdAt: date.toDateString()

          }).then(() => {
            console.log("added product data success fully")
            navigate("/")
          }).catch((err) => {
            console.log(err.message)
          })

      })
      .catch((err) => alert(err.message))
  }
  return (
    <Fragment>

      <Header />

      <button >image</button>
      <div className="centerDiv">
        <form onSubmit={
          handleSubmit
        }>
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="Name"
            onChange={(e) => setName(e.target.value)}
            required

          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="category"
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input className="input"
            type="number"
            id="fname"
            name="Price"
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <br />


          <img alt="Posts"
            width="200px"
            height="200px"
            src={image ? URL.createObjectURL(image) : ""}></img>

          <br />
          <input
            type="file"
            onChange={
              (e) => setImage(e.target.files[0])    // files is an array

            }
            required />
          <br />
          <button className="uploadBtn"
            type="submit"
          >upload and Submit</button>
        </form>
      </div>

    </Fragment>
  );
};

export default Create;
