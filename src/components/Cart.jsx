import React from 'react'
import {AiFillDelete} from "react-icons/ai" 
import { useDispatch, useSelector } from 'react-redux';


const Cart = () => {

  const {cartitems,subtotal,shipping,tax,total} = useSelector(state=>state.cart)
  
  const dispatch = useDispatch();

  const increment = (id)=> {
    
    dispatch ({
        type : "addtocart",
        payload : {id},
    });

    dispatch({
        type : "calculateprice"
    })

  };

  const decrement = (id)=> {

    dispatch ({
        type : "decrement",
        payload : id,
    });

    dispatch({
        type : "calculateprice"
    })

  };

  const deletehandler = (id)=> {
    dispatch({
        type : "deletefromcart",
        payload : id,
    });

    dispatch({
        type : "calculateprice"
    })
  };

  return (
    <div className='cart'>
        <main> 

            {
                cartitems.length > 0 ? (
                    cartitems.map(i=>(
                        <Cartitem 
                           
                        imgsrc={i.imgsrc}
                        name = {i.name}
                        price = {i.price}
                        qty = {i.quantity}
                        id = {i.id}
                        key = {i.id}
                        decrement = {decrement}
                        increment = {increment}
                        deletehandler = {deletehandler}
                        />
                    ))
                ):(
                    <h1>No Items Yet</h1>
                )
            }
            
        </main>

        <aside>
            <h2>Sub Total : ${subtotal}</h2>
            <h2>Shipping : ${shipping}</h2>
            <h2>Tax : ${tax}</h2>
            <h2>Total : ${total}</h2>
        </aside>


    </div>
  )
};


const Cartitem = ({imgsrc,name,price,qty,decrement,increment,deletehandler,id})=>(

    <div className="cartitem">
        <img src= {imgsrc} alt= "item" />

        <article>
            <h3>{name}</h3>
            <p>${price}</p>
        </article>

        <div>
            <button onClick={()=> decrement(id)}>-</button>
            <p>{qty}</p>
            <button onClick={()=> increment(id)}>+</button>
        </div>

        <AiFillDelete onClick={()=>deletehandler(id)}/>

    </div>

)


export default Cart