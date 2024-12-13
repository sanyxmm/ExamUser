// import { createSlice } from '@reduxjs/toolkit';

// //shopping Cart
// const cartinitialState = {
//     isCartOpen: false,
//     isCheckoutOpen :false,
//     cartItems: [],
//     shippingDetails:{},
//     cartTotal:"",
//     url:"https://fidofinder-1.onrender.com",
// };
// const cartSlice = createSlice({
//     name: 'cart',
//     initialState: cartinitialState, 
//     reducers: {
//         toggleCart(state, action) { state.isCartOpen = action.payload},
//         toggleCheckout(state, action) {state.isCheckoutOpen = action.payload},
//         setshippingDetails(state, action) {state.shippingDetails = action.payload},
//         setcartTotal(state, action) {state.cartTotal = action.payload},
//         addItem(state, action) {
//             const newItemId = action.payload._id;
//             const existingItem = state.cartItems.find(item => item._id === newItemId);

//             if (existingItem) {
//                 existingItem.quantity++;
//             } else {
//                 state.cartItems.push(action.payload);
//             }
//         },


//         removeItem(state, action) {
//             state.cartItems = state.cartItems.filter(item => item._id !== action.payload);
//         },


//         incrementItem(state, action) {
//             state.cartItems = state.cartItems.map(item => {
//                 if (item._id === action.payload) {
//                     item.quantity++;
//                 }
//                 return item;
//             });
//         },


//         decrementItem(state, action) {
//             state.cartItems = state.cartItems.map(item => {
//                 if (item._id === action.payload) {
//                     item.quantity--;
//                 }
//                 return item;
//             }).filter(item => item.quantity !== 0);
//         },
//         clearCart(state) {
//             state.cartItems = [];
//         }
//     }
// });
// export const { toggleCart,toggleCheckout, addItem, removeItem, incrementItem, decrementItem ,setshippingDetails,setcartTotal,clearCart} = cartSlice.actions;
// export const cartReducer = cartSlice.reducer;
