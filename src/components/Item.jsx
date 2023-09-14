import React from "react";

const Item = (props)=>{
    const {id,title,price,description,image} = props.data;
 return (
   <div class="row mb-4 d-flex justify-content-between align-items-center">
     <div class="col-md-2 col-lg-2 col-xl-2">
       <img src={image} class="img-fluid rounded-3" alt="../" />
     </div>
     <div class="col-md-3 col-lg-3 col-xl-3">
       <h6 class="text-muted">{title}</h6>
       <h6 class="text-black mb-0">{description}</h6>
     </div>
     <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
       <h6 class="mb-0">€ 44.00</h6>
     </div>
   </div>
 );
}

export default Item;