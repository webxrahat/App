export function productReducer(state, action) {
 switch (action.type) {
  case "Add": {
   return { ...state, cartList: [...state.cartList, action.cartList] };
  }
  //   break;
  // case "Edit":
  //   {
  //     return state.map((product) => product.id === action.payload);
  //   }
  //   break;
  // case "Delete": {
  //   return state.filter((product) => product.id !== action.payload);
  // }
  default:
   return state;
 }
}
