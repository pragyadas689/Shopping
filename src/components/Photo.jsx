import React from "react";

const Photo = (props) =>{
   const {title,thumbnailUrl} = props.data;
   return (
    <div class="col-sm-3">
          <div class="card">
            <img src={thumbnailUrl} className="card-img-top" alt="../"/>
            <div class="card-body">
             <h5 className="card-title">{title}</h5>
            </div>
          </div>
        </div>
   )
}

export default Photo;