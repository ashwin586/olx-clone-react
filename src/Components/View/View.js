import React, { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../../store/FirebaseContext";
import "./View.css";
import { PostContext } from "../../store/PostContext";
function View() {
  const [userDetails, setUserDetails] = useState();
  const { postDetails } = useContext(PostContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const { userId } = postDetails;
    firebase
      .firestore()
      .collection("users")
      .where("id", "==", userId)
      .get()
      .then((res) => {
        if (res.empty) {
          console.log("No Matching documents found");
        } else {
          res.foreach((document) => {
            setUserDetails(document.data());
          });
        }
      })
      .catch((err) => {
        console.log("Error fetching user details:", err);
      });
  }, []);

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={postDetails.url} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {userDetails && (
          <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetails.userName}</p>
            <p>{userDetails.phoneNo}</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default View;
