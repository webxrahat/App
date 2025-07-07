export function productReducer({ products, action }) {
 switch (action.type) {
  case "Add": {
   return [...products, action.payload];
   break;
  }
  case "remove": {
  }
 }
}
