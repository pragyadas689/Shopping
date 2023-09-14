import React , {useState} from 'react';
import axios from 'axios';
import Item from './Item';

const Shops = ()=>{

    const [items,setItems] = useState([]);

    const onClickHandler = () =>{
        axios.get('https://fakestoreapi.com/products')
             .then((response) =>{
                setItems(response.data);
             })
    }

    return (
     <div>
        <h1 className='text-center'>Shopping Items</h1>
        {onClickHandler}
        <div className='row'>
         {
            items.map((item,index)=>(
             <Item key = {index} data = {item}/>
            ))
         }
        </div>
     </div>
    );
}

export default Shops;