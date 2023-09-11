import React, { Fragment, useState, useContext } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import {FirebaseContext, AuthContext} from '../../store/FirebaseContext';

const Create = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState('');
  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const navigate = useNavigate();

  const date = new Date()

  const handleSubmit = () => {
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
       ref.getDownloadURL().then((url) => {
        firebase.firestore().collection('products').add({
           name,
           category,
           price,
           url,
           userId:user.uid,
           createdAt: date.toDateString()
        })
        navigate('/');
       })
    })
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input
              className="input"
              type="number"
              id="fname"
              name="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
         
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : '' }></img>
          
            <br />
            <input onChange={(e) => setImage(e.target.files[0])} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
