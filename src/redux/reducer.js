import {createReducer} from "@reduxjs/toolkit";


export const cartReducer = createReducer({
    cartitems : [],
    subtotal : 0,
    shipping:0,
    tax:0,
    total:0
},{

    addtocart:(state,action) =>{
        const item = action.payload;
        const isiteminlist = state.cartitems.find((i)=> i.id === item.id)

        if (isiteminlist){
            state.cartitems.forEach((i)=>{
                if (i.id === item.id){
                    i.quantity+=1;
                }
            })
        }


        else{
            state.cartitems.push(item);
        }
    },

    decrement:(state,action)=>{
        const item = state.cartitems.find((i)=> i.id === action.payload);
        if (item.quantity > 1){
            state.cartitems.forEach((i)=>{
                if (i.id === item.id){
                    i.quantity-=1;
                }
            })
        }
    },

    deletefromcart:(state,action)=>{
        state.cartitems = state.cartitems.filter((i)=> i.id !== action.payload);
    },

    calculateprice:(state)=>{
        let sum = 0;
        state.cartitems.forEach((i)=> (sum += i.price * i.quantity ));
        state.subtotal = sum;
        state.shipping = state.subtotal > 1000 ? 0 : 200;
        state.tax = +(state.subtotal*0.18).toFixed();
        state.total = state.subtotal + state.tax + state.shipping;

    }
})

