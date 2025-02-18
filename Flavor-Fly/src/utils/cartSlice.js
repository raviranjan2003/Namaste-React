import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItems: (state, action) => {
            //mutating the state here
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            //console.log(current(state))
            //! we can only mutate the state, can not change the reference
            // state = []  ==> this is not allowed

            state.items.length = 0;
            
            //we can also do the same by returning
            //return { items : [] };
        }
    }
})

// console.log(cartSlice);

// exporting actions
export const { addItems, removeItem, clearCart } = cartSlice.actions;

// exporting reducer
export default cartSlice.reducer;