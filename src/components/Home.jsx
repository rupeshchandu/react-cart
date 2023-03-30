import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const img1 = "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 = "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";


const Home = () => {

    const productlist = [
        {
          name:"Mac Book",
          price : 12000,
          imgsrc : img1,
          id : "asdfghjk",        
        },

        {
            name:"Black Shoes",
            price : 490,
            imgsrc : img2,
            id : "asdfkfnghjmbfbk",        
          },
    ]

    const dispatch = useDispatch();

    const addtocarthandler = (options)=>{

        dispatch({
          type : "addtocart",
          payload : options
        });

        dispatch({
          type : "calculateprice"
      });

        console.log(options);
        toast.success("Added To Cart")
    }


  return (
    <div className='home'>
        {
            productlist.map((i=>
                <Productcard key={i.id} imgsrc = {i.imgsrc} name = {i.name}  price = {i.price} id = {i.id} handler = {addtocarthandler} //props
                />
            ))
        }
    </div>
  );
};

const Productcard = ({name,id,price,handler,imgsrc})=>(
     
     <div className="productcard">
        
        <img src= {imgsrc} alt= {name} />
        <p>{name}</p>
        <h4>${price}</h4>
        <button onClick={()=> handler({name,price,id,quantity:1,imgsrc})}>Add to Cart</button>
     
     </div>

    
)

export default Home
