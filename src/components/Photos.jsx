import React, { useState } from "react";
import axios from "axios";
import Photo from "./Photo";

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  const onClickHandler = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setPhotos(response.data);
       
      });
  };
  return (
    <div>
      <h1 className="text-center">All Photos</h1>
      <button className="btn btn-primary" onClick={onClickHandler}>
        Get Photos
      </button>
      <div class="row">
      {
        photos.map((photo,index)=>(
          <Photo  data = {photo}/>
        ))
      }
      </div>
    </div>
  );
};

export default Photos;
