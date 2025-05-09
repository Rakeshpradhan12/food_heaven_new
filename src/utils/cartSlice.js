import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name : 'cart',
        initialState : {
            item : [],
        },
        reducers : {
            addItem : (state,action)=>{
                state.item.push(action.payload);
            },
            clearCart : (state)=>{
                state.item = [];
            },
            removeItem : (state,action)=>{
                const index = state?.item?.findIndex(item=>item?.id==action?.payload);
                (index > -1)? state?.item?.splice(index ,1):"";
            }
           
        }
    }
);

export const {addItem, clearCart,removeItem}= cartSlice.actions;
export default cartSlice.reducer;